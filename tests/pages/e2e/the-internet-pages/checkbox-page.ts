/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code CheckboxPage}.
 *
 *
 * VeriFlow Test Automation - The Internet | CheckboxPage
 */

import { getLocatorByRole } from '@LocatorUtils';

const checkboxes = () => getLocatorByRole('checkbox');
const checkbox1 = () => checkboxes().nth(0);
const checkbox2 = () => checkboxes().nth(1);

export async function toggleCheckbox(index: number) {
  const checkbox = index === 1 ? checkbox1() : checkbox2();
  await checkbox.click();
}

export async function isCheckboxChecked(index: number): Promise<boolean> {
  const checkbox = index === 1 ? checkbox1() : checkbox2();
  return await checkbox.isChecked();
}
