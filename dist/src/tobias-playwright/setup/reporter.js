"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
class MyReporter {
    constructor() {
        this.testResults = new Map();
    }
    onBegin(_config, suite) {
        console.clear();
        console.log(chalk_1.default.magenta("\n=== Test Suite Started ==="));
        try {
            let currentSuite = suite;
            while (currentSuite.suites.length > 0) {
                currentSuite = currentSuite.suites[0];
            }
            console.log(`📂 Test Suite: ${chalk_1.default.bold.white(currentSuite.title)}`);
        }
        catch (error) {
            console.error(chalk_1.default.redBright("❌ Error accessing suite title:"), error);
        }
        const totalUniqueTests = suite.allTests().length;
        console.log(chalk_1.default.gray(`🕒 Starting test execution...`));
        console.log(chalk_1.default.gray(`🧪 Total tests to run: ${totalUniqueTests}\n`));
    }
    onTestBegin(test) {
        console.log(`${chalk_1.default.bold.hex('#FF00FF')('🚀 [RUNNING]')} ${chalk_1.default.hex('#00FFFF')(test.title)}`);
    }
    onTestEnd(test, result) {
        const key = test.titlePath().join(' > ');
        if (!this.testResults.has(key)) {
            this.testResults.set(key, []);
        }
        this.testResults.get(key).push(result);
        // Show step feedback (per attempt)
        if (result.status === 'passed') {
            console.log(`${chalk_1.default.bold.green('✅ [PASSED]')} ${chalk_1.default.whiteBright(test.title)}`);
        }
        else if (result.status === 'failed') {
            console.log(`${chalk_1.default.bold.redBright('❌ [FAILED]')} ${chalk_1.default.whiteBright(test.title)}`);
            if (result.error) {
                console.error(chalk_1.default.redBright(`   📌 Reason: ${result.error.message}`));
                if (result.error.stack) {
                    console.error(chalk_1.default.gray(result.error.stack));
                }
            }
        }
    }
    onStdOut(chunk) {
        const output = typeof chunk === 'string' ? chunk : chunk.toString();
        for (const line of output.split('\n')) {
            if (line.startsWith('[step]')) {
                console.log(chalk_1.default.cyan(`🧩 [STEP] ${line.replace('[step]', '').trim()}`));
            }
            else if (line.startsWith('[step:pass]')) {
                console.log(chalk_1.default.green(`   ✅ [STEP PASSED] ${line.replace('[step:pass]', '').trim()}`));
            }
            else if (line.startsWith('[step:fail]')) {
                console.log(chalk_1.default.red(`   ❌ [STEP FAIL] ${line.replace('[step:fail]', '').trim()}`));
            }
        }
    }
    onStdErr(chunk) {
        const output = typeof chunk === 'string' ? chunk : chunk.toString();
        console.error(chalk_1.default.redBright(`[stderr] ${output.trim()}`));
    }
    onError(error) {
        console.error(chalk_1.default.redBright(`\n💥 Unhandled Error: ${error.message}`));
        if (error.stack) {
            console.error(chalk_1.default.gray(error.stack));
        }
    }
    onEnd() {
        console.log(chalk_1.default.magenta("\n=== Test Run Completed ==="));
        let passed = 0;
        let failed = 0;
        for (const results of this.testResults.values()) {
            const finalResult = results[results.length - 1];
            if (finalResult.status === 'passed') {
                passed++;
            }
            else {
                failed++;
            }
        }
        const total = passed + failed;
        console.log(`📊 ${chalk_1.default.bold('Total Tests:')} ${total}`);
        console.log(`✅ ${chalk_1.default.bold.green('Passed:')} ${passed}/${total}`);
        console.log(`❌ ${chalk_1.default.bold.red('Failed:')} ${failed}/${total}`);
        if (failed > 0) {
            console.log(chalk_1.default.redBright(`❗ Some tests failed. Check logs above for details.`));
        }
        else {
            console.log(chalk_1.default.bold.yellowBright(`🎉 All tests passed!`));
        }
        console.log(chalk_1.default.gray(`🕒 Test execution finished.`));
    }
}
exports.default = MyReporter;
//# sourceMappingURL=reporter.js.map