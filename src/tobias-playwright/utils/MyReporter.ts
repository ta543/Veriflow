import { Reporter, FullConfig, Suite, TestCase, TestResult } from '@playwright/test/reporter';
import chalk from 'chalk';

export default class MyReporter implements Reporter {
  private testCount = 0;
  private totalTests = 0;
  private passed = 0;
  private failed = 0;

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

    this.totalTests = suite.allTests().length;
    console.log(chalk.gray(`🕒 Starting test execution...`));
    console.log(chalk.gray(`🧪 Total tests to run: ${this.totalTests}\n`));
  }

  onTestBegin(test: TestCase): void {
    this.testCount++;
    console.log(`${chalk.bold.hex('#FF00FF')('🚀 [RUNNING]')} ${chalk.hex('#00FFFF')(test.title)}`);
  }

  onTestEnd(test: TestCase, result: TestResult): void {
    if (result.status === 'passed') {
      this.passed++;
      console.log(`${chalk.bold.green('✅ [PASSED]')} ${chalk.whiteBright(test.title)}`);
    } else if (result.status === 'failed') {
      this.failed++;
      console.log(`${chalk.bold.redBright('❌ [FAILED]')} ${chalk.whiteBright(test.title)}`);
      if (result.error) {
        console.error(chalk.redBright(`   📌 Reason: ${result.error.message}`));
        if (result.error.stack) {
          console.error(chalk.gray(result.error.stack));
        }
      }
    }

    // 🎯 Live summary:
    const passedStr = chalk.green(`✅ Passed: ${this.passed}/${this.totalTests}`);
    const failedStr = this.failed > 0
      ? chalk.red(`❌ Failed: ${this.failed}/${this.totalTests}`)
      : '';
    
    console.log(`${passedStr}${failedStr ? '   ' + failedStr : ''}\n`);
  }

  onStdOut(chunk: string | Buffer, _test?: TestCase, _result?: TestResult): void {
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

  onStdErr(chunk: string | Buffer, _test?: TestCase, _result?: TestResult): void {
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

    console.log(`📊 ${chalk.bold('Total Tests:')} ${this.totalTests}`);
    console.log(`✅ ${chalk.bold.green('Passed:')} ${this.passed}/${this.totalTests}`);
  
    if (this.failed > 0) {
      console.log(`❌ ${chalk.bold.red('Failed:')} ${this.failed}/${this.totalTests}`);
      console.log(chalk.redBright(`❗ Some tests failed. Check logs above for details.`));
    } else {
      console.log(`❌ ${chalk.dim('Failed: 0/0')}`);
      console.log(chalk.bold.yellowBright(`🎉 All tests passed!`));
    }
  
    console.log(chalk.gray(`🕒 Test execution finished.`));
  }
}
