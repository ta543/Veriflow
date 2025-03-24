/** 
 * (C) VeriFlow 2025 - Sauce Demo Tests
 * This test suite validates navigation and functionality on saucedemo.com
 */

import { test } from '@PageSetup';
import { setupAllure } from "@AllureMetaData";
import * as LoginPage from '@SauceDemoLoginPage';
import * as MiniCartPage from '@SauceDemoMiniCartPage';
import * as ProductsPage from '@SauceDemoProductsPage';

/*
 To run the tests in parallel, you can utilize the test.describe.configure() method to set the mode to 'parallel'.
 By default, the tests will run sequentially when fullyParallel: false is set in playwright.config.
 The tests will not be skipped upon encountering a failure except when the mode is set to 'serial'.
*/
test.describe.configure({ mode: 'parallel' });

test.beforeEach('Navigating to Home Page', async () => {
  await LoginPage.navigateToSauceDemoLoginPage();
});

test.describe('SauceDemo | E2E', () => {
  test('Successful login will display Products Page', async () => {
    setupAllure("sauceDemoLoginTest");
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
  });

  test('Add product to cart', async () => {
    setupAllure("sauceDemoAddToCartTest");
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    await MiniCartPage.verifyMiniCartCount('1');
  });

  test('When login is unsuccessful will not display Products Page', async () => {
    setupAllure("sauceDemoFailedLoginTest");
    await LoginPage.failureLogin();
    await LoginPage.verifyErrorMessageForFailureLogin();
    await LoginPage.verifyLoginPageisDisplayed();
    await ProductsPage.verifyProductsPageNotDisplayed();
  });
});
