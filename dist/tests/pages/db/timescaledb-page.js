"use strict";
/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling database queries
 * on {@code TimescaleDBPage}.
 *
 * VeriFlow Test Automation - Database Automation | TimescaleDBPage
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const child_process_1 = require("child_process");
const db_manager_1 = tslib_1.__importDefault(require("managers/db-manager"));
const MAIN_DB = 'veriflow_timescale';
const TEST_DB_1 = 'veriflow_test_1';
const TEST_DB_2 = 'veriflow_test_2';
const quarterMonths = {
    "2024-Q1": ["2024-01-01", "2024-02-01", "2024-03-01"],
    "2024-Q2": ["2024-04-01", "2024-05-01", "2024-06-01"],
    "2024-Q3": ["2024-07-01", "2024-08-01", "2024-09-01"],
    "2024-Q4": ["2024-10-01", "2024-11-01", "2024-12-01"]
};
class TimescaleDBPage {
    /**
     * Retrieves the database configuration for a given database name.
     * @param dbName - The database name (`veriflow_test_1` or `veriflow_test_2`).
     * @returns {Object} - The configuration object.
     */
    static getDBConfig(dbName) {
        return {
            host: 'localhost',
            port: 5432,
            database: dbName,
            user: 'admin',
            password: 'admin'
        };
    }
    /**
     * Connects to a specified database.
     * @param targetDB - The target database name.
     * @param dbType - The database type (`timescale` or `postgresql`).
     */
    static connectToDatabase(targetDB, dbType) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const dbConfig = this.getDBConfig(targetDB);
            yield db_manager_1.default.connect(dbType, dbConfig);
        });
    }
    /**
     * Creates two test database instances (`veriflow_test_1` and `veriflow_test_2`),
     * copying data from the main database (`veriflow_timescale`).
     */
    static setupTestDatabases() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const client = db_manager_1.default.getPGClient();
            yield client.query(`DROP DATABASE IF EXISTS ${TEST_DB_1}`);
            yield client.query(`DROP DATABASE IF EXISTS ${TEST_DB_2}`);
            yield client.query(`CREATE DATABASE ${TEST_DB_1} TEMPLATE ${MAIN_DB}`);
            yield client.query(`CREATE DATABASE ${TEST_DB_2} TEMPLATE ${MAIN_DB}`);
            yield db_manager_1.default.disconnect();
        });
    }
    /**
     * Switches the active database between the test instances.
     * @param index - The index of the test database (1 or 2).
     */
    static switchTestDatabase(index) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (![1, 2].includes(index)) {
                throw new Error(`Invalid database index: ${index}. Expected 1 or 2.`);
            }
            const dbName = index === 1 ? TEST_DB_1 : TEST_DB_2;
            yield db_manager_1.default.connect('timescale', this.getDBConfig(dbName));
        });
    }
    /**
     * Executes a command inside a running TimescaleDB container as a given user.
     * @param containerName - The name of the container.
     * @param command - The command to execute.
     * @param user - Optional user (e.g., 'postgres') to execute as.
     * @returns A promise with the command output.
     */
    static execInContainer(containerName, command) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const fullCmd = containerName
                    ? `docker exec ${containerName} sh -c "${command}"`
                    : command;
                (0, child_process_1.exec)(fullCmd, (error, stdout, stderr) => {
                    if (error) {
                        reject(stderr || error.message);
                    }
                    else {
                        resolve(stdout.trim());
                    }
                });
            });
        });
    }
    /**
     * Checks if the specified Docker container is currently running.
     * @param containerName - The name of the Docker container.
     * @returns A promise that resolves to `true` if the container is running, otherwise `false`.
     */
    static isContainerRunning(containerName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                (0, child_process_1.exec)(`docker inspect -f '{{.State.Running}}' ${containerName}`, (error, stdout, stderr) => {
                    if (error) {
                        // If the container doesn't exist or cannot be inspected
                        if (stderr) {
                            resolve(false);
                        }
                        else {
                            reject(error.message);
                        }
                    }
                    else {
                        resolve(stdout.trim() === 'true');
                    }
                });
            });
        });
    }
    static getFinancialDataRowCount() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield db_manager_1.default.getPGClient().query(`
            SELECT COUNT(*) as count FROM business_financial_data;
        `);
            return parseInt(result.rows[0].count, 10);
        });
    }
    static getFinancialDataColumnNames() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield db_manager_1.default.getPGClient().query(`
            SELECT column_name FROM information_schema.columns 
            WHERE table_name = 'business_financial_data';
        `);
            return result.rows.map(row => row.column_name);
        });
    }
    static getFinancialDataFirstRow() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield db_manager_1.default.getPGClient().query(`
            SELECT * FROM business_financial_data ORDER BY id ASC LIMIT 1;
        `);
            return result.rows[0];
        });
    }
    static getAverageFinancialDataValue() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield db_manager_1.default.getPGClient().query(`
            SELECT AVG(data_value) as avg_value FROM business_financial_data;
        `);
            return parseFloat(result.rows[0].avg_value);
        });
    }
    static getTotalDataValueForQuarter(quarter) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const quarterMonths = {
                "2024-Q1": ["2024-01-01", "2024-02-01", "2024-03-01"],
                "2024-Q2": ["2024-04-01", "2024-05-01", "2024-06-01"],
                "2024-Q3": ["2024-07-01", "2024-08-01", "2024-09-01"],
                "2024-Q4": ["2024-10-01", "2024-11-01", "2024-12-01"]
            };
            const months = quarterMonths[quarter];
            const result = yield db_manager_1.default.getPGClient().query(`SELECT SUM(data_value) AS total 
           FROM business_financial_data 
           WHERE period = ANY($1::DATE[])`, [months]);
            return parseFloat(result.rows[0].total || '0');
        });
    }
    static findMissingPeriodsForSeries(seriesReference, year) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const expectedMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
            const result = yield db_manager_1.default.getPGClient().query(`
            SELECT TO_CHAR(period, 'MM') AS month
            FROM business_financial_data
            WHERE series_reference = $1 
            AND period BETWEEN $2::DATE AND $3::DATE;
        `, [seriesReference, `${year}-01-01`, `${year}-12-31`]);
            const existingMonths = result.rows.map(r => r.month);
            return expectedMonths.filter(m => !existingMonths.includes(m));
        });
    }
    static verifyDataValueTrend() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield db_manager_1.default.getPGClient().query(`
            SELECT period, data_value FROM business_financial_data
            ORDER BY period ASC;
        `);
            const values = result.rows.map(row => parseFloat(row.data_value));
            return values.every((value, index, arr) => index === 0 || value >= arr[index - 1]);
        });
    }
    static checkDataConsistency() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield db_manager_1.default.getPGClient().query(`
            SELECT series_reference, period, COUNT(*) 
            FROM business_financial_data
            GROUP BY series_reference, period
            HAVING COUNT(*) > 1;
        `);
            return result.rowCount === 0;
        });
    }
    static validateDataRange(minValue, maxValue) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield db_manager_1.default.getPGClient().query(`
            SELECT COUNT(*) FROM business_financial_data
            WHERE data_value < $1 OR data_value > $2;
        `, [minValue, maxValue]);
            return parseInt(result.rows[0].count, 10) === 0;
        });
    }
    static checkDuplicateEntries() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield db_manager_1.default.getPGClient().query(`
            SELECT series_reference, period, COUNT(*) 
            FROM business_financial_data
            GROUP BY series_reference, period
            HAVING COUNT(*) > 1;
        `);
            return result.rowCount === 0;
        });
    }
    static verifyDataConsistencyAcrossPeriods() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield db_manager_1.default.getPGClient().query(`
            SELECT COUNT(*) AS duplicates
            FROM business_financial_data
            GROUP BY period, series_reference, data_value
            HAVING COUNT(*) > 1
        `);
            return result.rowCount === 0;
        });
    }
    static getFinancialDataRange() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield db_manager_1.default.getPGClient().query(`
            SELECT MIN(data_value) AS min, MAX(data_value) AS max
            FROM business_financial_data
        `);
            return { min: parseFloat(result.rows[0].min), max: parseFloat(result.rows[0].max) };
        });
    }
    static getRetainedDataCount() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield db_manager_1.default.getPGClient().query(`
            SELECT COUNT(*) AS count FROM business_financial_data
            WHERE TO_DATE(period, 'YYYY-MM') >= NOW() - INTERVAL '5 years';
        `);
            return parseInt(result.rows[0].count, 10);
        });
    }
    static getDataRangeForSubject(subject) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield db_manager_1.default.getPGClient().query(`
            SELECT COALESCE(MIN(data_value), 0) AS min, COALESCE(MAX(data_value), 0) AS max
            FROM business_financial_data
            WHERE subject = $1;
        `, [subject]);
            return { min: parseFloat(result.rows[0].min), max: parseFloat(result.rows[0].max) };
        });
    }
    static hasGapsInPeriods() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield db_manager_1.default.getPGClient().query(`
            WITH sorted_data AS (
                SELECT TO_DATE(period, 'YYYY-MM') AS period_date FROM business_financial_data ORDER BY period_date ASC
            )
            SELECT COUNT(*) AS gaps
            FROM sorted_data a
            LEFT JOIN sorted_data b ON a.period_date + INTERVAL '1 month' = b.period_date
            WHERE b.period_date IS NULL;
        `);
            return result.rows[0].gaps > 0;
        });
    }
    static detectOutliers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield db_manager_1.default.getPGClient().query(`
            WITH stats AS (
                SELECT AVG(data_value) AS mean, STDDEV(data_value) AS stddev
                FROM business_financial_data
            )
            SELECT COUNT(*) AS outliers
            FROM business_financial_data, stats
            WHERE ABS(data_value - stats.mean) > (3 * stats.stddev);
        `);
            return parseInt(result.rows[0].outliers, 10);
        });
    }
    static getMissingDataBySeries() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield db_manager_1.default.getPGClient().query(`
            WITH expected_periods AS (
                SELECT generate_series(
                    (SELECT MIN(DATE_TRUNC('month', period::DATE)) FROM business_financial_data),
                    (SELECT MAX(DATE_TRUNC('month', period::DATE)) FROM business_financial_data),
                    INTERVAL '1 month'
                )::DATE AS expected_period
            )
            SELECT bfd.series_reference, ep.expected_period
            FROM expected_periods ep
            CROSS JOIN (SELECT DISTINCT series_reference FROM business_financial_data) AS bfd
            LEFT JOIN business_financial_data bfd_actual
            ON bfd.series_reference = bfd_actual.series_reference
            AND ep.expected_period = DATE_TRUNC('month', bfd_actual.period::DATE)
            WHERE bfd_actual.series_reference IS NULL;
        `);
            return result.rows;
        });
    }
    static checkFinancialDataTrends() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield db_manager_1.default.getPGClient().query(`
            WITH trend_data AS (
                SELECT series_reference, period, data_value,
                    LAG(data_value) OVER (PARTITION BY series_reference ORDER BY period) AS prev_value
                FROM business_financial_data
            )
            SELECT series_reference, period, 
                CASE 
                    WHEN data_value > prev_value THEN 'increasing'
                    WHEN data_value < prev_value THEN 'decreasing'
                    ELSE 'no change'
                END AS trend
            FROM trend_data
            WHERE prev_value IS NOT NULL;
        `);
            return result.rows;
        });
    }
    static detectAnomalousSpikes() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield db_manager_1.default.getPGClient().query(`
            WITH stats AS (
                SELECT series_reference, AVG(data_value) AS avg_val, STDDEV(data_value) AS stddev
                FROM business_financial_data
                GROUP BY series_reference
            )
            SELECT bfd.series_reference, bfd.period, bfd.data_value
            FROM business_financial_data bfd
            JOIN stats s ON bfd.series_reference = s.series_reference
            WHERE ABS(bfd.data_value - s.avg_val) > (3 * s.stddev);
        `);
            return result.rows;
        });
    }
    static measureQueryPerformance() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const start = performance.now();
            yield db_manager_1.default.getPGClient().query(`
            SELECT AVG(data_value), SUM(data_value), MIN(data_value), MAX(data_value)
            FROM business_financial_data;
        `);
            const end = performance.now();
            return end - start;
        });
    }
    static checkForeignKeyIntegrity() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield db_manager_1.default.getPGClient().query(`
            SELECT DISTINCT bfd.series_reference
            FROM business_financial_data bfd
            LEFT JOIN reference_financial_data rfd 
            ON bfd.series_reference = rfd.series_reference
            WHERE rfd.series_reference IS NULL;
        `);
            return result.rows;
        });
    }
}
exports.default = TimescaleDBPage;
//# sourceMappingURL=timescaledb-page.js.map