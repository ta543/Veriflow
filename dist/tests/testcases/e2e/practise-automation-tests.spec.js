"use strict";
/**
 * (C) VeriFlow 2025 - Practice Automation Tests
 * This test suite validates navigation and functionality on practice-automation.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _PageSetup_1 = require("@PageSetup");
const setupAllure_1 = require("setup/setupAllure");
const HomePage = tslib_1.__importStar(require("@PracticeAutomationHomePage"));
const FormFieldsPage = tslib_1.__importStar(require("@PracticeAutomationFormFieldsPage"));
const PopupsPage = tslib_1.__importStar(require("@PracticeAutomationPopUpsPage"));
const FileUploadPage = tslib_1.__importStar(require("@PracticeAutomationFileUploadPage"));
const FileDownloadPage = tslib_1.__importStar(require("@PracticeAutomationFileDownloadPage"));
const BrokenLinksPage = tslib_1.__importStar(require("@PracticeAutomationBrokenLinksPage"));
/*
 To run the tests in parallel, you can utilize the test.describe.configure() method to set the mode to 'parallel'.
 By default, the tests will run sequentially when fullyParallel: false is set in playwright.config.
 The tests will not be skipped upon encountering a failure except when the mode is set to 'serial'.
*/
_PageSetup_1.test.describe.configure({ mode: 'parallel' });
_PageSetup_1.test.describe('Practice Automation | E2E', () => {
    (0, _PageSetup_1.test)('Navigate to Form Fields page', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('practiceAutomationFormFieldsNavigationTest');
        yield HomePage.navigateToHomePage();
        yield HomePage.clickFormFieldsLink();
        yield FormFieldsPage.verifyFormFieldsPageURL();
    }));
    (0, _PageSetup_1.test)('Fill and submit form test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('practiceAutomationFormSubmissionTest');
        yield FormFieldsPage.navigateToFormFieldsPage();
        yield FormFieldsPage.fillForm();
        const isFormSubmitted = yield FormFieldsPage.verifyFormSubmission();
        console.assert(isFormSubmitted, 'Form submission failed');
        if (!isFormSubmitted) {
            throw new Error('Form submission failed: Expected success message but did not receive it.');
        }
    }));
    (0, _PageSetup_1.test)('Handle popups test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('practiceAutomationPopupsTest');
        yield HomePage.navigateToHomePage();
        yield HomePage.clickPopupsLink();
        yield PopupsPage.popupsPageIsDisplayed();
        yield PopupsPage.clickAlertPopupButton();
        yield PopupsPage.dismissAlertPopup();
        yield PopupsPage.clickConfirmPopupButton();
        yield PopupsPage.acceptConfirmPopup();
        yield PopupsPage.verifyConfirmPopupAccepted();
        yield PopupsPage.clickPromptPopupButton();
        yield PopupsPage.verifyPromptPopupText();
        yield PopupsPage.clickTooltipTrigger();
        yield PopupsPage.verifyTooltipText();
    }));
    (0, _PageSetup_1.test)('Upload file test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('practiceAutomationFileUploadTest');
        yield HomePage.navigateToHomePage();
        yield HomePage.clickFileUploadLink();
        yield FileUploadPage.verifyFileUploadPageURL();
        yield FileUploadPage.uploadFile('tests/test-files/sample.txt');
        yield FileUploadPage.verifyFileUploadSuccess();
    }));
    (0, _PageSetup_1.test)('[Regression] Download file test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('practiceAutomationFileDownloadTest');
        yield HomePage.navigateToHomePage();
        yield HomePage.clickFileDownloadLink();
        yield FileDownloadPage.checkThatFileDownloadPageIsDisplayed();
        yield FileDownloadPage.downloadFile();
    }));
    (0, _PageSetup_1.test)('Verify broken links', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('practiceAutomationBrokenLinksTest');
        yield HomePage.navigateToHomePage();
        yield HomePage.clickBrokenLinksLink();
        yield BrokenLinksPage.verifyBrokenLinksPageDisplayed();
        yield BrokenLinksPage.clickBrokenLink();
        yield BrokenLinksPage.verifyErrorMessage();
    }));
});
//# sourceMappingURL=practise-automation-tests.spec.js.map