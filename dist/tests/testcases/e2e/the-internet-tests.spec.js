"use strict";
/**
 * (C) VeriFlow 2025 - The Internet Tests
 * This test suite validates navigation and functionality on the-internet.herokuapp.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _PageSetup_1 = require("@PageSetup");
const setupAllure_1 = require("setup/setupAllure");
const HomePage = tslib_1.__importStar(require("@TheInternetHomePage"));
const DropdownPage = tslib_1.__importStar(require("@TheInternetDropdownPage"));
const LoginPage = tslib_1.__importStar(require("@TheInternetLoginPage"));
const CheckboxPage = tslib_1.__importStar(require("@TheInternetCheckboxPage"));
const KeypressPage = tslib_1.__importStar(require("@TheInternetKeypressPage"));
/*
 To run the tests in parallel, you can utilize the test.describe.configure() method to set the mode to 'parallel'.
 By default, the tests will run sequentially when fullyParallel: false is set in playwright.config.
 The tests will not be skipped upon encountering a failure except when the mode is set to 'serial'.
*/
_PageSetup_1.test.describe.configure({ mode: 'parallel' });
_PageSetup_1.test.beforeEach('Navigating to Home Page', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield HomePage.navigateToHomePage();
}));
_PageSetup_1.test.describe('The Internet | E2E', () => {
    (0, _PageSetup_1.test)('Dropdown test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('dropdownTest');
        yield HomePage.clickDropdownLink();
        yield DropdownPage.navigateToDropdownPage();
        yield DropdownPage.verifyDropdownPageURL();
        yield DropdownPage.selectDropdownOption(2);
        const isSelectedOption2 = yield DropdownPage.verifyDropdownOptionSelected(2);
        console.assert(isSelectedOption2, 'Dropdown selection failed for option 2');
        yield DropdownPage.selectDropdownOption(3);
        const isSelectedOption3 = yield DropdownPage.verifyDropdownOptionSelected(3);
        console.assert(isSelectedOption3, 'Dropdown selection failed for option 3');
    }));
    (0, _PageSetup_1.test)('Success Login', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('loginTest');
        yield HomePage.clickLoginPageLink();
        yield LoginPage.verifyLoginPageIsDisplayed();
        yield LoginPage.loginSuccessfully();
        yield LoginPage.verifySuccessfulLogin();
    }));
    (0, _PageSetup_1.test)('Success Logout', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('logoutTest');
        yield HomePage.clickLoginPageLink();
        yield LoginPage.loginSuccessfully();
        yield LoginPage.logout();
        yield LoginPage.verifySuccessfulLogout();
    }));
    (0, _PageSetup_1.test)('Checkbox test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('checkboxTest');
        yield HomePage.clickCheckboxesPageLink();
        yield CheckboxPage.toggleCheckbox(1);
        const isCheckbox1Checked = yield CheckboxPage.isCheckboxChecked(1);
        console.assert(isCheckbox1Checked, 'Checkbox 1 toggle failed: It should be checked');
        if (!isCheckbox1Checked) {
            throw new Error('Checkbox 1 toggle failed: Expected it to be checked, but it was not.');
        }
        yield CheckboxPage.toggleCheckbox(2);
        const isCheckbox2Checked = yield CheckboxPage.isCheckboxChecked(2);
        console.assert(!isCheckbox2Checked, 'Checkbox 2 toggle failed: It should be unchecked');
        if (isCheckbox2Checked) {
            throw new Error('Checkbox 2 toggle failed: Expected it to be unchecked, but it was still checked.');
        }
    }));
    (0, _PageSetup_1.test)('Key presses test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('keyPressTest');
        yield HomePage.clickKeyPressesPageLink();
        yield KeypressPage.clickOnTargetElement();
        yield KeypressPage.checkThatKeyPressInputIsDisplayed();
        yield KeypressPage.sendKey('W');
        const resultW = yield KeypressPage.getLastKeyPressed();
        console.assert(resultW === null || resultW === void 0 ? void 0 : resultW.includes('You entered: W'), `Expected "You entered: W", but got "${resultW}"`);
        yield KeypressPage.sendKey('A');
        const resultA = yield KeypressPage.getLastKeyPressed();
        console.assert(resultA === null || resultA === void 0 ? void 0 : resultA.includes('You entered: A'), `Expected "You entered: A", but got "${resultA}"`);
    }));
});
//# sourceMappingURL=the-internet-tests.spec.js.map