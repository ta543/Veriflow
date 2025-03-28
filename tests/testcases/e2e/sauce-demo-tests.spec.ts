/** 
 * (C) VeriFlow 2025 - Sauce Demo Tests
 * This test suite validates navigation and functionality on saucedemo.com
 */

import { test } from 'test-setup/page-setup';
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

test.beforeEach('Navigating to Home Page', async ({ page }, testInfo) => {
  await LoginPage.navigateToSauceDemoLoginPage();
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

test.describe('SauceDemo | E2E', () => {
  test('[SauceDemo][E2E][Regression] Successful login will display Products Page', async () => {
    setupAllure("sauceDemoLoginTest");
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
  });

  test('[SauceDemo][E2E][Regression] Add product to cart', async () => {
    setupAllure("sauceDemoAddToCartTest");
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    await MiniCartPage.verifyMiniCartCount('1');
  });

  test('[SauceDemo][E2E][Regression] When login is unsuccessful will not display Products Page', async () => {
    setupAllure("sauceDemoFailedLoginTest");
    await LoginPage.failureLogin();
    await LoginPage.verifyErrorMessageForFailureLogin();
    await LoginPage.verifyLoginPageisDisplayed();
    await ProductsPage.verifyProductsPageNotDisplayed();
  });
});
