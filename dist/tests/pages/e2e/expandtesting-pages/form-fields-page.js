"use strict";
/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code FormFieldsPage}.
 *
 * VeriFlow Test Automation - ExpandTesting | FormFieldsPage
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOutputNumberVisible = exports.clickDisplayInputsButton = exports.fillDateField = exports.fillPasswordField = exports.fillTextField = exports.fillNumberField = exports.closeAdIfVisible = exports.clickFirstCardFooterButton = void 0;
const tslib_1 = require("tslib");
const _ActionUtils_1 = require("@ActionUtils");
const _AssertUtils_1 = require("@AssertUtils");
const _PageUtils_1 = require("@PageUtils");
const _LocatorUtils_1 = require("@LocatorUtils");
// Locators
const firstCardFooterButton = () => (0, _LocatorUtils_1.getLocator)('.card-footer > div > .btn').first();
const adIframe = 'iframe[name="aswift_9"]';
const closeAdButton = () => (0, _LocatorUtils_1.getLocatorByRole)('button', { name: 'Close ad' });
const inputNumberField = () => (0, _LocatorUtils_1.getLocatorByRole)('spinbutton', { name: 'Input: Number' });
const inputTextField = () => (0, _LocatorUtils_1.getLocatorByRole)('textbox', { name: 'Input: Text' });
const inputPasswordField = () => (0, _LocatorUtils_1.getLocatorByRole)('textbox', { name: 'Input: Password' });
const inputDateField = () => (0, _LocatorUtils_1.getLocatorByRole)('textbox', { name: 'Input: Date' });
const displayInputsButton = () => (0, _LocatorUtils_1.getLocatorByRole)('button', { name: 'Display Inputs' });
const outputNumberLabel = () => (0, _LocatorUtils_1.getLocator)('text=Output: Number');
// Methods
function clickFirstCardFooterButton() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(firstCardFooterButton());
    });
}
exports.clickFirstCardFooterButton = clickFirstCardFooterButton;
function closeAdIfVisible() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const adFrame = (0, _PageUtils_1.getPage)().frameLocator('iframe[name="aswift_9"]');
        const closeButton = adFrame.getByRole('button', { name: 'Close ad' });
        if (yield closeButton.isVisible({ timeout: 2000 })) {
            yield closeButton.click();
        }
    });
}
exports.closeAdIfVisible = closeAdIfVisible;
function fillNumberField(value) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(inputNumberField());
        yield (0, _ActionUtils_1.fill)(inputNumberField(), value);
    });
}
exports.fillNumberField = fillNumberField;
function fillTextField(value) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(inputTextField());
        yield (0, _ActionUtils_1.fill)(inputTextField(), value);
    });
}
exports.fillTextField = fillTextField;
function fillPasswordField(value) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(inputPasswordField());
        yield (0, _ActionUtils_1.fill)(inputPasswordField(), value);
    });
}
exports.fillPasswordField = fillPasswordField;
function fillDateField(value) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.fill)(inputDateField(), value);
    });
}
exports.fillDateField = fillDateField;
function clickDisplayInputsButton() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(displayInputsButton());
    });
}
exports.clickDisplayInputsButton = clickDisplayInputsButton;
function verifyOutputNumberVisible() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToHaveText)(outputNumberLabel(), 'Output: Number');
    });
}
exports.verifyOutputNumberVisible = verifyOutputNumberVisible;
//# sourceMappingURL=form-fields-page.js.map