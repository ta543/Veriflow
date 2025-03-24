"use strict";
/**
 * (C) VeriFlow 2025 - ExpandTesting E2E Tests
 * This test suite validates navigation and functionality on practice.expandtesting.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _PageSetup_1 = require("@PageSetup");
const setupAllure_1 = require("setup/setupAllure");
const HomePage = tslib_1.__importStar(require("@ExpandTestingHomePage"));
const LoginPage = tslib_1.__importStar(require("@ExpandTestingLoginPage"));
const FormFieldsPage = tslib_1.__importStar(require("@ExpandTestingFormFieldsPage"));
const RegisterPage = tslib_1.__importStar(require("@ExpandTestingRegisterPage"));
/*
 To run the tests in parallel, you can utilize the test.describe.configure() method to set the mode to 'parallel'.
 By default, the tests will run sequentially when fullyParallel: false is set in playwright.config.
 The tests will not be skipped upon encountering a failure except when the mode is set to 'serial'.
*/
_PageSetup_1.test.describe.configure({ mode: 'parallel' });
_PageSetup_1.test.beforeEach('Navigating to Home Page', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield HomePage.navigateToHomePage();
}));
_PageSetup_1.test.describe('ExpandTesting | E2E', () => {
    (0, _PageSetup_1.test)('[Regression] Web Inputs Test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('expandTestingWebInputsTest');
        yield HomePage.navigateToWebInputPage();
        yield FormFieldsPage.closeAdIfVisible();
        yield FormFieldsPage.fillNumberField('323762');
        yield FormFieldsPage.fillTextField('uhdwhudw');
        yield FormFieldsPage.fillPasswordField('dhuw8723');
        yield FormFieldsPage.fillDateField('2025-02-28');
        yield FormFieldsPage.clickDisplayInputsButton();
        yield FormFieldsPage.verifyOutputNumberVisible();
    }));
    (0, _PageSetup_1.test)('Login Test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('expandTestingLoginTest');
        yield HomePage.navigateToLoginPage();
        yield LoginPage.fillLoginFormWithValidCredentials();
        yield LoginPage.submitLoginForm();
        yield LoginPage.verifySuccessfulLogin();
    }));
    (0, _PageSetup_1.test)('Failed Register Test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('expandTestingFailedRegisterTest');
        yield HomePage.navigateToRegisterPage();
        yield RegisterPage.fillRegisterFormWithInvalidCredentials();
        yield RegisterPage.submitRegisterForm();
        yield RegisterPage.verifyRegistrationFailed();
    }));
});
//# sourceMappingURL=expandtesting-tests.spec.js.map