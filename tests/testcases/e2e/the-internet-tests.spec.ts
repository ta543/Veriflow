/**
 * (C) VeriFlow 2025 - The Internet Tests
 * This test suite validates navigation and functionality on the-internet.herokuapp.com
 */

<<<<<<< HEAD
import { test } from 'test-setup/page-setup';
import { setupAllure } from '@AllureMetaData';import * as HomePage from '@TheInternetHomePage';
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
=======
import { test } from '@PageSetup';
import { setupAllure } from '@AllureMetaData';
import * as HomePage from '../../pages/e2e-testing/the-internet-pages/home-page';
import * as DropdownPage from '../../pages/e2e-testing/the-internet-pages/dropdown-page';
import * as LoginPage from '../../pages/e2e-testing/the-internet-pages/login-page';
import * as CheckboxPage from '../../pages/e2e-testing/the-internet-pages/checkbox-page';
import * as KeypressPage from '../../pages/e2e-testing/the-internet-pages/keypress-page';

test.describe('The Internet App Tests', () => {
  test('Dropdown test', async () => {
    setupAllure('dropdownTest');
    await HomePage.navigateToHomePage();
>>>>>>> 123b506b8a72c0fa96073a8b882d639a13550deb
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

<<<<<<< HEAD
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
=======
  test('Login test - successful login', async () => {
    setupAllure('loginTest');
    await HomePage.navigateToHomePage();
    await HomePage.clickLoginPageLink();
    await LoginPage.verifyLoginPageIsDisplayed();
    await LoginPage.loginSuccessfully();
    const isAuthenticated = await LoginPage.isLoginSuccessful();
    console.assert(isAuthenticated, 'Login failed: User was not authenticated successfully');
    if (!isAuthenticated) {
      throw new Error('Login failed: Expected the user to be authenticated, but it was not.');
    }
  });

  test('Logout test - successful logout', async () => {
    setupAllure('logoutTest');
    await HomePage.navigateToHomePage();
    await HomePage.clickLoginPageLink();
    await LoginPage.loginSuccessfully();
    await LoginPage.logout();
    const isLoggedOut = await LoginPage.isLogoutSuccessful();
    console.assert(isLoggedOut, 'Logout failed: User is still logged in');
    if (!isLoggedOut) {
      throw new Error('Logout failed: Expected the user to be logged out, but they were not.');
    }
    await LoginPage.verifyLoginPageIsDisplayed();
>>>>>>> 123b506b8a72c0fa96073a8b882d639a13550deb
  });

  test('Checkbox test', async () => {
    setupAllure('checkboxTest');
<<<<<<< HEAD
=======
    await HomePage.navigateToHomePage();
>>>>>>> 123b506b8a72c0fa96073a8b882d639a13550deb
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
<<<<<<< HEAD
=======
    await HomePage.navigateToHomePage();
>>>>>>> 123b506b8a72c0fa96073a8b882d639a13550deb
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
