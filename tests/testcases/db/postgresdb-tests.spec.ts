/**
 * (C) VeriFlow 2025 - TimescaleDB Financial Data Tests
 * This test suite validates the presence, structure, and basic integrity of financial data on TimescaleDB.
 */

import { test } from '@PageSetup';
import { expect } from '@playwright/test';
import { setupAllure } from "@AllureMetaData";
import DBManager from '@DBManager';
import * as PostgresPage from '@PostgresPage';

test.beforeAll(async () => {
  const dbConfig = TimescaleDBPage.config();
  await DBManager.connect('timescale', dbConfig);
});

test.afterAll(async () => {
  await DBManager.disconnect();
});

test.describe.parallel('PostgresDB | DB', () => {
  test('PostgreSQL Restart and Integrity Check', async () => {
    setupAllure('postgresDBRestartTest');
    const isRunningBefore = await PostgresPage.isPostgresRunning('veriflow');
    expect(isRunningBefore).toBeTruthy();
    await PostgresPage.restartPostgres('veriflow');
    const isRunningAfter = await PostgresPage.isPostgresRunning('veriflow');
    expect(isRunningAfter).toBeTruthy();
    const rowCount = await PostgresPage.verifyDatabaseIntegrity();
    expect(rowCount).toBeGreaterThan(0);
  });
});