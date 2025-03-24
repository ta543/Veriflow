"use strict";
/**
 * (C) VeriFlow 2025
 *
 * Page Setup: Automatically sets page context, blocks ads, and dynamically sets the suite.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.expect = exports.test = void 0;
const tslib_1 = require("tslib");
const test_1 = require("@playwright/test");
const _PageUtils_1 = require("@PageUtils");
const _AllureEnvConfig_1 = require("@AllureEnvConfig");
const TimescaleDBPage = tslib_1.__importStar(require("@TimescaleDBPage"));
const _StepsUtils_1 = require("@StepsUtils");
const test = test_1.test.extend({
    Timescale: ({}, use) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const wrapped = (0, _StepsUtils_1.withSteps)(TimescaleDBPage, test.step, 'Timescale');
        yield use(wrapped);
    })
});
exports.test = test;
test.beforeEach(({ page }, testInfo) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    (0, _PageUtils_1.setPage)(page);
    const currentEnv = (0, _AllureEnvConfig_1.getCurrentEnvConfig)();
    if (currentEnv.suite === 'ALL') {
        (0, _AllureEnvConfig_1.setDynamicSuite)(deriveSuiteNameFromFilePath(testInfo.file));
    }
    yield (0, _PageUtils_1.blockAds)(page);
}));
function deriveSuiteNameFromFilePath(filePath) {
    if (filePath.includes('practice-expandtesting'))
        return 'ExpandTesting - E2E';
    if (filePath.includes('expandtesting-api'))
        return 'ExpandTesting - API';
    if (filePath.includes('the-internet-tests'))
        return 'The Internet - E2E';
    if (filePath.includes('sauce-demo-tests'))
        return 'SauceDemo | E2E';
    if (filePath.includes('timescaledb-tests'))
        return 'TimescaleDB | DB';
    return 'ALL';
}
var test_2 = require("@playwright/test");
Object.defineProperty(exports, "expect", { enumerable: true, get: function () { return test_2.expect; } });
//# sourceMappingURL=page-setup.js.map