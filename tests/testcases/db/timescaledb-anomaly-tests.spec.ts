/**
 * (C) VeriFlow 2025 – TimescaleDB Anomaly Detection Tests
 * This test validates insertion, aggregation, and anomaly alerting behavior for server_metrics hypertable.
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
    
const servers = ['server-001', 'server-002', 'server-003', 'server-004', 'server-005'];

for (const serverId of servers) {
    test(`[TimescaleDB][DB][Anomaly][Regression] Detect high CPU usage anomaly for ${serverId}`, async () => {
        setupAllure(`detectHighCPUAnomaly`);
        
        await Timescale.connectToDatabase('veriflow_timescale', 'timescale');
        const rows = await Timescale.detectHighCPUAnomaly(serverId);

        const anomalyDetected = rows.some(r => parseFloat(r.max_cpu) > 90);
        expect(anomalyDetected).toBeTruthy();

        console.log(`🔍 Aggregated CPU metrics for ${serverId}:`);
        console.table(rows);
    });
}
  
    
  test('[TimescaleDB][DB][Regression] 7-Day Revenue Anomaly Detection', async () => {
    setupAllure('revenueAnomalyDetection7Day');
        
    await Timescale.connectToDatabase('veriflow_timescale', 'timescale');
    const rows = await Timescale.detect7DayRevenueAnomalies();
    const anomalies = rows.filter(row => row.status === 'ANOMALY');

    console.table(rows);
    expect(anomalies.length).toBeGreaterThanOrEqual(1);
  });    
});
