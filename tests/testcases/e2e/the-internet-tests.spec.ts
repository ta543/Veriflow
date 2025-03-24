/**
 * (C) VeriFlow 2025 - The Internet Tests
 * This test suite validates navigation and functionality on the-internet.herokuapp.com
 */

import { test } from 'test-setup/page-setup';
import { setupAllure } from '@AllureMetaData';
import * as HomePage from '@TheInternetHomePage';
import * as DropdownPage from '@TheInternetDropdownPage';
import * as LoginPage from '@TheInternetLoginPage';
import * as CheckboxPage from '@TheInternetCheckboxPage';
import * as KeypressPage from '@TheInternetKeypressPage';

/*
 To run the tests in parallel, you can utilize the test.describe.configure() method to set the mode to 'parallel'.
 By default, the tests will run sequentially when fullyParallel: false is set in playwright.config.
 The tests will not be skipped upon encountering a failure except when the mode is set to 'serial'.
*/
test.describe.configure({ mode: 'parallel' });

test.beforeEach('Navigating to Home Page', async () => {
  await HomePage.navigateToHomePage();
});

test.describe('The Internet | E2E', () => {
  test('Dropdown test', async () => {
    setupAllure('dropdownTest');
    await HomePage.clickDropdownLink();
    await DropdownPage.navigateToDropdownPage();
    await DropdownPage.verifyDropdownPageURL();
    await DropdownPage.selectDropdownOption(2);
    const isSelectedOption2 = await DropdownPage.verifyDropdownOptionSelected(2);
    console.assert(isSelectedOption2, 'Dropdown selection failed for option 2');
    await DropdownPage.selectDropdownOption(3);
    const isSelectedOption3 = await DropdownPage.verifyDropdownOptionSelected(3);
    console.assert(isSelectedOption3, 'Dropdown selection failed for option 3');
  });

  test('Success Login', async () => {
    setupAllure('loginTest');
    await HomePage.clickLoginPageLink();
    await LoginPage.verifyLoginPageIsDisplayed();
    await LoginPage.loginSuccessfully();
    await LoginPage.verifySuccessfulLogin();
  });

  test('Success Logout', async () => {
    setupAllure('logoutTest');
    await HomePage.clickLoginPageLink();
    await LoginPage.loginSuccessfully();
    await LoginPage.logout();
    await LoginPage.verifySuccessfulLogout();
  });

  test('Checkbox test', async () => {
    setupAllure('checkboxTest');
    await HomePage.clickCheckboxesPageLink();

    await CheckboxPage.toggleCheckbox(1);
    const isCheckbox1Checked = await CheckboxPage.isCheckboxChecked(1);
    console.assert(isCheckbox1Checked, 'Checkbox 1 toggle failed: It should be checked');
    if (!isCheckbox1Checked) {
      throw new Error('Checkbox 1 toggle failed: Expected it to be checked, but it was not.');
    }
    await CheckboxPage.toggleCheckbox(2);
    const isCheckbox2Checked = await CheckboxPage.isCheckboxChecked(2);
    console.assert(!isCheckbox2Checked, 'Checkbox 2 toggle failed: It should be unchecked');
    if (isCheckbox2Checked) {
      throw new Error('Checkbox 2 toggle failed: Expected it to be unchecked, but it was still checked.');
    }
  });

  test('Key presses test', async () => {
    setupAllure('keyPressTest');
    await HomePage.clickKeyPressesPageLink();
    await KeypressPage.clickOnTargetElement();
    await KeypressPage.checkThatKeyPressInputIsDisplayed();
    await KeypressPage.sendKey('W');
    const resultW = await KeypressPage.getLastKeyPressed();
    console.assert(resultW?.includes('You entered: W'), `Expected "You entered: W", but got "${resultW}"`);
    await KeypressPage.sendKey('A');
    const resultA = await KeypressPage.getLastKeyPressed();
    console.assert(resultA?.includes('You entered: A'), `Expected "You entered: A", but got "${resultA}"`);
  });
});
