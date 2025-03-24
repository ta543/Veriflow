"use strict";
/**
 * page-factory.ts: This module is responsible for setting and managing instances of pages.
 * It provides a centralized way to set and access pages, ensuring that each test has a clean, isolated page instance.
 * This helps to maintain the state and context of each test independently, improving test reliability and debugging.
 * It also includes functions for switching between pages, closing pages, and reverting to the default page.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveStorageState = exports.getWindowSize = exports.wait = exports.blockAds = exports.goBack = exports.reloadPage = exports.waitForPageLoadState = exports.getURL = exports.gotoURL = exports.closePage = exports.switchToDefaultPage = exports.switchPage = exports.getAllPages = exports.setPage = exports.getContext = exports.getPage = void 0;
const tslib_1 = require("tslib");
const _TIMEOUT_1 = require("@TIMEOUT");
const test_1 = require("@playwright/test");
const constants_1 = require("../constants");
let page;
/**
 * Returns the current Page.
 * @returns {Page} The current Page.
 */
function getPage() {
    return page;
}
exports.getPage = getPage;
function getContext() {
    return page.context();
}
exports.getContext = getContext;
/**
 * Sets the current Page.
 * @param {Page} pageInstance - The Page instance to set as the current Page.
 */
function setPage(pageInstance) {
    page = pageInstance;
}
exports.setPage = setPage;
/**
 * Returns an array of all pages within the current context.
 * @returns {Page[]} An array of Page objects.
 */
function getAllPages() {
    return page.context().pages();
}
exports.getAllPages = getAllPages;
/**
 * Switches to a different page by its index (1-based).
 * If the desired page isn't immediately available, this function will wait and retry for up to 'SMALL_TIMEOUT' seconds.
 * @param {number} winNum - The index of the page to switch to.
 * @throws {Error} If the desired page isn't found within 'SMALL_TIMEOUT' seconds.
 */
function switchPage(winNum, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const startTime = Date.now();
        const timeoutInMs = (options === null || options === void 0 ? void 0 : options.timeout) || _TIMEOUT_1.SMALL_TIMEOUT;
        // Wait until the desired page number exists or timeout is reached
        while (getAllPages().length < winNum && Date.now() - startTime < timeoutInMs) {
            yield new Promise(resolve => setTimeout(resolve, 100));
        }
        // Assert that the desired page number exists
        (0, test_1.expect)(getAllPages().length, `Page number ${winNum} not found after ${timeoutInMs} seconds`).toBeGreaterThanOrEqual(winNum);
        // Switch to the desired page and wait for it to load
        const pageInstance = getAllPages()[winNum - 1];
        yield pageInstance.waitForLoadState((options === null || options === void 0 ? void 0 : options.loadState) || 'load');
        setPage(pageInstance);
    });
}
exports.switchPage = switchPage;
/**
 * Switches back to the default page (the first one).
 */
function switchToDefaultPage() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const allPages = getAllPages();
        const noOfWindows = allPages.length;
        if (noOfWindows > 0) {
            const pageInstance = allPages[0];
            yield pageInstance.bringToFront();
            setPage(pageInstance);
        }
    });
}
exports.switchToDefaultPage = switchToDefaultPage;
/**
 * Closes a page by its index (1-based).
 * If no index is provided, the current page is closed.
 * If there are other pages open, it will switch back to the default page (Intial Page 1) if available.
 * @param {number} winNum - The index of the page to close.
 */
function closePage(winNum) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!winNum) {
            yield page.close();
            yield switchToDefaultPage();
            return;
        }
        (0, test_1.expect)(winNum, 'Window number should be Valid').toBeGreaterThan(0);
        const allPages = getAllPages();
        const noOfWindows = allPages.length;
        if (noOfWindows >= 1) {
            const pageInstance = allPages[winNum - 1];
            yield pageInstance.close();
        }
        yield switchToDefaultPage();
    });
}
exports.closePage = closePage;
/**
 * 1. Navigations: This section contains functions for navigating within a web page or between web pages.
 * These functions include going to a URL, waiting for a page to load, reloading a page, and going back to a previous page.
 */
