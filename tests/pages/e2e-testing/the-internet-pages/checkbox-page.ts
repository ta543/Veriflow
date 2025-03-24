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

const checkbox = (index: number) => getLocatorByRole('checkbox').nth(index - 1);

export async function toggleCheckbox(index: number) {
  const cb = checkbox(index);
  await cb.click();
}

export async function isCheckboxChecked(index: number): Promise<boolean> {
  const cb = checkbox(index);
  return await cb.isChecked();
}
