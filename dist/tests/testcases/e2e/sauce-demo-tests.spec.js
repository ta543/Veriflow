"use strict";
/**
 * (C) VeriFlow 2025 - Sauce Demo Tests
 * This test suite validates navigation and functionality on saucedemo.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _PageSetup_1 = require("@PageSetup");
const setupAllure_1 = require("setup/setupAllure");
const LoginPage = tslib_1.__importStar(require("@SauceDemoLoginPage"));
const MiniCartPage = tslib_1.__importStar(require("@SauceDemoMiniCartPage"));
const ProductsPage = tslib_1.__importStar(require("@SauceDemoProductsPage"));
/*
 To run the tests in parallel, you can utilize the test.describe.configure() method to set the mode to 'parallel'.
 By default, the tests will run sequentially when fullyParallel: false is set in playwright.config.
 The tests will not be skipped upon encountering a failure except when the mode is set to 'serial'.
*/
_PageSetup_1.test.describe.configure({ mode: 'parallel' });
_PageSetup_1.test.beforeEach('Navigating to Home Page', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield LoginPage.navigateToSauceDemoLoginPage();
}));
_PageSetup_1.test.describe('SauceDemo | E2E', () => {
    (0, _PageSetup_1.test)('Successful login will display Products Page', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)("sauceDemoLoginTest");
        yield LoginPage.logInSuccessfully();
        yield ProductsPage.verifyProductsPageDisplayed();
    }));
    (0, _PageSetup_1.test)('Add product to cart', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)("sauceDemoAddToCartTest");
        yield LoginPage.logInSuccessfully();
        yield ProductsPage.verifyProductsPageDisplayed();
        yield ProductsPage.addToCartByProductNumber(1);
        yield MiniCartPage.verifyMiniCartCount('1');
    }));
    (0, _PageSetup_1.test)('When login is unsuccessful will not display Products Page', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)("sauceDemoFailedLoginTest");
        yield LoginPage.failureLogin();
        yield LoginPage.verifyErrorMessageForFailureLogin();
        yield LoginPage.verifyLoginPageisDisplayed();
        yield ProductsPage.verifyProductsPageNotDisplayed();
    }));
});
//# sourceMappingURL=sauce-demo-tests.spec.js.map