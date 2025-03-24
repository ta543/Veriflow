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
  
    const retryCount = this.testResults.get(key)!.length - 1;
  
    const retryInfo = retryCount > 0 ? chalk.gray(` (retry #${retryCount})`) : '';
  
    // Show step feedback (per attempt)
    if (result.status === 'passed') {
      console.log(`${chalk.bold.green('✅ [PASSED]')} ${chalk.whiteBright(test.title)}${retryInfo}`);
    } else if (result.status === 'failed') {
      console.log(`${chalk.bold.redBright('❌ [FAILED]')} ${chalk.whiteBright(test.title)}${retryInfo}`);
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
    console.log(chalk.bold("\n📋 Test Summary:"));
  
    let passed = 0;
    let failed = 0;
    let totalRetries = 0;
  
    for (const [title, results] of this.testResults.entries()) {
      const finalResult = results[results.length - 1];
      const retryCount = results.length - 1;
      totalRetries += retryCount;
  
      const statusIcon = finalResult.status === 'passed'
        ? chalk.green('✅')
        : chalk.red('❌');
  
      const statusLabel = finalResult.status === 'passed'
        ? chalk.greenBright('PASSED')
        : chalk.redBright('FAILED');
  
      const retryLabel = retryCount > 0
        ? chalk.gray(`(retried ${retryCount} ${retryCount === 1 ? 'time' : 'times'})`)
        : chalk.gray('(no retries)');
  
      const fullTitle = chalk.whiteBright(title);
  
      console.log(` ${statusIcon} ${fullTitle} — ${statusLabel} ${retryLabel}`);
  
      if (finalResult.status === 'failed' && finalResult.error?.message) {
        const errorMessage = finalResult.error.message.split('\n')[0]; // only first line
        console.log(chalk.red(`     📌 ${errorMessage}`));
      }
  
      if (finalResult.status === 'passed') {
        passed++;
      } else {
        failed++;
      }
    }
  
    const total = passed + failed;
  
    console.log(` `);
    console.log(`🧪 Total Tests: ${chalk.white(total)}`);
    console.log(`✅ Passed: ${chalk.green(passed)}`);
    console.log(`❌ Failed: ${chalk.red(failed)}`);
    console.log(`🔁 Total Retries: ${chalk.yellow(totalRetries)}`);
    console.log(` `);
  
    if (failed > 0) {
      console.log(chalk.redBright(`❗ Some tests failed. Check logs above for details.`));
    } else {
      console.log(chalk.bold.yellowBright(`🎉 All tests passed!`));
    }
  
    console.log(chalk.gray(`🕒 Test execution finished.\n`));
  }  
}
