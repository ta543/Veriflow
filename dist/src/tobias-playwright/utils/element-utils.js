"use strict";
/**
 * element-utils.ts: This module provides utility functions for retrieving text from web elements in web page and conditional statements with in Playwright.
 * These utilities include a variety of functions for retrieving text, input values, URLs, and checking conditions such as
 * whether an element is visible or checked. It provides a layer of abstraction over Playwright's built-in methods for
 * interacting with elements, making it easier to perform common tasks and checks on web elements.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForElementToBeDetached = exports.waitForFirstElementToBeAttached = exports.waitForElementToBeAttached = exports.waitForElementToBeHidden = exports.waitForElementToBeVisible = exports.waitForElementToBeStable = exports.isElementChecked = exports.isElementHidden = exports.isElementVisible = exports.isElementAttached = exports.getLocatorCount = exports.getAttribute = exports.getAllInputValues = exports.getInputValue = exports.getAllTexts = exports.getText = void 0;
const tslib_1 = require("tslib");
const _PageUtils_1 = require("@PageUtils");
const _LocatorUtils_1 = require("@LocatorUtils");
const _TIMEOUT_1 = require("@TIMEOUT");
const test_1 = require("@playwright/test");
/**
 * 1. Retreiving Data: Use these functions to retrieve text, values, and counts from web elements.
 * These functions can also be used in conditional statements to check the state of web elements.
 * These functions are not intended for use in assertions, unless the built-in Playwright assertions do not meet your criteria.
 */
/**
 * Returns the inner text of a Locator object.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<string>} - The inner text of the Locator.
 */
function getText(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, _LocatorUtils_1.getLocator)(input);
        return (yield locator.innerText(options)).trim();
    });
}
exports.getText = getText;
/**
 * Returns the inner text of all Locator objects.
 * @param {string | Locator} input - The input to create the Locator from.
 * @returns {Promise<Array<string>>} - The inner text of all Locator objects.
 */
function getAllTexts(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield waitForFirstElementToBeAttached(input, options);
        const locator = (0, _LocatorUtils_1.getLocator)(input);
        return (yield locator.allInnerTexts()).map(text => text.trim());
    });
}
exports.getAllTexts = getAllTexts;
/**
 * Returns the input value of a Locator object.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<string>} - The input value of the Locator.
 */
function getInputValue(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, _LocatorUtils_1.getLocator)(input);
        return (yield locator.inputValue(options)).trim();
    });
}
exports.getInputValue = getInputValue;
/**
 * Returns the input values of all Locator objects.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<Array<string>>} - The input values of all Locator objects.
 */
function getAllInputValues(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locators = yield (0, _LocatorUtils_1.getAllLocators)(input);
        return Promise.all(locators.map(locator => getInputValue(locator, options)));
    });
}
exports.getAllInputValues = getAllInputValues;
/**
 * Returns the attribute of a Locator object.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {string} attributeName - The name of the attribute to get.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<null | string>} - The attribute of the Locator if present or null if absent.
 */
function getAttribute(input, attributeName, options) {
    var _a;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, _LocatorUtils_1.getLocator)(input);
        return ((_a = (yield locator.getAttribute(attributeName, options))) === null || _a === void 0 ? void 0 : _a.trim()) || null;
    });
}
exports.getAttribute = getAttribute;
/**
 * Returns the count of Locator objects.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<number>} - The count of the Locator objects.
 */
function getLocatorCount(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            return (yield (0, _LocatorUtils_1.getAllLocators)(input, options)).length;
        }
        catch (error) {
            console.log(`getLocatorCount- ${error instanceof Error ? error.message : String(error)}`);
        }
        return 0;
    });
}
exports.getLocatorCount = getLocatorCount;
/**
 * 2. Conditions: Use these checks within conditional statements.
 * They are not intended for use in assertions, unless the built-in Playwright assertions do not meet your criteria.
 */
/**
 * Checks if a Locator object is attached to DOM.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<boolean>} - True if the Locator is attached, false otherwise.
 */
function isElementAttached(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, _LocatorUtils_1.getLocator)(input); // Assuming getLocator returns a Playwright Locator
        const timeoutInMs = (options === null || options === void 0 ? void 0 : options.timeout) || _TIMEOUT_1.SMALL_TIMEOUT;
        try {
            yield locator.waitFor({ state: 'attached', timeout: timeoutInMs });
            return true;
        }
        catch (error) {
            console.log(`isElementAttached- ${error instanceof Error ? error.message : String(error)}`);
            return false;
        }
    });
}
exports.isElementAttached = isElementAttached;
/**
 * Checks if a Locator object is attached to DOM and is visible.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<boolean>} - True if the Locator is visible, false otherwise.
 */
function isElementVisible(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, _LocatorUtils_1.getLocator)(input);
        const timeoutInMs = (options === null || options === void 0 ? void 0 : options.timeout) || _TIMEOUT_1.SMALL_TIMEOUT;
        const startTime = Date.now();
        try {
            while (Date.now() - startTime < timeoutInMs) {
                if (yield locator.isVisible(options)) {
                    return true;
                }
                yield new Promise(resolve => setTimeout(resolve, 100));
            }
        }
        catch (error) {
            console.log(`isElementVisible- ${error instanceof Error ? error.message : String(error)}`);
        }
        return false;
    });
}
exports.isElementVisible = isElementVisible;
/**
 * Checks if a Locator object is hidden or not present in DOM.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<boolean>} - True if the Locator is hidden, false otherwise.
 */
