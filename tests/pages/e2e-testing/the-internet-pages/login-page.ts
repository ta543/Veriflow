/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code LoginPage}.
 *
 * VeriFlow Test Automation - The Internet | LoginPage
 */

import {
  getLocatorByRole,
  getLocatorByText,
} from '@LocatorUtils';
import { click } from '@ActionUtils';
import { FormFieldsCredentials } from '@TestDataTheInternet';
import { expectElementToBeVisible } from '@AssertUtils';

const usernameInput = () => getLocatorByRole('textbox', { name: 'Username' });
const passwordInput = () => getLocatorByRole('textbox', { name: 'Password' });
const loginButton = () => getLocatorByRole('button', { name: 'Login' });
const errorMessage = getLocatorByText('Your username is invalid!'); // update as needed if message varies
const successMessage = () => getLocatorByText('You logged into a secure area!');
const logoutButton = () => getLocatorByText('Logout', { exact: true });
const logoutMessage = () => getLocatorByText('You logged out of the secure area!');
const loginPageHeader = () => getLocatorByRole('heading', { name: 'Login Page', level: 2 });

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

export async function isLogoutSuccessful(): Promise<boolean> {
  const isMessageVisible = await logoutMessage().isVisible();
  if (!isMessageVisible) {
    return false;
  }
  const messageText = await logoutMessage().textContent();
  return messageText?.includes('You logged out of the secure area!') || false;
}
