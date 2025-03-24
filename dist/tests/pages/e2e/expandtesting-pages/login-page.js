"use strict";
/**
 * (C) VeriFlow 2025 - ExpandTesting Practice Automation Tests
 * This page object handles interactions for the login page of practice.expandtesting.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifySuccessfulLogin = exports.submitLoginForm = exports.fillLoginFormWithInvalidCredentials = exports.fillLoginFormWithValidCredentials = void 0;
const tslib_1 = require("tslib");
const _ActionUtils_1 = require("@ActionUtils");
const _AssertUtils_1 = require("@AssertUtils");
const _LocatorUtils_1 = require("@LocatorUtils");
const practice_expandtesting_testdata_1 = require("../../../testdata/testdata/practice-expandtesting-testdata");
// Locators
const usernameField = () => (0, _LocatorUtils_1.getLocatorByRole)('textbox', { name: 'Username' });
const passwordField = () => (0, _LocatorUtils_1.getLocatorByRole)('textbox', { name: 'Password' });
const loginButton = () => (0, _LocatorUtils_1.getLocatorByRole)('button', { name: 'Login' });
const successMessage = () => (0, _LocatorUtils_1.getLocator)('text=You logged into a secure area!');
// Methods
function fillLoginFormWithValidCredentials() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { username, password } = practice_expandtesting_testdata_1.ExpandTestingLoginTestData.validCredentials;
        yield (0, _ActionUtils_1.fill)(usernameField(), username);
        yield (0, _ActionUtils_1.fill)(passwordField(), password);
    });
}
exports.fillLoginFormWithValidCredentials = fillLoginFormWithValidCredentials;
function fillLoginFormWithInvalidCredentials() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { username, password } = practice_expandtesting_testdata_1.ExpandTestingLoginTestData.invalidCredentials;
        yield (0, _ActionUtils_1.fill)(usernameField(), username);
        yield (0, _ActionUtils_1.fill)(passwordField(), password);
    });
}
exports.fillLoginFormWithInvalidCredentials = fillLoginFormWithInvalidCredentials;
function submitLoginForm() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(loginButton());
    });
}
exports.submitLoginForm = submitLoginForm;
function verifySuccessfulLogin() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToHaveText)(successMessage(), 'You logged into a secure area!');
    });
}
exports.verifySuccessfulLogin = verifySuccessfulLogin;
//# sourceMappingURL=login-page.js.map