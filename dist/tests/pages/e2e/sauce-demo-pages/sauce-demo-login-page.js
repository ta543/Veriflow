"use strict";
/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code SauceDemoLoginPage}.
 *
 * VeriFlow Test Automation - Sauce Demo | SauceDemoLoginPage
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyLoginPageisDisplayed = exports.verifyErrorMessageForFailureLogin = exports.failureLogin = exports.logInSuccessfully = exports.navigateToSauceDemoLoginPage = void 0;
const tslib_1 = require("tslib");
const _ActionUtils_1 = require("@ActionUtils");
const _PageUtils_1 = require("@PageUtils");
const sauce_demo_test_data_1 = require("../../../testdata/testdata/sauce-demo-test-data");
const _AssertUtils_1 = require("@AssertUtils");
const _LocatorUtils_1 = require("@LocatorUtils");
const userName = `#user-name`;
const password = () => (0, _LocatorUtils_1.getLocator)(`#password`).or((0, _LocatorUtils_1.getLocatorByPlaceholder)('Password', { exact: true }));
const login = () => (0, _LocatorUtils_1.getLocatorByRole)('button', { name: 'Login' });
const errorMessage = `//*[contains(@class,'error-message')]`;
function navigateToSauceDemoLoginPage() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _PageUtils_1.gotoURL)('https://www.saucedemo.com/');
    });
}
exports.navigateToSauceDemoLoginPage = navigateToSauceDemoLoginPage;
function logInSuccessfully() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.fill)(userName, sauce_demo_test_data_1.successLoginCredentials.username);
        yield (0, _ActionUtils_1.fill)(password(), sauce_demo_test_data_1.successLoginCredentials.password);
        yield (0, _ActionUtils_1.clickAndNavigate)(login());
    });
}
exports.logInSuccessfully = logInSuccessfully;
function failureLogin() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.fill)(userName, sauce_demo_test_data_1.failureLoginCredentials.username);
        yield (0, _ActionUtils_1.fill)(password(), sauce_demo_test_data_1.failureLoginCredentials.password);
        yield (0, _ActionUtils_1.click)(login());
    });
}
exports.failureLogin = failureLogin;
function verifyErrorMessageForFailureLogin() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToBeVisible)(errorMessage);
    });
}
exports.verifyErrorMessageForFailureLogin = verifyErrorMessageForFailureLogin;
function verifyLoginPageisDisplayed() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToBeVisible)(userName);
    });
}
exports.verifyLoginPageisDisplayed = verifyLoginPageisDisplayed;
//# sourceMappingURL=sauce-demo-login-page.js.map