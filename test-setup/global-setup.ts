/**
 * global-setup.ts: This module is responsible for setting up the global state before all tests start.
 * It includes a default export function that runs before all tests, setting up any necessary global context.
 * By centralizing these setup operations, it ensures a consistent starting point for all tests, improving test reliability.
 * You can add any initialization setup code within this function.
 */

import { updateEnvConfig } from '@AllureEnvConfig';
// import { getAllureReportUrl, notifySlackWithResults } from '@SlackManager';

async function globalSetup() {
    updateEnvConfig({ suite: 'ALL' }); // Reset suite before tests run
    // const reportUrl = await getAllureReportUrl();
    // await notifySlackWithResults(reportUrl);
}

export default globalSetup;
