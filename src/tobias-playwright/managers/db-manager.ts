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
