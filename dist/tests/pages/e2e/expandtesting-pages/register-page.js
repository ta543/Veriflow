"use strict";
/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code RegisterPage}.
 *
 * VeriFlow Test Automation - ExpandTesting | RegisterPage
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRegistrationFailed = exports.submitRegisterForm = exports.fillRegisterFormWithInvalidCredentials = void 0;
const tslib_1 = require("tslib");
const _ActionUtils_1 = require("@ActionUtils");
const _AssertUtils_1 = require("@AssertUtils");
const _LocatorUtils_1 = require("@LocatorUtils");
const practice_expandtesting_testdata_1 = require("../../../testdata/testdata/practice-expandtesting-testdata");
// Locators
const usernameField = () => (0, _LocatorUtils_1.getLocatorByRole)('textbox', { name: 'Username' });
const passwordField = () => (0, _LocatorUtils_1.getLocatorByRole)('textbox', { name: 'Password', exact: true });
const confirmPasswordField = () => (0, _LocatorUtils_1.getLocatorByRole)('textbox', { name: 'Confirm Password' });
const registerButton = () => (0, _LocatorUtils_1.getLocatorByRole)('button', { name: 'Register' });
const errorMessage = () => (0, _LocatorUtils_1.getLocatorByText)('An error occurred during registration. Please try again.');
// Methods
function fillRegisterFormWithInvalidCredentials() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { username, password, confirmPassword } = practice_expandtesting_testdata_1.ExpandTestingRegisterTestData.invalidCredentials;
        yield (0, _ActionUtils_1.fill)(usernameField(), username);
        yield (0, _ActionUtils_1.fill)(passwordField(), password);
        yield (0, _ActionUtils_1.fill)(confirmPasswordField(), confirmPassword);
    });
}
exports.fillRegisterFormWithInvalidCredentials = fillRegisterFormWithInvalidCredentials;
function submitRegisterForm() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(registerButton());
    });
}
exports.submitRegisterForm = submitRegisterForm;
function verifyRegistrationFailed() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToHaveText)(errorMessage(), 'An error occurred during registration. Please try again.');
    });
}
exports.verifyRegistrationFailed = verifyRegistrationFailed;
//# sourceMappingURL=register-page.js.map