/**
 * (C) VeriFlow 2025 - Automation Exercise Tests
 * This test suite validates navigation and functionality on automationexercise.com
 */

<<<<<<< HEAD
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
  test('Search product test', async () => {
    setupAllure('automationExerciseSearchProductTest');
=======
import { test } from '@PageSetup';
import { setupAllure } from '@AllureMetaData';
import * as HomePage from '../../pages/e2e-testing/automation-exercise-pages/home-page';
import * as ProductsPage from '../../pages/e2e-testing/automation-exercise-pages/products-page';
import * as CartPage from '../../pages/e2e-testing/automation-exercise-pages/cart-page';
import * as ContactUsPage from '../../pages/e2e-testing/automation-exercise-pages/contact-us-page';

test.describe('Automation Exercise App Tests', () => {
  test('Search product test', async () => {
    setupAllure('automationExerciseSearchProductTest');
    await HomePage.navigateToHomePage();
>>>>>>> 123b506b8a72c0fa96073a8b882d639a13550deb
    await HomePage.clickProductsLink();
    await ProductsPage.verifyProductsPageURL();
    await ProductsPage.searchForProduct('T-shirt');
    await ProductsPage.verifytShirtSearchDisplayed();
  });

  test('Add product to cart test', async () => {
    setupAllure('automationExerciseAddToCartTest');
<<<<<<< HEAD
=======
    await HomePage.navigateToHomePage();
>>>>>>> 123b506b8a72c0fa96073a8b882d639a13550deb
    await HomePage.clickProductsLink();
    await ProductsPage.verifyProductsPageURL();
    await ProductsPage.searchForProduct('T-shirt');
    await ProductsPage.clickFirstAddToCartButton();
    await ProductsPage.verifyProductAddedPopup();
    await ProductsPage.clickViewCartButton();
    await CartPage.verifyCartPageURL();
  });

  test('Contact Us form test', async () => {
    setupAllure('automationExerciseContactUsTest');
<<<<<<< HEAD
=======
    await HomePage.navigateToHomePage();
>>>>>>> 123b506b8a72c0fa96073a8b882d639a13550deb
    await ContactUsPage.navigateToContactUsPage();
    await ContactUsPage.verifyContactUsPageURL();
    await ContactUsPage.fillContactForm();
    await ContactUsPage.submitContactForm();
    await ContactUsPage.returnToHomePage();
  });
});
