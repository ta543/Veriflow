"use strict";
/**
 * (C) VeriFlow 2025 - TimescaleDB Financial Data Tests
 * This test suite validates the presence, structure, and basic integrity of financial data on TimescaleDB.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _PageSetup_1 = require("@PageSetup");
const _AllureMetaData_1 = require("@AllureMetaData");
const _StepsUtils_1 = require("@StepsUtils");
const _DBManager_1 = tslib_1.__importDefault(require("@DBManager"));
const _TimescaleDBPage_1 = tslib_1.__importDefault(require("@TimescaleDBPage"));
/*
 To run the tests in parallel, you can utilize the test.describe.configure() method to set the mode to 'parallel'.
 By default, the tests will run sequentially when fullyParallel: false is set in playwright.config.
 The tests will not be skipped upon encountering a failure except when the mode is set to 'serial'.
*/
_PageSetup_1.test.describe.configure({ mode: 'parallel' });
_PageSetup_1.test.beforeAll(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield _TimescaleDBPage_1.default.connectToDatabase('veriflow_timescale', 'timescale');
}));
_PageSetup_1.test.afterAll(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield _DBManager_1.default.disconnect();
}));
_PageSetup_1.test.describe('TimescaleDB | DB', () => {
    let Timescale;
    _PageSetup_1.test.beforeEach(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        Timescale = (0, _StepsUtils_1.withSteps)(_TimescaleDBPage_1.default, _PageSetup_1.test.step, 'Timescale');
    }));
    (0, _PageSetup_1.test)('Verify Data Import', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('timescaleDBVerifyDataImport');
        const rowCount = yield Timescale.getFinancialDataRowCount();
        (0, _PageSetup_1.expect)(rowCount).toBeGreaterThan(0);
    }));
    (0, _PageSetup_1.test)('Validate Column Structure', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('timescaleDBValidateColumnStructure');
        const columns = yield Timescale.getFinancialDataColumnNames();
        const expectedColumns = [
            'id',
            'series_reference', 'period', 'data_value', 'suppressed', 'status',
            'units', 'magnitude', 'subject', 'group_name',
            'series_title_1', 'series_title_2', 'series_title_3',
            'series_title_4', 'series_title_5'
        ];
        (0, _PageSetup_1.expect)(columns.sort()).toEqual(expectedColumns.sort());
    }));
    (0, _PageSetup_1.test)('Validate First Row Data', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('timescaleDBValidateFirstRowData');
        const firstRow = yield Timescale.getFinancialDataFirstRow();
        (0, _PageSetup_1.expect)(firstRow.series_reference).toMatch(/BDCQ/);
        (0, _PageSetup_1.expect)(firstRow.units).toBe('Dollars');
        (0, _PageSetup_1.expect)(firstRow.status).toMatch(/[FR]/);
    }));
    (0, _PageSetup_1.test)('Calculate Average Data Value', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('timescaleDBCalculateAverageDataValue');
        const avgValue = yield Timescale.getAverageFinancialDataValue();
        (0, _PageSetup_1.expect)(avgValue).toBeGreaterThan(0);
    }));
    (0, _PageSetup_1.test)('Check Total Data Value for a Quarter', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('timescaleDBCheckTotalDataValueForQuarter');
        const quarter = '2024-Q1';
        const totalValue = yield Timescale.getTotalDataValueForQuarter(quarter);
        (0, _PageSetup_1.expect)(totalValue).toBeGreaterThan(1000);
    }));
    (0, _PageSetup_1.test)('Check Data Consistency Across Periods', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('timescaleDBCheckDataConsistency');
        const isConsistent = yield Timescale.verifyDataConsistencyAcrossPeriods();
        (0, _PageSetup_1.expect)(isConsistent).toBeTruthy();
    }));
    (0, _PageSetup_1.test)('Validate Data Range', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('timescaleDBValidateDataRange');
        const { min, max } = yield Timescale.getFinancialDataRange();
        (0, _PageSetup_1.expect)(min).toBeGreaterThanOrEqual(0);
        (0, _PageSetup_1.expect)(max).toBeLessThanOrEqual(100000);
    }));
    (0, _PageSetup_1.test)('Check Duplicate Entries', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('timescaleDBCheckDuplicateEntries');
        const hasNoDuplicates = yield Timescale.checkDuplicateEntries();
        (0, _PageSetup_1.expect)(hasNoDuplicates).toBeTruthy();
    }));
    (0, _PageSetup_1.test)('[TimescaleDB][DB][DataValidation][Regression] Validate Financial Data Against Expected Ranges per Subject', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('timescaleDBValidateDataRangesPerSubject');
        const subjects = ['GDP', 'Inflation', 'Employment'];
        for (const subject of subjects) {
            const { min, max } = yield Timescale.getDataRangeForSubject(subject);
            (0, _PageSetup_1.expect)(min).toBeGreaterThanOrEqual(0);
            (0, _PageSetup_1.expect)(max).toBeLessThanOrEqual(1000000);
        }
    }));
    (0, _PageSetup_1.test)('Check for Outliers in Data Values', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('timescaleDBCheckOutliers');
        const outlierCount = yield Timescale.detectOutliers();
        (0, _PageSetup_1.expect)(outlierCount).toBeLessThanOrEqual(2);
    }));
    (0, _PageSetup_1.test)('Verify Consistent Financial Data Trend', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('timescaleDBVerifyFinancialTrend');
        const trendData = yield Timescale.checkFinancialDataTrends();
        (0, _PageSetup_1.expect)(trendData.every(record => record.trend === 'increasing' || record.trend === 'decreasing')).toBeTruthy();
    }));
    (0, _PageSetup_1.test)('Detect Anomalous Spikes in Financial Data', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('timescaleDBDetectAnomalousSpikes');
        const anomalies = yield Timescale.detectAnomalousSpikes();
        (0, _PageSetup_1.expect)(anomalies.length).toBeLessThanOrEqual(2);
    }));
    (0, _PageSetup_1.test)('Measure Query Execution Performance', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('timescaleDBMeasurePerformance');
        const executionTime = yield Timescale.measureQueryPerformance();
        (0, _PageSetup_1.expect)(executionTime).toBeLessThan(500);
    }));
    (0, _PageSetup_1.test)('Verify Database Creation and Switching', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('timescaleDBDynamicSwitchingTest');
        yield Timescale.setupTestDatabases();
        yield Timescale.switchTestDatabase(1);
        const rowCount1 = yield _DBManager_1.default.getPGClient().query(`SELECT COUNT(*) FROM business_financial_data`);
        (0, _PageSetup_1.expect)(parseInt(rowCount1.rows[0].count, 10)).toBeGreaterThan(0);
        yield Timescale.switchTestDatabase(2);
        const rowCount2 = yield _DBManager_1.default.getPGClient().query(`SELECT COUNT(*) FROM business_financial_data`);
        (0, _PageSetup_1.expect)(parseInt(rowCount2.rows[0].count, 10)).toBeGreaterThan(0);
        yield Timescale.switchTestDatabase(1);
        const rowCount3 = yield _DBManager_1.default.getPGClient().query(`SELECT COUNT(*) FROM business_financial_data`);
        (0, _PageSetup_1.expect)(parseInt(rowCount3.rows[0].count, 10)).toBe(parseInt(rowCount1.rows[0].count, 10));
    }));
    (0, _PageSetup_1.test)('Restart Test DB and Validate from Peer', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('timescaleDBRestartAndVerifyFromPeer');
        const containerToRestart = 'veriflow_test_1';
        const startTimeBefore = yield Timescale.execInContainer('', `docker inspect -f '{{.State.StartedAt}}' ${containerToRestart}`);
        // console.log(`[Before Restart] Container started at: ${startTimeBefore}`);
        yield Timescale.execInContainer('', `docker restart ${containerToRestart}`);
        yield new Promise((res) => setTimeout(res, 5000));
        const startTimeAfter = yield Timescale.execInContainer('', `docker inspect -f '{{.State.StartedAt}}' ${containerToRestart}`);
        // console.log(`[After Restart] Container started at: ${startTimeAfter}`);
        (0, _PageSetup_1.expect)(startTimeAfter).not.toBe(startTimeBefore);
        const isRunning = yield Timescale.isContainerRunning(containerToRestart);
        console.log(`[Running Status] Container is running: ${isRunning}`);
        (0, _PageSetup_1.expect)(isRunning).toBeTruthy();
    }));
});
//# sourceMappingURL=timescaledb-tests.spec.js.map