"use strict";
/**
 * global-setup.ts: This module is responsible for setting up the global state before all tests start.
 * It includes a default export function that runs before all tests, setting up any necessary global context.
 * By centralizing these setup operations, it ensures a consistent starting point for all tests, improving test reliability.
 * You can add any initialization setup code within this function.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _AllureEnvConfig_1 = require("@AllureEnvConfig");
function globalSetup() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        console.log('🔄 Running global setup...');
        (0, _AllureEnvConfig_1.updateEnvConfig)({ suite: 'ALL' }); // Reset suite before tests run
    });
}
exports.default = globalSetup;
//# sourceMappingURL=global-setup.js.map