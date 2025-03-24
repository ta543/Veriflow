/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code FormFieldsPage}.
 *
 * VeriFlow Test Automation - ExpandTesting | FormFieldsPage
 */

import { click, fill } from '@ActionUtils';
import { expectElementToHaveText } from '@AssertUtils';
import { getPage } from '@PageUtils';
import { getLocator, getLocatorByRole } from '@LocatorUtils';

// Locators

/**
 * Returns the first footer button inside the first card.
 */
const firstCardFooterButton = () =>
  getLocator('.card-footer > div > .btn').first();

/**
 * Returns the number input field.
 */
const inputNumberField = () =>
  getLocatorByRole('spinbutton', { name: 'Input: Number' });

/**
 * Returns the text input field.
 */
const inputTextField = () =>
  getLocatorByRole('textbox', { name: 'Input: Text' });

/**
 * Returns the password input field.
 */
const inputPasswordField = () =>
  getLocatorByRole('textbox', { name: 'Input: Password' });

/**
 * Returns the date input field.
 */
const inputDateField = () =>
  getLocatorByRole('textbox', { name: 'Input: Date' });

/**
 * Returns the "Display Inputs" button.
 */
const displayInputsButton = () =>
  getLocatorByRole('button', { name: 'Display Inputs' });

/**
 * Returns the label displaying the output number.
 */
const outputNumberLabel = () =>
  getLocator('text=Output: Number');

// Actions

/**
 * Clicks the first footer button in the card section.
 */
export async function clickFirstCardFooterButton() {
  await click(firstCardFooterButton());
}

/**
 * Closes the advertisement iframe if it is visible.
 */
export async function closeAdIfVisible() {
  const adFrame = getPage().frameLocator('iframe[name="aswift_9"]');
  const closeButton = adFrame.getByRole('button', { name: 'Close ad' });

  if (await closeButton.isVisible({ timeout: 2000 })) {
    await closeButton.click();
  }
}

/**
 * Fills the number input field with a given value.
 * @param {string} value - The value to enter.
 */
export async function fillNumberField(value: string) {
  await click(inputNumberField());
  await fill(inputNumberField(), value);
}

/**
 * Fills the text input field with a given value.
 * @param {string} value - The value to enter.
 */
export async function fillTextField(value: string) {
  await click(inputTextField());
  await fill(inputTextField(), value);
}

/**
 * Fills the password input field with a given value.
 * @param {string} value - The value to enter.
 */
export async function fillPasswordField(value: string) {
  await click(inputPasswordField());
  await fill(inputPasswordField(), value);
}

/**
 * Fills the date input field with a given value.
 * @param {string} value - The value to enter.
 */
export async function fillDateField(value: string) {
  await fill(inputDateField(), value);
}

/**
 * Clicks the "Display Inputs" button to show the output.
 */
export async function clickDisplayInputsButton() {
  await click(displayInputsButton());
}

/**
 * Verifies that the output number label is visible and has the expected text.
 */
export async function verifyOutputNumberVisible() {
  await expectElementToHaveText(outputNumberLabel(), 'Output: Number');
}
