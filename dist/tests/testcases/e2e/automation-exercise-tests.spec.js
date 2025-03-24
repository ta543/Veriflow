"use strict";
/**
 * (C) VeriFlow 2025 - Automation Exercise Tests
 * This test suite validates navigation and functionality on automationexercise.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _PageSetup_1 = require("@PageSetup");
const setupAllure_1 = require("setup/setupAllure");
const HomePage = tslib_1.__importStar(require("@AutomatioExerciseHomePage"));
const ProductsPage = tslib_1.__importStar(require("@AutomatioExerciseProductsPage"));
const CartPage = tslib_1.__importStar(require("@AutomatioExerciseCartPage"));
const ContactUsPage = tslib_1.__importStar(require("@AutomatioExerciseContactUsPage"));
/*
 To run the tests in parallel, you can utilize the test.describe.configure() method to set the mode to 'parallel'.
 By default, the tests will run sequentially when fullyParallel: false is set in playwright.config.
 The tests will not be skipped upon encountering a failure except when the mode is set to 'serial'.
*/
_PageSetup_1.test.describe.configure({ mode: 'parallel' });
_PageSetup_1.test.beforeEach('Navigating to Home Page', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield HomePage.navigateToHomePage();
}));
_PageSetup_1.test.describe('Automation Exercise | E2E', () => {
    (0, _PageSetup_1.test)('Search product test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('automationExerciseSearchProductTest');
        yield HomePage.clickProductsLink();
        yield ProductsPage.verifyProductsPageURL();
        yield ProductsPage.searchForProduct('T-shirt');
        yield ProductsPage.verifytShirtSearchDisplayed();
    }));
    (0, _PageSetup_1.test)('Add product to cart test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('automationExerciseAddToCartTest');
        yield HomePage.clickProductsLink();
        yield ProductsPage.verifyProductsPageURL();
        yield ProductsPage.searchForProduct('T-shirt');
        yield ProductsPage.clickFirstAddToCartButton();
        yield ProductsPage.verifyProductAddedPopup();
        yield ProductsPage.clickViewCartButton();
        yield CartPage.verifyCartPageURL();
    }));
    (0, _PageSetup_1.test)('Contact Us form test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('automationExerciseContactUsTest');
        yield ContactUsPage.navigateToContactUsPage();
        yield ContactUsPage.verifyContactUsPageURL();
        yield ContactUsPage.fillContactForm();
        yield ContactUsPage.submitContactForm();
        yield ContactUsPage.returnToHomePage();
    }));
});
//# sourceMappingURL=automation-exercise-tests.spec.js.map