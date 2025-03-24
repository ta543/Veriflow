import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { spawn } from 'child_process';
import { getCurrentEnvConfig } from '@AllureEnvConfig';
import { testMetadata } from 'setup/test-metadata';

const envConfig = getCurrentEnvConfig();

export function getAllureReportUrl(): Promise<string> {
    return new Promise((resolve, reject) => {
        const allureProcess = spawn("allure", ["serve", "allure/allure-results"]);
        allureProcess.stdout.on('data', (data) => {
            const output = data.toString();
            process.stdout.write(output);

            const match = output.match(/http:\/\/[0-9.]+:\d+/);
            if (match) {
                const url = match[0];
                allureProcess.kill();
                resolve(url);
            }
        });

        allureProcess.stderr.on('data', (data) => {
            process.stderr.write(data);
        });

        allureProcess.on('error', (err) => {
            reject(`❌ Failed to start Allure: ${err.message}`);
        });

        allureProcess.on('close', (code) => {
            if (code !== 0) {
                reject(`❌ Allure process exited with code ${code}, and no URL was captured.`);
            }
        });
    });
}

function calculateTrend(currentPassed: number, currentTotal: number): string {
    const historyPath = path.resolve('allure/allure-history/last-summary.json');

    if (!fs.existsSync(historyPath)) {
        fs.writeFileSync(historyPath, JSON.stringify({ passed: currentPassed, total: currentTotal }, null, 2));
        return "🆕 *First recorded test run — baseline created!*";
    }

    const lastSummary = JSON.parse(fs.readFileSync(historyPath, 'utf8'));
    const lastPassRate = (lastSummary.passed / lastSummary.total) * 100;
    const currentPassRate = (currentPassed / currentTotal) * 100;

    const rateDiff = currentPassRate - lastPassRate;
    fs.writeFileSync(historyPath, JSON.stringify({ passed: currentPassed, total: currentTotal }, null, 2));

    if (rateDiff > 0) {
        return `📈 *Pass rate improved by ${rateDiff.toFixed(1)}% compared to last run!*`;
    } else if (rateDiff < 0) {
        return `📉 *Pass rate dropped by ${Math.abs(rateDiff).toFixed(1)}% compared to last run!*`;
    } else {
        return "➖ *Pass rate remained the same as the last run.*";
    }
}

function getFailedTests() {
    const dataDir = path.resolve('allure/allure-results');
    if (!fs.existsSync(dataDir)) {
        return [];
    }

    const failedTestsSet = new Set();
    const failedTestsList = [];
    const files = fs.readdirSync(dataDir).filter(file => file.endsWith('.json'));

    for (const file of files) {
        const filePath = path.join(dataDir, file);
        try {
            const testResult = JSON.parse(fs.readFileSync(filePath, 'utf8'));

            if (testResult.status === "failed") {
                const testId = Object.keys(testMetadata).find(key => testResult.name.includes(testMetadata[key].displayname));

                if (testId && !failedTestsSet.has(testResult.name)) {
                    failedTestsSet.add(testResult.name);

                    failedTestsList.push({
                        title: `[${testMetadata[testId].tms}] ${testResult.name}`,
                        status: "failed",
                        tmsId: testMetadata[testId].tms,
                        tmsUrl: `https://tobiasa-team.atlassian.net/browse/${testMetadata[testId].tms}`
                    });
                }
            }
        } catch (error) {
        }
    }

    fs.writeFileSync('test-reports.json', JSON.stringify(failedTestsList, null, 2));
    return failedTestsList;
}

