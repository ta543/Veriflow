"use strict";
// /**
//  * (C) VeriFlow 2025
//  *
//  * The purpose of this module is to manage all functions handling PostgreSQL restart
//  * inside the container, ensuring service availability and data integrity.
//  *
//  * VeriFlow Test Automation - Database Automation | PostgresPage
//  */
// import { Client } from 'pg';
// import DBManager from '@DBManager';
// /**
//  * Returns PostgreSQL database configuration.
//  */
// export function config() {
//     return {
//         host: 'localhost',
//         port: 5432,
//         database: 'veriflow',
//         user: 'admin',
//         password: 'admin'
//     };
// }
// // Methods
// /**
//  * Executes a command inside the running PostgreSQL container.
//  * @param containerName - Name of the container.
//  * @param command - Shell command to execute inside the container.
//  */
// export async function execInContainer(containerName: string, command: string): Promise<string> {
//     return new Promise<string>((resolve, reject) => {
//         exec(`docker exec ${containerName} sh -c "${command}"`, (error, stdout, stderr) => {
//             if (error) {
//                 reject(stderr || error.message);
//             } else {
//                 resolve(stdout.trim());
//             }
//         });
//     });
// }
// /**
//  * Verifies if PostgreSQL is running inside the container.
//  * @returns {Promise<boolean>} - True if PostgreSQL is running, false otherwise.
//  */
// export async function isPostgresRunning(containerName: string): Promise<boolean> {
//     try {
//         const result = await execInContainer(containerName, "pg_isready -U admin");
//         return result.includes("accepting connections");
//     } catch {
//         return false;
//     }
// }
// /**
//  * Restarts PostgreSQL inside the container without stopping the container.
//  * @param containerName - Name of the PostgreSQL container.
//  */
// export async function restartPostgres(containerName: string): Promise<void> {
//     await execInContainer(containerName, "pg_ctl restart -D /var/lib/postgresql/data");
// }
// /**
//  * Verifies database integrity by checking row count after restart.
//  * @returns {Promise<number>} - Number of records in the financial data table.
//  */
// export async function verifyDatabaseIntegrity(): Promise<number> {
//     const result = await DBManager.getPGClient().query(`
//         SELECT COUNT(*) as count FROM business_financial_data;
//     `);
//     return parseInt(result.rows[0].count, 10);
// }
//# sourceMappingURL=postgres-page.js.map