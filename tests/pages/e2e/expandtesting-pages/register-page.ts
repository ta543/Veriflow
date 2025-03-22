/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code RegisterPage}.
 *
 * VeriFlow Test Automation - ExpandTesting | RegisterPage
 */

import { click, fill } from '@ActionUtils';
import { expectElementToHaveText } from '@AssertUtils';
import { getLocatorByRole, getLocatorByText } from '@LocatorUtils';
import { ExpandTestingRegisterTestData } from '../../../testdata/testdata/practice-expandtesting-testdata';

// Locators
const usernameField = () => getLocatorByRole('textbox', { name: 'Username' });
const passwordField = () => getLocatorByRole('textbox', { name: 'Password', exact: true });
const confirmPasswordField = () => getLocatorByRole('textbox', { name: 'Confirm Password' });
const registerButton = () => getLocatorByRole('button', { name: 'Register' });
const errorMessage = () => getLocatorByText('An error occurred during registration. Please try again.');

// Methods
export async function fillRegisterFormWithInvalidCredentials() {
  const { username, password, confirmPassword } = ExpandTestingRegisterTestData.invalidCredentials;
  await fill(usernameField(), username);
  await fill(passwordField(), password);
  await fill(confirmPasswordField(), confirmPassword);
}

export async function submitRegisterForm() {
  await click(registerButton());
}

export async function verifyRegistrationFailed() {
  await expectElementToHaveText(errorMessage(), 'An error occurred during registration. Please try again.');
}
