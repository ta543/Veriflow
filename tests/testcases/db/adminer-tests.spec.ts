/**
 * (C) VeriFlow 2025 - Adminer UI Login Tests
 * This test suite verifies successful authentication into the Adminer web UI for TimescaleDB.
 */

import { test } from 'test-setup/page-setup';
import { setupAllure } from '@AllureMetaData';
import { withSteps } from '@StepsUtils';
import * as AdminerPage from '@AdminerLoginPage';

/*
 To run the tests in parallel, you can utilize the test.describe.configure() method to set the mode to 'parallel'.
 By default, the tests will run sequentially when fullyParallel: false is set in playwright.config.
 The tests will not be skipped upon encountering a failure except when the mode is set to 'serial'.
*/
test.describe.configure({ mode: 'parallel' });

let Adminer: typeof AdminerPage;
test.beforeEach(async ({ page }, testInfo) => {
  Adminer = withSteps(AdminerPage, test.step, 'Adminer');
  await page.evaluate((_name) => {
    // @ts-ignore
    window.browserstack_executor = {
      action: 'setSessionName',
      arguments: {
        name: _name,
      },
    };
  }, testInfo.title);  
});

test.afterEach(async ({ page }, testInfo) => {
// ✅ Set pass/fail status in BrowserStack dashboard
await page.evaluate((_status) => {
  // @ts-ignore
  window.browserstack_executor = {
    action: 'setSessionStatus',
    arguments: {
      status: _status,
      reason: _status === 'passed' ? 'All assertions passed' : 'One or more assertions failed',
    },
  };
}, testInfo.status);
});

test.describe('Adminer', () => {

  test('[Adminer][Onboarding][Smoke] Login on Adminer with Main TimescaleDB Credentials', async () => {
    setupAllure('adminerLoginTimescaleDBMain');
    await Adminer.loginToAdminerDB('timescale', 'veriflowtimescale');
  });

  test('[Adminer][Onboarding][Regression] Login on Adminer with test1 TimescaleDB Credentials', async () => {
    setupAllure('adminerLoginTimescaleDBTest1');
    await Adminer.loginToAdminerDB('timescale', 'veriflowtimescaletest1');
  });

  test('[Adminer][Onboarding][Regression] Login on Adminer with test2 TimescaleDB Credentials', async () => {
    setupAllure('adminerLoginTimescaleDBTest2');
    await Adminer.loginToAdminerDB('timescale', 'veriflowtimescaletest2');
  });

  test('[Adminer][Interface][Smoke] Open SQL Querier in Adminer', async () => {
    setupAllure('adminerOpenSQLQuerier');
    await Adminer.loginToAdminerDB('timescale', 'veriflowtimescale');
    await Adminer.openSQLCommandInterface();
  });
});
