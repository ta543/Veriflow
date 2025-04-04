/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling database queries
 * on {@code TimescaleDBPage}.
 *
 * VeriFlow Test Automation - Database Automation | TimescaleDBPage
 */

import { exec } from 'child_process';
import DBManager from '@DBManager';

const MAIN_DB = 'veriflow_timescale';
const TEST_DB_1 = 'veriflow_test_1';
const TEST_DB_2 = 'veriflow_test_2';
const quarterMonths = {
    "2024-Q1": ["2024-01-01", "2024-02-01", "2024-03-01"],
    "2024-Q2": ["2024-04-01", "2024-05-01", "2024-06-01"],
    "2024-Q3": ["2024-07-01", "2024-08-01", "2024-09-01"],
    "2024-Q4": ["2024-10-01", "2024-11-01", "2024-12-01"]
  } as const;  

export default class TimescaleDBPage {
    /**
     * Retrieves the database configuration for a given database name.
     * @param dbName - The database name (`veriflow_test_1` or `veriflow_test_2`).
     * @returns {Object} - The configuration object.
     */
    static getDBConfig(dbName: string) {
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
    static async connectToDatabase(targetDB: string, dbType: 'timescale' | 'postgresql') {
        const dbConfig = this.getDBConfig(targetDB);
        await DBManager.connect(dbType, dbConfig);
    }

    /**
     * Creates two test database instances (`veriflow_test_1` and `veriflow_test_2`),
     * copying data from the main database (`veriflow_timescale`).
     */
    static async setupTestDatabases() {
        const client = DBManager.getPGClient();
        await client.query(`DROP DATABASE IF EXISTS ${TEST_DB_1}`);
        await client.query(`DROP DATABASE IF EXISTS ${TEST_DB_2}`);
        await client.query(`CREATE DATABASE ${TEST_DB_1} TEMPLATE ${MAIN_DB}`);
        await client.query(`CREATE DATABASE ${TEST_DB_2} TEMPLATE ${MAIN_DB}`);
        await DBManager.disconnect();
    }

    /**
     * Switches the active database between the test instances.
     * @param index - The index of the test database (1 or 2).
     */
    static async switchTestDatabase(index: number) {
        if (![1, 2].includes(index)) {
            throw new Error(`Invalid database index: ${index}. Expected 1 or 2.`);
        }

        const dbName = index === 1 ? TEST_DB_1 : TEST_DB_2;
        await DBManager.connect('timescale', this.getDBConfig(dbName));
    }

    /**
     * Executes a command inside a running TimescaleDB container as a given user.
     * @param containerName - The name of the container.
     * @param command - The command to execute.
     * @param user - Optional user (e.g., 'postgres') to execute as.
     * @returns A promise with the command output.
     */
    static async execInContainer(containerName: string, command: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
        const fullCmd = containerName
            ? `docker exec ${containerName} sh -c "${command}"`
            : command;
    
        exec(fullCmd, (error, stdout, stderr) => {
            if (error) {
            reject(stderr || error.message);
            } else {
            resolve(stdout.trim());
            }
        });
        });
    }
    
    /**
     * Checks if the specified Docker container is currently running.
     * @param containerName - The name of the Docker container.
     * @returns A promise that resolves to `true` if the container is running, otherwise `false`.
     */
    static async isContainerRunning(containerName: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
        exec(`docker inspect -f '{{.State.Running}}' ${containerName}`, (error, stdout, stderr) => {
            if (error) {
            // If the container doesn't exist or cannot be inspected
            if (stderr) {
                resolve(false);
            } else {
                reject(error.message);
            }
            } else {
            resolve(stdout.trim() === 'true');
            }
        });
        });
    }

    static async getFinancialDataRowCount() {
        const result = await DBManager.getPGClient().query(`
            SELECT COUNT(*) as count FROM business_financial_data;
        `);
        return parseInt(result.rows[0].count, 10);
    }

    static async getFinancialDataColumnNames() {
        const result = await DBManager.getPGClient().query(`
            SELECT column_name FROM information_schema.columns 
            WHERE table_name = 'business_financial_data';
        `);
        return result.rows.map(row => row.column_name);
    }

    static async getFinancialDataFirstRow() {
        const result = await DBManager.getPGClient().query(`
            SELECT * FROM business_financial_data ORDER BY id ASC LIMIT 1;
        `);
        return result.rows[0];
    }

    static async getAverageFinancialDataValue() {
        const result = await DBManager.getPGClient().query(`
            SELECT AVG(data_value) as avg_value FROM business_financial_data;
        `);
        return parseFloat(result.rows[0].avg_value);
    }

    static async getTotalDataValueForQuarter(quarter: keyof typeof quarterMonths): Promise<number> {
        const months = quarterMonths[quarter];
    
        const result = await DBManager.getPGClient().query(
          `SELECT SUM(data_value) AS total 
           FROM business_financial_data 
           WHERE period = ANY($1::DATE[])`,
          [months]
        );
    
        return parseFloat(result.rows[0].total || '0');
    }
            
    static async findMissingPeriodsForSeries(seriesReference: string, year: string) {
        const expectedMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

        const result = await DBManager.getPGClient().query(`
            SELECT TO_CHAR(period, 'MM') AS month
            FROM business_financial_data
            WHERE series_reference = $1 
            AND period BETWEEN $2::DATE AND $3::DATE;
        `, [seriesReference, `${year}-01-01`, `${year}-12-31`]);

        const existingMonths = result.rows.map(r => r.month);
        return expectedMonths.filter(m => !existingMonths.includes(m));
    }

    static async verifyDataValueTrend() {
        const result = await DBManager.getPGClient().query(`
            SELECT period, data_value FROM business_financial_data
            ORDER BY period ASC;
        `);
        const values = result.rows.map(row => parseFloat(row.data_value));
        return values.every((value, index, arr) => index === 0 || value >= arr[index - 1]);
    }

    static async checkDataConsistency() {
        const result = await DBManager.getPGClient().query(`
            SELECT series_reference, period, COUNT(*) 
            FROM business_financial_data
            GROUP BY series_reference, period
            HAVING COUNT(*) > 1;
        `);
        return result.rowCount === 0;
    }

    static async validateDataRange(minValue: number, maxValue: number) {
        const result = await DBManager.getPGClient().query(`
            SELECT COUNT(*) FROM business_financial_data
            WHERE data_value < $1 OR data_value > $2;
        `, [minValue, maxValue]);
        return parseInt(result.rows[0].count, 10) === 0;
    }

    static async checkDuplicateEntries() {
        const result = await DBManager.getPGClient().query(`
            SELECT series_reference, period, COUNT(*) 
            FROM business_financial_data
            GROUP BY series_reference, period
            HAVING COUNT(*) > 1;
        `);
        return result.rowCount === 0;
    }

    static async verifyDataConsistencyAcrossPeriods() {
        const result = await DBManager.getPGClient().query(`
            SELECT COUNT(*) AS duplicates
            FROM business_financial_data
            GROUP BY period, series_reference, data_value
            HAVING COUNT(*) > 1
        `);

        return result.rowCount === 0;
    }

    static async getFinancialDataRange() {
        const result = await DBManager.getPGClient().query(`
            SELECT MIN(data_value) AS min, MAX(data_value) AS max
            FROM business_financial_data
        `);

        return { min: parseFloat(result.rows[0].min), max: parseFloat(result.rows[0].max) };
    }

    static async getRetainedDataCount() {
        const result = await DBManager.getPGClient().query(`
            SELECT COUNT(*) AS count FROM business_financial_data
            WHERE TO_DATE(period, 'YYYY-MM') >= NOW() - INTERVAL '5 years';
        `);
        return parseInt(result.rows[0].count, 10);
    }

    static async getDataRangeForSubject(subject: string) {
        const result = await DBManager.getPGClient().query(`
            SELECT COALESCE(MIN(data_value), 0) AS min, COALESCE(MAX(data_value), 0) AS max
            FROM business_financial_data
            WHERE subject = $1;
        `, [subject]);
        return { min: parseFloat(result.rows[0].min), max: parseFloat(result.rows[0].max) };
    }

    static async hasGapsInPeriods() {
        const result = await DBManager.getPGClient().query(`
            WITH sorted_data AS (
                SELECT TO_DATE(period, 'YYYY-MM') AS period_date FROM business_financial_data ORDER BY period_date ASC
            )
            SELECT COUNT(*) AS gaps
            FROM sorted_data a
            LEFT JOIN sorted_data b ON a.period_date + INTERVAL '1 month' = b.period_date
            WHERE b.period_date IS NULL;
        `);
        return result.rows[0].gaps > 0;
    }

    static async detectOutliers() {
        const result = await DBManager.getPGClient().query(`
            WITH stats AS (
                SELECT AVG(data_value) AS mean, STDDEV(data_value) AS stddev
                FROM business_financial_data
            )
            SELECT COUNT(*) AS outliers
            FROM business_financial_data, stats
            WHERE ABS(data_value - stats.mean) > (3 * stats.stddev);
        `);
        return parseInt(result.rows[0].outliers, 10);
    }

    static async getMissingDataBySeries() {
        const result = await DBManager.getPGClient().query(`
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
    }

    static async checkFinancialDataTrends() {
        const result = await DBManager.getPGClient().query(`
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
    }

    static async detectAnomalousSpikes() {
        const result = await DBManager.getPGClient().query(`
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
    }

    static async measureQueryPerformance() {
        const start = performance.now();
        
        await DBManager.getPGClient().query(`
            SELECT AVG(data_value), SUM(data_value), MIN(data_value), MAX(data_value)
            FROM business_financial_data;
        `);
        
        const end = performance.now();
        return end - start;
    }

    static async checkForeignKeyIntegrity() {
        const result = await DBManager.getPGClient().query(`
            SELECT DISTINCT bfd.series_reference
            FROM business_financial_data bfd
            LEFT JOIN reference_financial_data rfd 
            ON bfd.series_reference = rfd.series_reference
            WHERE rfd.series_reference IS NULL;
        `);

        return result.rows;
    }

    static async detect7DayRevenueAnomalies(): Promise<any[]> {
        await DBManager.getPGClient().query(`
            CREATE TABLE IF NOT EXISTS financial_analytics (
                id SERIAL PRIMARY KEY,
                company TEXT,
                timestamp TIMESTAMPTZ NOT NULL,
                revenue NUMERIC
            );
        `);
    
        await DBManager.getPGClient().query(`
            DELETE FROM financial_analytics;
            INSERT INTO financial_analytics (company, timestamp, revenue)
            SELECT 
                'VeriTech',
                NOW() - (INTERVAL '1 day' * i),
                CASE 
                    WHEN i = 4 THEN 99999  -- simulate anomaly spike
                    ELSE 1000 + trunc(random() * 50)
                END
            FROM generate_series(0, 14) AS s(i);
        `);
    
        const result = await DBManager.getPGClient().query(`
            SELECT 
                timestamp,
                revenue,
                AVG(revenue) OVER (
                    ORDER BY timestamp 
                    ROWS BETWEEN 3 PRECEDING AND 3 FOLLOWING
                ) AS moving_avg,
                CASE 
                    WHEN revenue > 1.5 * AVG(revenue) OVER (
                        ORDER BY timestamp 
                        ROWS BETWEEN 3 PRECEDING AND 3 FOLLOWING
                    ) THEN 'ANOMALY'
                    ELSE 'NORMAL'
                END AS status
            FROM financial_analytics
            ORDER BY timestamp DESC;
        `);
    
        return result.rows;
    }

    static async detectHighCPUAnomaly(serverId: string): Promise<any[]> {
        // Ensure the table exists
        await DBManager.getPGClient().query(`
            CREATE TABLE IF NOT EXISTS server_metrics (
                time TIMESTAMPTZ NOT NULL,
                server_id TEXT NOT NULL,
                cpu_usage NUMERIC,
                memory_usage NUMERIC
            );
        `);
    
        // Delete old data
        await DBManager.getPGClient().query(`
            DELETE FROM server_metrics WHERE server_id = $1;
        `, [serverId]);
    
        // Insert new simulated data (with one anomaly at 93%)
        await DBManager.getPGClient().query(`
            INSERT INTO server_metrics (time, server_id, cpu_usage, memory_usage)
            VALUES 
                (NOW() - INTERVAL '5 min', $1, 40, 2048),
                (NOW() - INTERVAL '4 min', $1, 43, 2072),
                (NOW() - INTERVAL '3 min', $1, 93, 2100), -- simulate anomaly
                (NOW() - INTERVAL '2 min', $1, 45, 2050),
                (NOW() - INTERVAL '1 min', $1, 42, 2035);
        `, [serverId]);
    
        // Query for anomaly detection
        const result = await DBManager.getPGClient().query(`
            SELECT time_bucket('1 minute', time) AS bucket,
                   server_id,
                   AVG(cpu_usage) AS avg_cpu,
                   MAX(cpu_usage) AS max_cpu
            FROM server_metrics
            WHERE time > NOW() - INTERVAL '10 minutes'
              AND server_id = $1
            GROUP BY bucket, server_id
            ORDER BY bucket;
        `, [serverId]);
    
        return result.rows;
    }
}
