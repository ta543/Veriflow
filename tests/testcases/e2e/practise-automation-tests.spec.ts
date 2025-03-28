/**
 * (C) VeriFlow 2025 - Practice Automation Tests
 * This test suite validates navigation and functionality on practice-automation.com
 */

import { test } from 'test-setup/page-setup';
import { setupAllure } from "@AllureMetaData";
import * as HomePage from '@PracticeAutomationHomePage';
import * as FormFieldsPage from '@PracticeAutomationFormFieldsPage';
import * as PopupsPage from '@PracticeAutomationPopUpsPage';
import * as FileUploadPage from '@PracticeAutomationFileUploadPage';
import * as FileDownloadPage from '@PracticeAutomationFileDownloadPage';
import * as BrokenLinksPage from '@PracticeAutomationBrokenLinksPage';

/*
 To run the tests in parallel, you can utilize the test.describe.configure() method to set the mode to 'parallel'.
 By default, the tests will run sequentially when fullyParallel: false is set in playwright.config.
 The tests will not be skipped upon encountering a failure except when the mode is set to 'serial'.
*/
test.describe.configure({ mode: 'parallel' });

test.beforeEach(async ({ page }, testInfo) => {
  await page.evaluate((_name) => {
    // @ts-ignore
    window.browserstack_executor = {
      action: 'setSessionName',
      arguments: {
        name: _name,
      },
    };
  }, testInfo.title);
});

test.afterEach(async ({ page }, testInfo) => {
  // ✅ Set pass/fail status in BrowserStack dashboard
  await page.evaluate((_status) => {
    // @ts-ignore
    window.browserstack_executor = {
      action: 'setSessionStatus',
      arguments: {
        status: _status,
        reason: _status === 'passed' ? 'All assertions passed' : 'One or more assertions failed',
      },
    };
  }, testInfo.status);
});

test.describe('Practice Automation | E2E', () => {
  
  test('[PracticeAutomation][E2E][Regression] Navigate to Form Fields page', async () => {
    setupAllure('practiceAutomationFormFieldsNavigationTest');
    await HomePage.navigateToHomePage();
    await HomePage.clickFormFieldsLink();
    await FormFieldsPage.verifyFormFieldsPageURL();
  });

  test('[PracticeAutomation][E2E][Regression] Fill and submit form test', async () => {
    setupAllure('practiceAutomationFormSubmissionTest');
    await FormFieldsPage.navigateToFormFieldsPage();
    await FormFieldsPage.fillForm();
    const isFormSubmitted = await FormFieldsPage.verifyFormSubmission();
    console.assert(isFormSubmitted, 'Form submission failed');
    if (!isFormSubmitted) {
      throw new Error('Form submission failed: Expected success message but did not receive it.');
    }
  });

  test('[PracticeAutomation][E2E][Regression] Handle popups test', async () => {
    setupAllure('practiceAutomationPopupsTest');
    await HomePage.navigateToHomePage();
    await HomePage.clickPopupsLink();
    await PopupsPage.popupsPageIsDisplayed();

    await PopupsPage.clickAlertPopupButton();
    await PopupsPage.dismissAlertPopup();

    await PopupsPage.clickConfirmPopupButton();
    await PopupsPage.acceptConfirmPopup();
    await PopupsPage.verifyConfirmPopupAccepted();

    await PopupsPage.clickPromptPopupButton();
    await PopupsPage.verifyPromptPopupText();

    await PopupsPage.clickTooltipTrigger();
    await PopupsPage.verifyTooltipText();
  });

  test('[PracticeAutomation][E2E][Regression] Upload file test', async () => {
    setupAllure('practiceAutomationFileUploadTest');
    await HomePage.navigateToHomePage();
    await HomePage.clickFileUploadLink();
    await FileUploadPage.verifyFileUploadPageURL();
    await FileUploadPage.uploadFile('tests/testdata/test-files/sample.txt');
    await FileUploadPage.verifyFileUploadSuccess();
  });

  test('[PracticeAutomation][E2E][Regression] Download file test', async () => {
    setupAllure('practiceAutomationFileDownloadTest');
    await HomePage.navigateToHomePage();
    await HomePage.clickFileDownloadLink();
    await FileDownloadPage.checkThatFileDownloadPageIsDisplayed();
    await FileDownloadPage.downloadFile();
  });

  test('[PracticeAutomation][E2E][Regression] Verify broken links', async () => {
    setupAllure('practiceAutomationBrokenLinksTest');
    await HomePage.navigateToHomePage();
    await HomePage.clickBrokenLinksLink();
    await BrokenLinksPage.verifyBrokenLinksPageDisplayed();
    await BrokenLinksPage.clickBrokenLink();
    await BrokenLinksPage.verifyErrorMessage();
  });
});
