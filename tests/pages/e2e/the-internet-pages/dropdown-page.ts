/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code DropdownPage}.
 *
 *
 * VeriFlow Test Automation - The Internet | DropdownPage
 */

import { selectByIndex } from '@ActionUtils';
import { gotoURL } from '@PageUtils';
import { expectPageToHaveURL } from '@AssertUtils';
import { getLocatorByXPath } from '@LocatorUtils';

const dropdownSelect = () => getLocatorByXPath('//*[@id="dropdown"]');

export async function navigateToDropdownPage() {
  await gotoURL('https://the-internet.herokuapp.com/dropdown');
  await dropdownSelect().waitFor({ state: 'visible' });
}

export async function verifyDropdownPageURL() {
  await expectPageToHaveURL(/.*dropdown/);
  await dropdownSelect().waitFor({ state: 'visible' });
}

export async function selectDropdownOption(optionIndex: number) {
  await dropdownSelect().waitFor({ state: 'visible' });
  await selectByIndex(dropdownSelect(), optionIndex - 1);
}

export async function verifyDropdownOptionSelected(optionIndex: number) {
  await dropdownSelect().waitFor({ state: 'visible' });
  const selectedValue = await dropdownSelect().inputValue();
  return selectedValue === (optionIndex - 1).toString();
}
