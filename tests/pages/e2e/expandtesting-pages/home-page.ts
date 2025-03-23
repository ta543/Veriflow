/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code HomePage}.
 *
 * VeriFlow Test Automation - ExpandTesting | HomePage
 */

import { click, gotoURL, wait, acceptConsentIfVisible } from '@ActionUtils';
import { expectPageToHaveURL } from '@AssertUtils';
import { getLocator } from '@LocatorUtils';

const homePageURL = 'https://practice.expandtesting.com/';

// Locators
const webInputButton = () => getLocator('.card-footer > div > .btn').first();
const clickLoginLinkButton = () => getLocator('div:nth-child(2) > .card > .card-footer > div > .btn').first();
const registerCardFooterButton = () => getLocator('div:nth-child(3) > .card > .card-footer > div > .btn').first();

// Methods
export async function navigateToHomePage() {
  await gotoURL(homePageURL);
  await wait(1000);
  await acceptConsentIfVisible();
}

export async function verifyHomePageURL() {
  await expectPageToHaveURL(new RegExp(homePageURL));
}

export async function navigateToWebInputPage() {
  await click(webInputButton());
  await wait(1000);
}

export async function navigateToLoginPage() {
  await click(clickLoginLinkButton());
  await wait(1000);
}

export async function navigateToRegisterPage() {
  await click(registerCardFooterButton());
  await wait(1000);
}
