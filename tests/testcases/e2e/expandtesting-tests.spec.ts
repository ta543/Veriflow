/**
 * (C) VeriFlow 2025 - ExpandTesting E2E Tests
 * This test suite validates navigation and functionality on practice.expandtesting.com
 */

import { test } from '@PageSetup';
import { setupAllure } from "@AllureMetaData";
import * as HomePage from '@ExpandTestingHomePage';
import * as LoginPage from '@ExpandTestingLoginPage';
import * as FormFieldsPage from '@ExpandTestingFormFieldsPage';
import * as RegisterPage from '@ExpandTestingRegisterPage';

test.describe.parallel('ExpandTesting | E2E', () => {
  test('Web Inputs Test', async () => {
    setupAllure('expandTestingWebInputsTest');
    await HomePage.navigateToHomePage();
    await HomePage.navigateToWebInputPage();
    await FormFieldsPage.closeAdIfVisible();
    await FormFieldsPage.fillNumberField('323762');
    await FormFieldsPage.fillTextField('uhdwhudw');
    await FormFieldsPage.fillPasswordField('dhuw8723');
    await FormFieldsPage.fillDateField('2025-02-28');
    await FormFieldsPage.clickDisplayInputsButton();
    await FormFieldsPage.verifyOutputNumberVisible();
  });

  test('Login Test', async () => {
    setupAllure('expandTestingLoginTest');
    await HomePage.navigateToHomePage();
    await HomePage.navigateToLoginPage();
    await LoginPage.fillLoginFormWithValidCredentials();
    await LoginPage.submitLoginForm();
    await LoginPage.verifySuccessfulLogin();
  });

  test('Failed Register Test', async () => {
    setupAllure('expandTestingFailedRegisterTest');
    await HomePage.navigateToHomePage();
    await HomePage.navigateToRegisterPage();
    await RegisterPage.fillRegisterFormWithInvalidCredentials();
    await RegisterPage.submitRegisterForm();
    await RegisterPage.verifyRegistrationFailed();
  });
});
