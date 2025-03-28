/**
 * global-teardown.ts: This module is responsible for tearing down the global state after all tests have completed.
 * It includes a default export function that runs after all tests, cleaning up any necessary global context.
 * By centralizing these teardown operations, it ensures a consistent end state for all tests, improving test reliability.
 * You can add any teardown setup code within this function.
 * Note: Due to a known issue (https://github.com/microsoft/playwright/issues/23875),
 * the last line of output from this function may be cleared by the line reporter.
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import { getAllureReportUrl, notifySlackWithResults } from '../src/tobias-playwright/managers/slack-manager';

const execAsync = promisify(exec);

async function globalTeardown() {
    const prepareAllure = path.resolve(__dirname, '../allure/scripts/prepare-allure.sh');
    const generateAllureReport = path.resolve(__dirname, '../allure/scripts/generate-allure-report.sh');
    const generateAllureMetadata = path.resolve(__dirname, '../allure/scripts/generate-metadata.sh');
  
    await execAsync(`bash ${generateAllureReport}`);
    await execAsync(`bash ${generateAllureMetadata}`);
    await execAsync(`bash ${prepareAllure}`);
  
    // const reportUrl = await getAllureReportUrl();
    // await notifySlackWithResults(reportUrl);
  
    const cliArgs = process.argv.slice(2);
    const reportUrlFromCI = cliArgs[0];
    
    const reportUrl = reportUrlFromCI || await getAllureReportUrl();
    await notifySlackWithResults(reportUrl);
  }

export default globalTeardown;
