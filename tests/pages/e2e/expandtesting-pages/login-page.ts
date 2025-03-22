/**
 * (C) VeriFlow 2025 - ExpandTesting Practice Automation Tests
 * This page object handles interactions for the login page of practice.expandtesting.com
 */

import { click, fill, wait } from '@ActionUtils';
import { expectElementToHaveText } from '@AssertUtils';
import { getLocator, getLocatorByRole } from '@LocatorUtils';
import { ExpandTestingLoginTestData } from '../../../testdata/testdata/practice-expandtesting-testdata';

// Locators
const usernameField = () => getLocatorByRole('textbox', { name: 'Username' });
const passwordField = () => getLocatorByRole('textbox', { name: 'Password' });
const loginButton = () => getLocatorByRole('button', { name: 'Login' });
const successMessage = () => getLocator('text=You logged into a secure area!');

// Methods
export async function fillLoginFormWithValidCredentials() {
  const { username, password } = ExpandTestingLoginTestData.validCredentials;
  await fill(usernameField(), username);
  await fill(passwordField(), password);
}

export async function fillLoginFormWithInvalidCredentials() {
  const { username, password } = ExpandTestingLoginTestData.invalidCredentials;
  await fill(usernameField(), username);
  await fill(passwordField(), password);
}

export async function submitLoginForm() {
    await click(loginButton());
}

export async function verifySuccessfulLogin() {
    await expectElementToHaveText(successMessage(), 'You logged into a secure area!');
}
