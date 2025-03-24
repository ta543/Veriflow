"use strict";
/**
 * global-teardown.ts: This module is responsible for tearing down the global state after all tests have completed.
 * It includes a default export function that runs after all tests, cleaning up any necessary global context.
 * By centralizing these teardown operations, it ensures a consistent end state for all tests, improving test reliability.
 * You can add any teardown setup code within this function.
 * Note: Due to a known issue (https://github.com/microsoft/playwright/issues/23875),
 * the last line of output from this function may be cleared by the line reporter.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const child_process_1 = require("child_process");
const _SlackManager_1 = require("@SlackManager");
const _AllureEnvConfig_1 = require("@AllureEnvConfig");
function globalTeardown() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        (0, child_process_1.execSync)("bash generate-allure-report.sh", { stdio: "inherit" });
        const envConfig = (0, _AllureEnvConfig_1.getCurrentEnvConfig)();
        const reportUrl = yield (0, _SlackManager_1.getAllureReportUrl)();
        yield (0, _SlackManager_1.notifySlackWithResults)(reportUrl);
    });
}
exports.default = globalTeardown;
//# sourceMappingURL=global-teardown.js.map