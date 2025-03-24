/**
 * global-setup.ts: This module is responsible for setting up the global state before all tests start.
 * It includes a default export function that runs before all tests, setting up any necessary global context.
 * By centralizing these setup operations, it ensures a consistent starting point for all tests, improving test reliability.
 * You can add any initialization setup code within this function.
 */

import { execSync } from 'child_process';
import { updateEnvConfig } from '@AllureEnvConfig';

async function globalSetup() {
    execSync("bash ./allure/scripts/prepare-allure.sh", { stdio: "inherit" });
    updateEnvConfig({ suite: 'ALL' }); // Reset suite before tests run
}

export default globalSetup;
