import { Reporter, FullConfig, Suite, TestCase, TestResult } from '@playwright/test/reporter';
import chalk from 'chalk';

export default class MyReporter implements Reporter {
  private testResults = new Map<string, TestResult[]>();

  onBegin(_config: FullConfig, suite: Suite): void {
    console.clear();
    console.log(chalk.magenta("\n=== Test Suite Started ==="));

    try {
      let currentSuite = suite;
      while (currentSuite.suites.length > 0) {
        currentSuite = currentSuite.suites[0];
      }
      console.log(`📂 Test Suite: ${chalk.bold.white(currentSuite.title)}`);
    } catch (error) {
      console.error(chalk.redBright("❌ Error accessing suite title:"), error);
    }

    const totalUniqueTests = suite.allTests().length;
    console.log(chalk.gray(`🕒 Starting test execution...`));
    console.log(chalk.gray(`🧪 Total tests to run: ${totalUniqueTests}\n`));
  }

  onTestBegin(test: TestCase): void {
    console.log(`${chalk.bold.hex('#FF00FF')('🚀 [RUNNING]')} ${chalk.hex('#00FFFF')(test.title)}`);
  }

  onTestEnd(test: TestCase, result: TestResult): void {
    const key = test.titlePath().join(' > ');
    if (!this.testResults.has(key)) {
      this.testResults.set(key, []);
    }
    this.testResults.get(key)!.push(result);

    // Show step feedback (per attempt)
    if (result.status === 'passed') {
      console.log(`${chalk.bold.green('✅ [PASSED]')} ${chalk.whiteBright(test.title)}`);
    } else if (result.status === 'failed') {
      console.log(`${chalk.bold.redBright('❌ [FAILED]')} ${chalk.whiteBright(test.title)}`);
      if (result.error) {
        console.error(chalk.redBright(`   📌 Reason: ${result.error.message}`));
        if (result.error.stack) {
          console.error(chalk.gray(result.error.stack));
        }
      }
    }
  }

  onStdOut(chunk: string | Buffer): void {
    const output = typeof chunk === 'string' ? chunk : chunk.toString();

    for (const line of output.split('\n')) {
      if (line.startsWith('[step]')) {
        console.log(chalk.cyan(`🧩 [STEP] ${line.replace('[step]', '').trim()}`));
      } else if (line.startsWith('[step:pass]')) {
        console.log(chalk.green(`   ✅ [STEP PASSED] ${line.replace('[step:pass]', '').trim()}`));
      } else if (line.startsWith('[step:fail]')) {
        console.log(chalk.red(`   ❌ [STEP FAIL] ${line.replace('[step:fail]', '').trim()}`));
      }
    }
  }

  onStdErr(chunk: string | Buffer): void {
    const output = typeof chunk === 'string' ? chunk : chunk.toString();
    console.error(chalk.redBright(`[stderr] ${output.trim()}`));
  }

  onError(error: Error): void {
    console.error(chalk.redBright(`\n💥 Unhandled Error: ${error.message}`));
    if (error.stack) {
      console.error(chalk.gray(error.stack));
    }
  }

  onEnd(): void {
    console.log(chalk.magenta("\n=== Test Run Completed ==="));

    let passed = 0;
    let failed = 0;

    for (const results of this.testResults.values()) {
      const finalResult = results[results.length - 1];
      if (finalResult.status === 'passed') {
        passed++;
      } else {
        failed++;
      }
    }

    const total = passed + failed;

    console.log(`📊 ${chalk.bold('Total Tests:')} ${total}`);
    console.log(`✅ ${chalk.bold.green('Passed:')} ${passed}/${total}`);
    console.log(`❌ ${chalk.bold.red('Failed:')} ${failed}/${total}`);

    if (failed > 0) {
      console.log(chalk.redBright(`❗ Some tests failed. Check logs above for details.`));
    } else {
      console.log(chalk.bold.yellowBright(`🎉 All tests passed!`));
    }

    console.log(chalk.gray(`🕒 Test execution finished.`));
  }
}
