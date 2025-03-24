"use strict";
/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code CheckboxPage}.
 *
 *
 * VeriFlow Test Automation - The Internet | CheckboxPage
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCheckboxChecked = exports.toggleCheckbox = void 0;
const tslib_1 = require("tslib");
const _LocatorUtils_1 = require("@LocatorUtils");
const checkboxes = () => (0, _LocatorUtils_1.getLocatorByRole)('checkbox');
const checkbox1 = () => checkboxes().nth(0);
const checkbox2 = () => checkboxes().nth(1);
function toggleCheckbox(index) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const checkbox = index === 1 ? checkbox1() : checkbox2();
        yield checkbox.click();
    });
}
exports.toggleCheckbox = toggleCheckbox;
function isCheckboxChecked(index) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const checkbox = index === 1 ? checkbox1() : checkbox2();
        return yield checkbox.isChecked();
    });
}
exports.isCheckboxChecked = isCheckboxChecked;
//# sourceMappingURL=checkbox-page.js.map