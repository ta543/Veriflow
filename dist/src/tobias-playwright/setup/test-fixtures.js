"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const tslib_1 = require("tslib");
const test_1 = require("@playwright/test");
const _StepsUtils_1 = require("@StepsUtils");
const _TimescaleDBPage_1 = tslib_1.__importDefault(require("@TimescaleDBPage"));
const _DBManager_1 = tslib_1.__importDefault(require("@DBManager"));
exports.test = test_1.test.extend({
    Timescale: ({}, use) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const instance = new _TimescaleDBPage_1.default();
        const wrapped = (0, _StepsUtils_1.withSteps)(instance, 'TimescaleDBPage');
        yield use(wrapped);
    }),
    DB: ({}, use) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const instance = new _DBManager_1.default();
        const wrapped = (0, _StepsUtils_1.withSteps)(instance, 'DBManager');
        yield use(wrapped);
    }),
});
//# sourceMappingURL=test-fixtures.js.map