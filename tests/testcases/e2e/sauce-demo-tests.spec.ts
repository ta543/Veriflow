/** 
 * (C) VeriFlow 2025 - Sauce Demo Tests
 * This test suite validates navigation and functionality on saucedemo.com
 */

import { test } from '@PageSetup';
import { setupAllure } from "@AllureMetaData";
import * as LoginPage from '@SauceDemoLoginPage';
import * as MiniCartPage from '@SauceDemoMiniCartPage';
import * as ProductsPage from '@SauceDemoProductsPage';

test.describe.parallel('SauceDemo | E2E', () => {
  test('Successful login will display Products Page', async () => {
    setupAllure("sauceDemoLoginTest");
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
  });

  test('Add product to cart', async () => {
    setupAllure("sauceDemoAddToCartTest");
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    await MiniCartPage.verifyMiniCartCount('1');
  });

  test('When login is unsuccessful will not display Products Page', async () => {
    setupAllure("sauceDemoFailedLoginTest");
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.failureLogin();
    await LoginPage.verifyErrorMessageForFailureLogin();
    await LoginPage.verifyLoginPageisDisplayed();
    await ProductsPage.verifyProductsPageNotDisplayed();
  });
});
