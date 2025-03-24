/**
 * (C) VeriFlow 2025
 *
 * The purpose of this class is to manage all methods that will handle the execution of test steps
 * on {@code KeyPressPage}.
 *
 * VeriFlow Test Automation - The Internet | KeyPressPage
 */

import { getLocatorByRole } from '@LocatorUtils';

const keyPressInput = () => getLocatorByRole('textbox');
const resultText = () => getLocatorByRole('status');
const targetElement = () => getLocatorByRole('textbox');

export async function clickOnTargetElement() {
  await targetElement().waitFor({ state: 'visible', timeout: 5000 });
  await targetElement().click();
}

export async function checkThatKeyPressInputIsDisplayed() {
  const inputField = keyPressInput();
  await inputField.waitFor({ state: 'visible', timeout: 5000 });
  console.log('Key Press Input is displayed and ready for interaction');
}

export async function sendKey(key: string) {
  const inputField = keyPressInput();
  await inputField.focus(); // Ensure the input field is focused
  await inputField.press(key);
}

export async function getLastKeyPressed(): Promise<string | null> {
  await resultText().waitFor({ state: 'visible', timeout: 5000 });
  return await resultText().textContent();
}
