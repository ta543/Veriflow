/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code LoginPage}.
 *
 * VeriFlow Test Automation - The Internet | LoginPage
 */

import { getLocatorByRole, getLocatorByText, getLocatorByXPath } from '@LocatorUtils';
import { click } from '@ActionUtils';
import { FormFieldsCredentials } from '../../../testdata/testdata/the-internet-test-data';
import { expectElementToBeVisible, expectElementToContainText } from '@AssertUtils';

const usernameInput = () => getLocatorByRole('textbox', { name: 'Username' });
const passwordInput = () => getLocatorByRole('textbox', { name: 'Password' });
const loginButton = () => getLocatorByRole('button', { name: 'Login' });
const logoutButton = () => getLocatorByText('Logout', { exact: true });
const successLoginMessage = () => getLocatorByText('You logged into a secure area!');
const successLogoutMessage = () => getLocatorByText('You logged out of the secure area!');
const loginPageHeader = () => getLocatorByXPath("//h2[normalize-space()='Login Page']");
const errorMessage = `//*[contains(@class,'error-message')]`;
// const logoutMessage = () => getLocatorByXPath('//div[@id="flash"]');

export async function loginSuccessfully() {
  await usernameInput().fill(FormFieldsCredentials.username);
  await passwordInput().fill(FormFieldsCredentials.password);
  await loginButton().click();
}

export async function isLoginSuccessful(): Promise<boolean> {
  return await successMessage().isVisible();
}

export async function verifyErrorMessageForFailureLogin() {
  await expectElementToBeVisible(errorMessage);
}

export async function logout() {
  await click(logoutButton());
}

export async function verifyLoginPageIsDisplayed() {
  await loginPageHeader().waitFor({ state: 'visible', timeout: 5000 });
}

// export async function isLogoutSuccessful(): Promise<boolean> {
//   const isMessageVisible = await logoutMessage().isVisible();
//   if (!isMessageVisible) {
//     return false;
//   }
//   const messageText = await logoutMessage().textContent();
//   return messageText?.includes('You logged out of the secure area!') || false;
// }

export async function verifySuccessfulLogin() {
    await expectElementToContainText(successLoginMessage(), 'You logged into a secure area!');
}

export async function verifySuccessfulLogout() {
  await expectElementToContainText(successLogoutMessage(), 'You logged out of the secure area!');
}
