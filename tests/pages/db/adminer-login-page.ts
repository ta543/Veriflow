/**
 * (C) VeriFlow 2025 - Adminer UI Automation
 * This page object handles login interactions for the Adminer web UI to access TimescaleDB.
 */

import { click, fill } from '@ActionUtils';
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
const schemaHeader = () => getLocator('text=Schema: public');

// Methods

/**
 * Logs into the Adminer UI with the specified database.
 * @param dbType - 'timescale' or 'postgres'
 * @param dbName - e.g., 'veriflow_timescale'
 */
export async function loginToAdminerDB(dbType: 'timescale' | 'postgres', dbName: string) {
  const baseUrl = process.env.USE_BS_LOCAL === 'true' ? 'http://bs-local.com:8081' : 'http://localhost:8081';

  const driver = dbType === 'postgres' ? 'pgsql' : 'pgsql';
  const server = dbName;
  const username = 'admin';
  const password = 'admin';

  console.log(`🔐 Logging into Adminer → DB: ${dbName} | Type: ${dbType} | URL: ${baseUrl}`);

  await gotoURL(baseUrl);
  await wait(1000);

  await select(dbDriverDropdown(), driver);
  await fill(serverInput(), server);
  await fill(usernameInput(), username);
  await fill(passwordInput(), password);
  await fill(databaseInput(), dbName);
  await click(loginButton());

  await expectElementToBeVisible(schemaHeader());
}








export async function openAdminerLoginPage(page) {
  const baseUrl = process.env.USE_BS_LOCAL === 'true' ? 'http://bs-local.com:8081' : 'http://localhost:8081';
  await page.goto(baseUrl);
}

export async function fillAdminerLoginForm() {
  const { server, username, password, database } = AdminerLoginTestData.valid;

  await select(dbDriverDropdown(), 'pgsql');
  await fill(serverInput(), server);
  await fill(usernameInput(), username);
  await fill(passwordInput(), password);
  await fill(databaseInput(), database);
}

export async function submitAdminerLoginForm() {
  await click(loginButton());
}

export async function verifyAdminerLoginSuccess() {
  await expectElementToBeVisible(schemaHeader());
}
