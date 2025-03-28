/**
 * (C) VeriFlow 2025 - Adminer UI Automation
 * This page object handles login interactions for the Adminer web UI to access TimescaleDB.
 */

import { click, fill, select } from '@ActionUtils';
import { expectElementToBeVisible } from '@AssertUtils';
import { getLocator, getLocatorByRole } from '@LocatorUtils';
import { gotoURL, wait } from '@PageUtils';
import { AdminerLoginTestData } from '../../testdata/testdata/adminer-login-testdata';

// Locators
const dbDriverDropdown = () => getLocator('select[name="auth[driver]"]');
const serverInput = () => getLocator('input[name="auth[server]"]');
const usernameInput = () => getLocator('input[name="auth[username]"]');
const passwordInput = () => getLocator('input[name="auth[password]"]');
const databaseInput = () => getLocator('input[name="auth[db]"]');
const loginButton = () => getLocator('input[type="submit"][value="Login"]');
const schemaHeader = () => getLocator('h2:has-text("Schema: public")');
const sqlCommandLink = () => getLocatorByRole('link', { name: 'SQL command' });
const sqlEditor = () => getLocator('pre');

/**
 * Logs into the Adminer UI with the specified database.
 * @param dbType - 'timescale' or 'postgres'
 * @param dbName - e.g., 'veriflow_timescale'
 */
export async function loginToAdminerDB(dbType: 'timescale' | 'postgres', dbName: string) {
  const baseUrl =
    process.env.USE_BS_LOCAL === 'true' ? 'http://bs-local.com:3000' : 'http://localhost:3000';

  const credentials = AdminerLoginTestData[dbName];
  if (!credentials) {
    throw new Error(`No login test data found for database: ${dbName}`);
  }

  const { server, username, password, database } = credentials;
  const driver = dbType === 'postgres' ? 'pgsql' : 'pgsql';

  console.log(`🔐 Logging into Adminer → DB: ${dbName} | Type: ${dbType} | URL: ${baseUrl}`);

  await gotoURL(baseUrl);
  await wait(1000);

  await select(dbDriverDropdown(), driver);
  await fill(serverInput(), server);
  await fill(usernameInput(), username);
  await fill(passwordInput(), password);
  await fill(databaseInput(), database);
  await click(loginButton());

  await expectElementToBeVisible(schemaHeader());
}

/**
 * Opens the SQL command interface in Adminer after a successful login.
 */
export async function openSQLCommandInterface(): Promise<void> {
  await click(sqlCommandLink());
  await click(sqlEditor());
}









