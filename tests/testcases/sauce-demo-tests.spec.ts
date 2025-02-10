/**
 * (C) VeriFlow 2025
 *
 * This test suite validates navigation and functionality across multiple pages
 * including Dropdown, Login, Checkbox, and Key Press pages.
 *
 * VeriFlow Test Automation - The Internet Tests
 */

import { test } from '../../src/tobias-playwright/setup/page-setup';
import * as LoginPage from '../pages/sauce-demo-login-page';
import * as MiniCart from '../pages/sauce-demo-mini-cart';
import * as ProductsPage from '../pages/sauce-demo-products-page';

test.describe('Saucedemo tests for successful, unsuccessful logins and add product to cart', () => {
  test('Saucedemo tests - Successful login will display Products Page', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    //verifying products page is displayed on successful login
    await ProductsPage.verifyProductsPageDisplayed();
  });

  test('Saucedemo test - Add product to cart', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    //verifying mini cart count is updated to 1
    await MiniCart.verifyMiniCartCount('1');
  });

  test('Saucedemo test - When login is unsuccessful will not display Products Page', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.failureLogin();
    await LoginPage.verifyErrorMessageForFailureLogin();
    //verifying Login is still displayed
    await LoginPage.verifyLoginPageisDisplayed();
    //verifying Products Page is not displayed
    await ProductsPage.verifyProductsPageNotDisplayed();
  });
});

// This is the preferred way of writing a test. It is more readable and easier to maintain. It is also easier to write tests in this style.