function isElementHidden(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, _LocatorUtils_1.getLocator)(input);
        const timeoutInMs = (options === null || options === void 0 ? void 0 : options.timeout) || _TIMEOUT_1.SMALL_TIMEOUT;
        const startTime = Date.now();
        try {
            while (Date.now() - startTime < timeoutInMs) {
                if (yield locator.isHidden(options)) {
                    return true;
                }
                yield new Promise(resolve => setTimeout(resolve, 100));
            }
        }
        catch (error) {
            console.log(`isElementHidden- ${error instanceof Error ? error.message : String(error)}`);
        }
        return false;
    });
}
exports.isElementHidden = isElementHidden;
/**
 * Checks if a Locator object is checked.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {TimeoutOption} [options] - Optional timeout options.
 * @returns {Promise<boolean>} - True if the Locator is checked, false otherwise.
 */
function isElementChecked(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            if (yield isElementVisible(input, options)) {
                return yield (0, _LocatorUtils_1.getLocator)(input).isChecked(options);
            }
        }
        catch (error) {
            console.log(`isElementChecked- ${error instanceof Error ? error.message : String(error)}`);
        }
        return false;
    });
}
exports.isElementChecked = isElementChecked;
/**
 * Waits for an element to be stable on the page.
 * @param input - The element or locator to wait for.
 * @param options - Optional timeout options.
 * @returns A promise that resolves to a boolean indicating if the element is stable.
 */
function waitForElementToBeStable(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let result = false;
        yield test_1.test.step('waitForElementToBeStable', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const locator = (0, _LocatorUtils_1.getLocator)(input);
            const maxWaitTime = (options === null || options === void 0 ? void 0 : options.timeout) || _TIMEOUT_1.SMALL_TIMEOUT;
            let stableCounter = 0;
            const initialBoundingBox = yield locator.boundingBox();
            let lastX = (initialBoundingBox === null || initialBoundingBox === void 0 ? void 0 : initialBoundingBox.x) || null;
            let lastY = (initialBoundingBox === null || initialBoundingBox === void 0 ? void 0 : initialBoundingBox.y) || null;
            const startTime = Date.now();
            yield (0, _PageUtils_1.wait)(200);
            while (Date.now() - startTime < maxWaitTime) {
                const { x, y } = (yield locator.boundingBox()) || { x: null, y: null };
                if (x === lastX && y === lastY) {
                    stableCounter++;
                    if (stableCounter >= 3) {
                        result = true;
                        break;
                    }
                    yield (0, _PageUtils_1.wait)(100);
                }
                else {
                    // stableCounter = 0;
                    yield (0, _PageUtils_1.wait)(200);
                }
                lastX = x;
                lastY = y;
            }
        }));
        return result;
    });
}
exports.waitForElementToBeStable = waitForElementToBeStable;
/**
 * Waits for an element to be visible on the page.
 * @param input - The element or locator to wait for.
 * @param options - Optional timeout options.
 * @returns A promise that resolves when the element is visible.
 */
function waitForElementToBeVisible(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, _LocatorUtils_1.getLocator)(input);
        yield locator.waitFor({ state: 'visible', timeout: (options === null || options === void 0 ? void 0 : options.timeout) || _TIMEOUT_1.SMALL_TIMEOUT });
    });
}
exports.waitForElementToBeVisible = waitForElementToBeVisible;
/**
 * Waits for an element to be hidden on the page or detached from the DOM.
 * @param input - The element or locator to wait for.
 * @param options - Optional timeout options.
 * @returns A promise that resolves when the element is hidden.
 */
function waitForElementToBeHidden(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, _LocatorUtils_1.getLocator)(input);
        yield locator.waitFor({ state: 'hidden', timeout: (options === null || options === void 0 ? void 0 : options.timeout) || _TIMEOUT_1.SMALL_TIMEOUT });
    });
}
exports.waitForElementToBeHidden = waitForElementToBeHidden;
/**
 * Waits for an element to be attached to the DOM.
 * @param input - The element or locator to wait for.
 * @param options - Optional timeout options.
 * @returns A promise that resolves when the element is attached to the DOM.
 */
function waitForElementToBeAttached(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, _LocatorUtils_1.getLocator)(input);
        yield locator.waitFor({ state: 'attached', timeout: (options === null || options === void 0 ? void 0 : options.timeout) || _TIMEOUT_1.SMALL_TIMEOUT });
    });
}
exports.waitForElementToBeAttached = waitForElementToBeAttached;
/**
 * Ensures that the first element of the locator is attached to the DOM if the waitForLocator option is true.
 * @param {string | Locator} input - The input to create the Locator from. It can be a string or a Locator.
 * @param {LocatorWaitOptions} [options] - Optional parameters for Locator waiting options.
 * @returns {Promise<void>} - A promise that resolves when the element is attached or immediately if waitForLocator is false.
 */
function waitForFirstElementToBeAttached(input, options) {
    var _a;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, _LocatorUtils_1.getLocator)(input);
        const waitForLocator = (_a = options === null || options === void 0 ? void 0 : options.waitForLocator) !== null && _a !== void 0 ? _a : true;
        // If waitForLocator is true, wait for the element to be attached before returning the locators
        if (waitForLocator) {
            yield waitForElementToBeAttached(locator.first(), options);
        }
    });
}
exports.waitForFirstElementToBeAttached = waitForFirstElementToBeAttached;
/**
 * Waits for an element to be detached from the DOM.
 * @param input - The element or locator to wait for.
 * @param options - Optional timeout options.
 * @returns A promise that resolves when the element is detached from the DOM.
 */
function waitForElementToBeDetached(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, _LocatorUtils_1.getLocator)(input);
        yield locator.waitFor({ state: 'detached', timeout: (options === null || options === void 0 ? void 0 : options.timeout) || _TIMEOUT_1.SMALL_TIMEOUT });
    });
}
exports.waitForElementToBeDetached = waitForElementToBeDetached;
//# sourceMappingURL=element-utils.js.map