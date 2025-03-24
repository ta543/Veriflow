/** 
 * (C) VeriFlow 2025 - Sauce Demo Tests
 * This test suite validates navigation and functionality on saucedemo.com
 */

<<<<<<< HEAD
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

test.beforeEach('Navigating to Home Page', async () => {
  await LoginPage.navigateToSauceDemoLoginPage();
});

test.describe('SauceDemo | E2E', () => {
  test('Successful login will display Products Page', async () => {
    setupAllure("sauceDemoLoginTest");
=======
import { test } from '@PageSetup';
import { setupAllure } from "@AllureMetaData";
import * as LoginPage from '../../pages/e2e-testing/sauce-demo-pages/sauce-demo-login-page';
import * as MiniCart from '../../pages/e2e-testing/sauce-demo-pages/sauce-demo-mini-cart';
import * as ProductsPage from '../../pages/e2e-testing/sauce-demo-pages/sauce-demo-products-page';

test.describe('Saucedemo tests for successful, unsuccessful logins and add product to cart', () => {
  test('Saucedemo tests - Successful login will display Products Page', async () => {
    setupAllure("sauceDemoLoginTest");
    await LoginPage.navigateToSauceDemoLoginPage();
>>>>>>> 123b506b8a72c0fa96073a8b882d639a13550deb
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
  });

<<<<<<< HEAD
  test('Add product to cart', async () => {
    setupAllure("sauceDemoAddToCartTest");
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    await MiniCartPage.verifyMiniCartCount('1');
  });

  test('When login is unsuccessful will not display Products Page', async () => {
    setupAllure("sauceDemoFailedLoginTest");
=======
  test('Saucedemo test - Add product to cart', async () => {
    setupAllure("sauceDemoAddToCartTest");
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    await MiniCart.verifyMiniCartCount('1');
  });

  test('Saucedemo test - When login is unsuccessful will not display Products Page', async () => {
    setupAllure("sauceDemoFailedLoginTest");
    await LoginPage.navigateToSauceDemoLoginPage();
>>>>>>> 123b506b8a72c0fa96073a8b882d639a13550deb
    await LoginPage.failureLogin();
    await LoginPage.verifyErrorMessageForFailureLogin();
    await LoginPage.verifyLoginPageisDisplayed();
    await ProductsPage.verifyProductsPageNotDisplayed();
  });
});
