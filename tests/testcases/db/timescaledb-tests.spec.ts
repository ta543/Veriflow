/**
 * (C) VeriFlow 2025 - TimescaleDB Financial Data Tests
 * This test suite validates the presence, structure, and basic integrity of financial data on TimescaleDB.
 */

import { test, expect } from 'test-setup/page-setup';
import { setupAllure } from "@AllureMetaData";
import { withSteps } from '@StepsUtils';
import DBManager from '@DBManager';
import TimescaleDBPage from '@TimescaleDBPage';

/*
 To run the tests in parallel, you can utilize the test.describe.configure() method to set the mode to 'parallel'.
 By default, the tests will run sequentially when fullyParallel: false is set in playwright.config.
 The tests will not be skipped upon encountering a failure except when the mode is set to 'serial'.
*/
test.describe.configure({ mode: 'parallel' });

test.beforeAll(async () => {
  await TimescaleDBPage.connectToDatabase('veriflow_timescale', 'timescale');
});

test.afterAll(async () => {
  await DBManager.disconnect();
});

test.describe('TimescaleDB | DB', () => {
  let Timescale: typeof TimescaleDBPage;
  test.beforeEach(async () => {
    Timescale = withSteps(TimescaleDBPage, test.step, 'Timescale');
  });
  
  test('[TimescaleDB][DB][Regression] Verify Data Import', async () => {  
    setupAllure('timescaleDBVerifyDataImport');
    const rowCount = await Timescale.getFinancialDataRowCount();
    expect(rowCount).toBeGreaterThan(0);
  });

  test('[TimescaleDB][DB][Regression] Validate Column Structure', async () => {
    setupAllure('timescaleDBValidateColumnStructure');
    const columns = await Timescale.getFinancialDataColumnNames();
    const expectedColumns = [
      'id',
      'series_reference', 'period', 'data_value', 'suppressed', 'status',
      'units', 'magnitude', 'subject', 'group_name',
      'series_title_1', 'series_title_2', 'series_title_3',
      'series_title_4', 'series_title_5'
    ];
    expect(columns.sort()).toEqual(expectedColumns.sort());
  });

  test('[TimescaleDB][DB][Regression] Validate First Row Data', async () => {
    setupAllure('timescaleDBValidateFirstRowData');
    const firstRow = await Timescale.getFinancialDataFirstRow();
    expect(firstRow.series_reference).toMatch(/BDCQ/);
    expect(firstRow.units).toBe('Dollars');
    expect(firstRow.status).toMatch(/[FR]/);
  });

  test('[TimescaleDB][DB][Regression] Calculate Average Data Value', async () => {
    setupAllure('timescaleDBCalculateAverageDataValue');
    const avgValue = await Timescale.getAverageFinancialDataValue();
    expect(avgValue).toBeGreaterThan(0);
  });

  test('[TimescaleDB][DB][Regression] Check Total Data Value for a Quarter', async () => {
    setupAllure('timescaleDBCheckTotalDataValueForQuarter');
    const quarter = '2024-Q1';
    const totalValue = await Timescale.getTotalDataValueForQuarter(quarter);
    expect(totalValue).toBeGreaterThan(1000);
  });

  test('[TimescaleDB][DB][Regression] Check Data Consistency Across Periods', async () => {
      setupAllure('timescaleDBCheckDataConsistency');
      const isConsistent = await Timescale.verifyDataConsistencyAcrossPeriods();
      expect(isConsistent).toBeTruthy();
  });

  test('[TimescaleDB][DB][Regression] Validate Data Range', async () => {
    setupAllure('timescaleDBValidateDataRange');
    const { min, max } = await Timescale.getFinancialDataRange();
    expect(min).toBeGreaterThanOrEqual(0);
    expect(max).toBeLessThanOrEqual(100000);
  });

  test('[TimescaleDB][DB][Regression] Check Duplicate Entries', async () => {
    setupAllure('timescaleDBCheckDuplicateEntries');
    const hasNoDuplicates = await Timescale.checkDuplicateEntries();
    expect(hasNoDuplicates).toBeTruthy();
  });

  test('[TimescaleDB][DB][DataValidation][Regression] Validate Financial Data Against Expected Ranges per Subject', async () => {
    setupAllure('timescaleDBValidateDataRangesPerSubject');
    const subjects = ['GDP', 'Inflation', 'Employment'];
    for (const subject of subjects) {
        const { min, max } = await Timescale.getDataRangeForSubject(subject);
        expect(min).toBeGreaterThanOrEqual(0);
        expect(max).toBeLessThanOrEqual(1000000);
    }
  });

  test('[TimescaleDB][DB][Regression] Check for Outliers in Data Values', async () => {
    setupAllure('timescaleDBCheckOutliers');
    const outlierCount = await Timescale.detectOutliers();
    expect(outlierCount).toBeLessThanOrEqual(2);
  });

  test('[TimescaleDB][DB][Regression] Verify Consistent Financial Data Trend', async () => {
    setupAllure('timescaleDBVerifyFinancialTrend');
    const trendData = await Timescale.checkFinancialDataTrends();
    expect(trendData.every(record => record.trend === 'increasing' || record.trend === 'decreasing')).toBeTruthy();
  });

  test('[TimescaleDB][DB][Regression] Detect Anomalous Spikes in Financial Data', async () => {
    setupAllure('timescaleDBDetectAnomalousSpikes');
    const anomalies = await Timescale.detectAnomalousSpikes();    
    expect(anomalies.length).toBeLessThanOrEqual(2);
  });

  test('[TimescaleDB][DB][Regression] Measure Query Execution Performance', async () => {
    setupAllure('timescaleDBMeasurePerformance');
    const executionTime = await Timescale.measureQueryPerformance();
    expect(executionTime).toBeLessThan(500);
  });

  test('[TimescaleDB][DB][Regression] Verify Database Creation and Switching', async () => {
    setupAllure('timescaleDBDynamicSwitchingTest');
    await Timescale.setupTestDatabases();
    await Timescale.switchTestDatabase(1);
    const rowCount1 = await DBManager.getPGClient().query(`SELECT COUNT(*) FROM business_financial_data`);
    expect(parseInt(rowCount1.rows[0].count, 10)).toBeGreaterThan(0);

    await Timescale.switchTestDatabase(2);
    const rowCount2 = await DBManager.getPGClient().query(`SELECT COUNT(*) FROM business_financial_data`);
    expect(parseInt(rowCount2.rows[0].count, 10)).toBeGreaterThan(0);

    await Timescale.switchTestDatabase(1);
    const rowCount3 = await DBManager.getPGClient().query(`SELECT COUNT(*) FROM business_financial_data`);
    expect(parseInt(rowCount3.rows[0].count, 10)).toBe(parseInt(rowCount1.rows[0].count, 10));
  });

  test('[TimescaleDB][DB][Regression] Restart Test DB and Validate from Peer', async () => {
    setupAllure('timescaleDBRestartAndVerifyFromPeer');
    const containerToRestart = 'veriflow_test_1';
    const startTimeBefore = await Timescale.execInContainer(
      '',
      `docker inspect -f '{{.State.StartedAt}}' ${containerToRestart}`
    );
    // console.log(`[Before Restart] Container started at: ${startTimeBefore}`);
    await Timescale.execInContainer('', `docker restart ${containerToRestart}`);
    await new Promise((res) => setTimeout(res, 5000));
    const startTimeAfter = await Timescale.execInContainer(
      '',
      `docker inspect -f '{{.State.StartedAt}}' ${containerToRestart}`
    );
    // console.log(`[After Restart] Container started at: ${startTimeAfter}`);
    expect(startTimeAfter).not.toBe(startTimeBefore);
    const isRunning = await Timescale.isContainerRunning(containerToRestart);
    // console.log(`[Running Status] Container is running: ${isRunning}`);
    expect(isRunning).toBeTruthy();
  });
});
