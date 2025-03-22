/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code FormFieldsPage}.
 *
 * VeriFlow Test Automation - ExpandTesting | FormFieldsPage
 */

import { click, fill, wait } from '@ActionUtils';
import { expectElementToHaveText } from '@AssertUtils';
import { getPage } from '@PageUtils';
import { getLocator, getLocatorByText, getLocatorByRole } from '@LocatorUtils';

// Locators
const firstCardFooterButton = () => getLocator('.card-footer > div > .btn').first();
const adIframe = 'iframe[name="aswift_9"]';
const closeAdButton = () => getLocatorByRole('button', { name: 'Close ad' });
const inputNumberField = () => getLocatorByRole('spinbutton', { name: 'Input: Number' });
const inputTextField = () => getLocatorByRole('textbox', { name: 'Input: Text' });
const inputPasswordField = () => getLocatorByRole('textbox', { name: 'Input: Password' });
const inputDateField = () => getLocatorByRole('textbox', { name: 'Input: Date' });
const displayInputsButton = () => getLocatorByRole('button', { name: 'Display Inputs' });
const outputNumberLabel = () => getLocator('text=Output: Number');

// Methods
export async function clickFirstCardFooterButton() {
  await click(firstCardFooterButton());
}

export async function closeAdIfVisible() {
  const adFrame = getPage().frameLocator('iframe[name="aswift_9"]');
  const closeButton = adFrame.getByRole('button', { name: 'Close ad' });

  if (await closeButton.isVisible({ timeout: 2000 })) {
    await closeButton.click();
  }
}

export async function fillNumberField(value: string) {
  await click(inputNumberField());
  await fill(inputNumberField(), value);
}

export async function fillTextField(value: string) {
  await click(inputTextField());
  await fill(inputTextField(), value);
}

export async function fillPasswordField(value: string) {
  await click(inputPasswordField());
  await fill(inputPasswordField(), value);
}

export async function fillDateField(value: string) {
  await fill(inputDateField(), value);
}

export async function clickDisplayInputsButton() {
  await click(displayInputsButton());
}

export async function verifyOutputNumberVisible() {
  await expectElementToHaveText(outputNumberLabel(), 'Output: Number');
}

