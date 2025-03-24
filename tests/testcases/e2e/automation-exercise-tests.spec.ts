/**
 * (C) VeriFlow 2025 - Automation Exercise Tests
 * This test suite validates navigation and functionality on automationexercise.com
 */

import { test } from 'test-setup/page-setup';
import { setupAllure } from '@AllureMetaData';import * as HomePage from '@AutomatioExerciseHomePage';
import * as ProductsPage from '@AutomatioExerciseProductsPage';
import * as CartPage from '@AutomatioExerciseCartPage';
import * as ContactUsPage from '@AutomatioExerciseContactUsPage';

/*
 To run the tests in parallel, you can utilize the test.describe.configure() method to set the mode to 'parallel'.
 By default, the tests will run sequentially when fullyParallel: false is set in playwright.config.
 The tests will not be skipped upon encountering a failure except when the mode is set to 'serial'.
*/
test.describe.configure({ mode: 'parallel' });

test.beforeEach('Navigating to Home Page', async () => {
  await HomePage.navigateToHomePage();
});

test.describe('Automation Exercise | E2E', () => {
  test('[AutomationExercise][E2E][Regression] Search product test', async () => {
    setupAllure('automationExerciseSearchProductTest');
    await HomePage.clickProductsLink();
    await ProductsPage.verifyProductsPageURL();
    await ProductsPage.searchForProduct('T-shirt');
    await ProductsPage.verifytShirtSearchDisplayed();
  });

  test('[AutomationExercise][E2E][Regression] Add product to cart test', async () => {
    setupAllure('automationExerciseAddToCartTest');
    await HomePage.clickProductsLink();
    await ProductsPage.verifyProductsPageURL();
    await ProductsPage.searchForProduct('T-shirt');
    await ProductsPage.clickFirstAddToCartButton();
    await ProductsPage.verifyProductAddedPopup();
    await ProductsPage.clickViewCartButton();
    await CartPage.verifyCartPageURL();
  });

  test('[AutomationExercise][E2E][Regression] Contact Us form test', async () => {
    setupAllure('automationExerciseContactUsTest');
    await ContactUsPage.navigateToContactUsPage();
    await ContactUsPage.verifyContactUsPageURL();
    await ContactUsPage.fillContactForm();
    await ContactUsPage.submitContactForm();
    await ContactUsPage.returnToHomePage();
  });
});
