/**
 * (C) VeriFlow 2025 - ExpandTesting E2E Tests
 * This test suite validates navigation and functionality on practice.expandtesting.com
 */

import { test } from 'test-setup/page-setup';
import { setupAllure } from "@AllureMetaData";
import * as HomePage from '@ExpandTestingHomePage';
import * as LoginPage from '@ExpandTestingLoginPage';
import * as FormFieldsPage from '@ExpandTestingFormFieldsPage';
import * as RegisterPage from '@ExpandTestingRegisterPage';

/*
 To run the tests in parallel, you can utilize the test.describe.configure() method to set the mode to 'parallel'.
 By default, the tests will run sequentially when fullyParallel: false is set in playwright.config.
 The tests will not be skipped upon encountering a failure except when the mode is set to 'serial'.
*/
test.describe.configure({ mode: 'parallel' });

test.beforeEach('Navigating to Home Page', async () => {
  await HomePage.navigateToHomePage();
});

test.describe('ExpandTesting | E2E', () => {
  test('[ExpandTesting][E2E][Regression] Web Inputs Test', async () => {
    setupAllure('expandTestingWebInputsTest');
    await HomePage.navigateToWebInputPage();
    await FormFieldsPage.closeAdIfVisible();
    await FormFieldsPage.fillNumberField('323762');
    await FormFieldsPage.fillTextField('uhdwhudw');
    await FormFieldsPage.fillPasswordField('dhuw8723');
    await FormFieldsPage.fillDateField('2025-02-28');
    await FormFieldsPage.clickDisplayInputsButton();
    await FormFieldsPage.verifyOutputNumberVisible();
  });

  test('[ExpandTesting][E2E][Regression] Login Test', async () => {
    setupAllure('expandTestingLoginTest');
    await HomePage.navigateToLoginPage();
    await LoginPage.fillLoginFormWithValidCredentials();
    await LoginPage.submitLoginForm();
    await LoginPage.verifySuccessfulLogin();
  });

  test('[ExpandTesting][E2E][Regression] Failed Register Test', async () => {
    setupAllure('expandTestingFailedRegisterTest');
    await HomePage.navigateToRegisterPage();
    await RegisterPage.fillRegisterFormWithInvalidCredentials();
    await RegisterPage.submitRegisterForm();
    await RegisterPage.verifyRegistrationFailed();
  });
});
