"use strict";
/**
 * (C) VeriFlow 2025 - Universal Database Connection Manager
 *
 * This module manages database connections for TimescaleDB & PostgreSQL.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const pg_1 = require("pg");
class DBManager {
    /**
     * Connects to a PostgreSQL or TimescaleDB instance.
     * @param dbType - The type of database (`timescale` or `postgresql`).
     * @param config - The database configuration.
     */
    static connect(dbType, config) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(`Connecting to ${dbType} DB at ${config.host}:${config.port}`);
            if (this.pgClient) {
                yield this.disconnect();
            }
            this.pgClient = new pg_1.Client(config);
            yield this.pgClient.connect();
            this.connectedDBType = dbType;
        });
    }
    static getConnectedDBType() {
        return this.connectedDBType;
    }
    /**
     * Disconnects from the currently active database connection.
     */
    static disconnect() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.pgClient) {
                yield this.pgClient.end();
                this.pgClient = null;
            }
        });
    }
    /**
     * Returns the current PostgreSQL client instance.
     * @returns {PGClient} - The connected PostgreSQL client.
     * @throws Error if no connection is active.
     */
    static getPGClient() {
        if (!this.pgClient)
            throw new Error('PostgreSQL client is not connected.');
        return this.pgClient;
    }
}
DBManager.pgClient = null;
DBManager.connectedDBType = null;
exports.default = DBManager;
//# sourceMappingURL=db-manager.js.map