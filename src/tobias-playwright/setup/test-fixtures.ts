import { test as base } from '@playwright/test';
import { withSteps } from '@StepsUtils';
import TimescaleDBPage from '@TimescaleDBPage';
import DBManager from '@DBManager';

type Fixtures = {
  Timescale: InstanceType<typeof TimescaleDBPage>;
  DB: InstanceType<typeof DBManager>;
};

export const test = base.extend<Fixtures>({
  Timescale: async ({}, use) => {
    const instance = new TimescaleDBPage();
    const wrapped = withSteps(instance, 'TimescaleDBPage');
    await use(wrapped);
  },
  DB: async ({}, use) => {
    const instance = new DBManager();
    const wrapped = withSteps(instance, 'DBManager');
    await use(wrapped);
  },
});
