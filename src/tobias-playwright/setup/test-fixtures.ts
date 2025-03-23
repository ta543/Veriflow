import { test as base } from '@playwright/test';
import { withSteps } from '@StepsUtils';
import { TimescaleDBPage } from '@TimescaleDBPage';
import { DBManager } from '@DBManager';

type Fixtures = {
  Timescale: typeof TimescaleDBPage;
  DB: typeof DBManager;
};

export const test = base.extend<Fixtures>({
  Timescale: async ({}, use) => {
    const wrapped = withSteps(TimescaleDBPage, 'TimescaleDBPage');
    await use(wrapped);
  },
  DB: async ({}, use) => {
    const wrapped = withSteps(DBManager, 'DBManager');
    await use(wrapped);
  },
});
