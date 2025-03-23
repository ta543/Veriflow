/**
 * page-factory.ts: This module is responsible for setting and managing instances of pages.
 * It provides a centralized way to set and access pages, ensuring that each test has a clean, isolated page instance.
 * This helps to maintain the state and context of each test independently, improving test reliability and debugging.
 * It also includes functions for switching between pages, closing pages, and reverting to the default page.
 */

import { Page } from '@playwright/test';

let page: Page;

/**
 * Returns the current Page.
 * @returns {Page} The current Page.
 */
export function getPage(): Page {
  return page;
}

/**
 * Sets the current Page.
 * @param {Page} pageInstance - The Page instance to set as the current Page.
 */
export function setPage(pageInstance: Page): void {
  page = pageInstance;
}

/**
 * Blocks common ad domains to improve test stability and speed.
 * This function should be called during global page setup.
 */
export async function blockAds(page: Page): Promise<void> {
  const blockedDomains = [
    'googlesyndication.com',
    'doubleclick.net',
    'adservice.google.com',
    'pagead2.googlesyndication.com',
    'adclick.g.doubleclick.net',
    'ads.youtube.com',
    'ad.doubleclick.net',
    'static.doubleclick.net',
    'tpc.googlesyndication.com',
    'googleads.g.doubleclick.net'
  ];

  await page.route('**/*', (route) => {
    const url = route.request().url();
    if (blockedDomains.some(domain => url.includes(domain))) {
      return route.abort();
    }
    return route.continue();
  });
}

/**
 * Switches back to the default page (the first one).
 */
export async function switchToDefaultPage(): Promise<void> {
  const pageInstance = page.context().pages()[0];
  if (pageInstance) {
    await pageInstance.bringToFront();
    setPage(pageInstance);
  }
}

/**
 * Closes a page by its index (1-based).
 * If no index is provided, the current page is closed.
 * If there are other pages open, it will switch back to the default page.
 * @param {number} winNum - The index of the page to close.
 */
export async function closePage(winNum: number): Promise<void> {
  if (!winNum) {
    await page.close();
    return;
  }
  const noOfWindows = page.context().pages().length;
  const pageInstance = page.context().pages()[winNum - 1];
  await pageInstance.close();
  if (noOfWindows > 1) {
    await switchToDefaultPage();
  }
}