/**
 * Navigates to the specified URL.
 * @param {string} path - The URL to navigate to.
 * @param {GotoOptions} options - The navigation options.
 * @returns {Promise<null | Response>} - The navigation response or null if no response.
 */
function gotoURL(path, options = { waitUntil: (0, constants_1.getDefaultLoadState)() }) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield getPage().goto(path, options);
    });
}
exports.gotoURL = gotoURL;
/**
 * Returns the URL of the page.
 * @param {NavigationOptions} [options] - Optional navigation options.
 * @returns {Promise<string>} - The URL of the page.
 */
function getURL(options = { waitUntil: 'load' }) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            yield waitForPageLoadState(options);
            return getPage().url();
        }
        catch (error) {
            console.log(`getURL- ${error instanceof Error ? error.message : String(error)}`);
            return '';
        }
    });
}
exports.getURL = getURL;
/**
 * Waits for a specific page load state.
 * @param {NavigationOptions} options - The navigation options.
 */
function waitForPageLoadState(options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let waitUntil = (0, constants_1.getDefaultLoadState)();
        if ((options === null || options === void 0 ? void 0 : options.waitUntil) && options.waitUntil !== 'commit') {
            waitUntil = options.waitUntil;
        }
        yield getPage().waitForLoadState(waitUntil);
    });
}
exports.waitForPageLoadState = waitForPageLoadState;
/**
 * Reloads the current page.
 * @param {NavigationOptions} options - The navigation options.
 */
function reloadPage(options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield Promise.all([getPage().reload(options), getPage().waitForEvent('framenavigated')]);
        yield waitForPageLoadState(options);
    });
}
exports.reloadPage = reloadPage;
/**
 * Navigates back to the previous page.
 * @param {NavigationOptions} options - The navigation options.
 */
function goBack(options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield Promise.all([getPage().goBack(options), getPage().waitForEvent('framenavigated')]);
        yield waitForPageLoadState(options);
    });
}
exports.goBack = goBack;
/**
 * Blocks common ad domains to improve test stability and speed.
 * This function should be called during global page setup.
 */
function blockAds(page) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        yield page.route('**/*', (route) => {
            const url = route.request().url();
            if (blockedDomains.some(domain => url.includes(domain))) {
                return route.abort();
            }
            return route.continue();
        });
    });
}
exports.blockAds = blockAds;
/**
 * Waits for a specified amount of time.
 * @param {number} ms - The amount of time to wait in milliseconds.
 */
function wait(ms) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line playwright/no-wait-for-timeout
        yield getPage().waitForTimeout(ms);
    });
}
exports.wait = wait;
/**
 * Retrieves the size of the browser window. This function uses the `evaluate` method to execute code in the context of the page,
 * allowing it to access the `window` object and retrieve the current window dimensions.
 * @returns A promise that resolves to an object containing the width and height of the window.
 */
function getWindowSize() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield getPage().evaluate(() => {
            return {
                width: window.innerWidth,
                height: window.innerHeight,
            };
        });
    });
}
exports.getWindowSize = getWindowSize;
/**
 * Saves the storage state of the current page.
 *
 * This function captures the storage state of the page, which includes cookies,
 * local storage, and session storage. The state can be saved to a file if a path is provided.
 *
 * @param {string} [path] - The optional file path where the storage state will be saved.
 * If not provided, the state will only be returned but not saved to a file.
 *
 * @returns {Promise<ReturnType<BrowserContext['storageState']>>} - A promise that resolves to the storage state.
 *
 * @example
 *
 * // Save storage state to a file
 * saveStorageState('./state.json');
 *
 * // Get storage state without saving to a file
 * const state = await saveStorageState();
 *
 * @see {@link https://playwright.dev/docs/api/class-browsercontext#browser-context-storage-state | Playwright BrowserContext.storageState}
 */
function saveStorageState(path) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield getPage().context().storageState({ path: path });
    });
}
exports.saveStorageState = saveStorageState;
//# sourceMappingURL=page-utils.js.map