export async function notifySlackWithResults(allureReportUrl: string) {
    const slackToken = process.env.SLACK_BOT_TOKEN;
    const channelId = process.env.SLACK_CHANNEL_ID;

    if (!slackToken || !channelId) {
        throw new Error('SLACK_BOT_TOKEN or SLACK_CHANNEL_ID is missing!');
    }

    const summaryPath = path.resolve('allure/allure-report/widgets/summary.json');
    const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));

    const passed = summary.statistic.passed;
    const skipped = summary.statistic.skipped;
    const failed = summary.statistic.failed;
    const broken = summary.statistic.broken;
    const executed = summary.statistic.total;

    const now = new Date();

    const failedTestsList = getFailedTests();
    const failedTestsCount = failedTestsList.length;
    const totalExecuted = passed + failed + skipped + broken;
    const passedTestsCount = totalExecuted - failedTestsCount;
    const passPercentage = Math.round((passedTestsCount / totalExecuted) * 100);
    
    const maxDisplayedFailures = 5;
    const displayedFailures = failedTestsList.slice(0, maxDisplayedFailures)
        .map(test => `[<${test.tmsUrl}|${test.tmsId}>] *${test.title.replace(`[${test.tmsId}] `, '')}*`)
        .join("\n");
    
    const seeMoreText = failedTestsCount > maxDisplayedFailures
        ? `\n_See more..._`
        : "";
    
    const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Stockholm',
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        // second: '2-digit',
        // timeZoneName: 'short'
    };

    const formattedDate = now.toLocaleString('en-GB', options);

    const statusEmoji = failed > 0 ? ':x:' : ':white_check_mark:';
    const statusText = failed > 0 ? 'FAILED' : 'PASSED';

    const trendMessage = calculateTrend(passed, executed);

    const logsUrl = process.env.TEST_LOGS_URL || 'http://localhost:3000/logs';

    const payload = {
        channel: channelId,
        blocks: [
            {
                type: "header",
                text: {
                    type: "plain_text",
                    text: `${statusEmoji} VeriFlow Automated Test Run - ${statusText}`,
                    emoji: true
                }
            },
            {
                type: "section",
                fields: [
                    { type: "mrkdwn", text: `📅 *Date:* ${formattedDate}` },
                    { type: "mrkdwn", text: `🌍 *Environment:* ${envConfig.environment}` },
                    { type: "mrkdwn", text: `🚀 *Release:* ${envConfig.release}` },
                    { type: "mrkdwn", text: `🌐 *Language:* ${envConfig.language}` },
                    { type: "mrkdwn", text: `🖥️ *Browser:* ${envConfig.browser}` },
                    { type: "mrkdwn", text: `💻 *Platform:* ${envConfig.platform}` },
                    { type: "mrkdwn", text: `🧪 *Suite:* ${envConfig.suite}` }
                ]
            },
            { type: "divider" },
            {
                type: "section",
                fields: [
                    { type: "mrkdwn", text: `✅ *PASSED:* ${passed}` },
                    { type: "mrkdwn", text: `❌ *FAILED:* ${failed}` },
                    { type: "mrkdwn", text: `⚠️ *BROKEN:* ${broken}` },
                    { type: "mrkdwn", text: `🛑 *SKIPPED:* ${skipped}` }
                ]
            },
            { type: "divider" },
            {
                type: "section",
                fields: [
                    { type: "mrkdwn", text: `✅ *PASSED TESTS:* ${passedTestsCount}/${totalExecuted}` },
                    { type: "mrkdwn", text: `❌ *FAILED TESTS:* ${failedTestsCount}/${totalExecuted}` }
                ]
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `📊 *Pass Rate: ${passPercentage}%*`
                }
            },    
            { type: "divider" },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `📋 *FOLLOWING TESTS FAILED:*\n${displayedFailures}${seeMoreText}`
                }
            },
            { type: "divider" },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: trendMessage || "_Trend information unavailable._"
                }
            },
            {
                type: "actions",
                elements: [
                    {
                        type: "button",
                        text: { type: "plain_text", text: "📥 View Allure Report", emoji: true },
                        url: allureReportUrl,
                        style: "primary"
                    },
                    {
                        type: "button",
                        text: { type: "plain_text", text: "📜 View Logs", emoji: true },
                        url: logsUrl,
                        style: "danger"
                    }
                ]
            }
        ]
    };
            
    const response = await fetch("https://slack.com/api/chat.postMessage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${slackToken}`
        },
        body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (!result.ok) {
        throw new Error(`Slack API Error: ${result.error}`);
    }
}
