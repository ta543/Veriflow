/**
 * (C) VeriFlow 2025 - Universal Database Connection Manager
 *
 * This module manages database connections for TimescaleDB & PostgreSQL.
 */

import { Client as PGClient } from 'pg';

type SupportedDBs = 'timescale' | 'postgresql';
type DBConfig = { host: string; port: number; database: string; user: string; password: string };

class DBManager {
    private static pgClient: PGClient | null = null;
    private static connectedDB: SupportedDBs | null = null;

    /**
     * Connects to a PostgreSQL or TimescaleDB instance.
     * @param dbType - The type of database (`timescale` or `postgresql`).
     * @param config - The database configuration.
     */
    static async connect(dbType: SupportedDBs, config: DBConfig) {
        if (this.pgClient) {
            await this.disconnect();
        }

        this.pgClient = new PGClient(config);
        await this.pgClient.connect();
        this.connectedDB = dbType;
    }

    /**
     * Disconnects from the currently active database connection.
     */
    static async disconnect() {
        if (this.pgClient) {
            await this.pgClient.end();
            this.pgClient = null;
        }
        this.connectedDB = null;
    }

    /**
     * Returns the current PostgreSQL client instance.
     * @returns {PGClient} - The connected PostgreSQL client.
     * @throws Error if no connection is active.
     */
    static getPGClient(): PGClient {
        if (!this.pgClient) throw new Error('PostgreSQL client is not connected.');
        return this.pgClient;
    }
}

export default DBManager;









// import { Client as PGClient } from 'pg';
// import { MongoClient } from 'mongodb';

// type SupportedDBs = 'timescale' | 'postgresql';

// class DBManager {
//     private static pgClient: PGClient | null = null;
//     private static connectedDB: SupportedDBs | null = null;

//     static async connect(dbType: SupportedDBs, config: any) {
//         if (this.connectedDB) {
//             console.warn(`A database (${this.connectedDB}) is already connected!`);
//             return;
//         }

//         switch (dbType) {
//             case 'timescale':
//             case 'postgresql':
//                 this.pgClient = new PGClient(config);
//                 await this.pgClient.connect();
//                 console.log(`Connected to ${dbType}`);
//                 break;

//             default:
//                 throw new Error(`Unsupported database type: ${dbType}`);
//         }

//         this.connectedDB = dbType;
//     }

//     static async disconnect() {
//         if (!this.connectedDB) {
//             console.warn('No active database connection to close.');
//             return;
//         }

//         switch (this.connectedDB) {
//             case 'timescale':
//             case 'postgresql':
//                 if (this.pgClient) {
//                     await this.pgClient.end();
//                     console.log(`Disconnected from ${this.connectedDB}`);
//                 }
//                 break;
//         }

//         this.pgClient = null;
//         this.connectedDB = null;
//     }

//     static getPGClient() {
//         if (!this.pgClient) throw new Error('PostgreSQL client is not connected.');
//         return this.pgClient;
//     }
// }

// export default DBManager;
