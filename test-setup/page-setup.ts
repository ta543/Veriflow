/**
 * (C) VeriFlow 2025
 *
 * Page Setup: Automatically sets page context, blocks ads, and dynamically sets the suite.
 */

import { test as base } from '@playwright/test';
import { setPage, blockAds } from '@PageUtils';
import { setDynamicSuite, getCurrentEnvConfig } from '@AllureEnvConfig';
import * as TimescaleDBPage from '@TimescaleDBPage';
import { withSteps } from '@StepsUtils';

type Fixtures = {
  Timescale: typeof TimescaleDBPage;
};

const test = base.extend<Fixtures>({
  Timescale: async ({}, use) => {
    const wrapped = withSteps(TimescaleDBPage, test.step, 'Timescale');
    await use(wrapped);
  }
});
  
test.beforeEach(async ({ page }, testInfo) => {
  setPage(page);
  const currentEnv = getCurrentEnvConfig();
  if (currentEnv.suite === 'ALL') {
    setDynamicSuite(deriveSuiteNameFromFilePath(testInfo.file));
  }

  if (testInfo.project.name !== 'BrowserStack') {
    await blockAds(page);
  }
});

function deriveSuiteNameFromFilePath(filePath: string): string {
  if (filePath.includes('practice-expandtesting')) return 'ExpandTesting - E2E';
  if (filePath.includes('expandtesting-api')) return 'ExpandTesting - API';
  if (filePath.includes('the-internet-tests')) return 'The Internet - E2E';
  if (filePath.includes('sauce-demo-tests')) return 'SauceDemo | E2E';
  if (filePath.includes('timescaledb-tests')) return 'TimescaleDB | DB';
  return 'ALL';
}

export { test };
export { expect } from '@playwright/test';
