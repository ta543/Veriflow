"use strict";
/**
 * locator-utils.ts: This module provides utility functions for handling and manipulating locators in Playwright.
 * These utilities make it easier to interact with elements on the page, providing a layer of abstraction over Playwright's built-in locator methods.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocatorInFrame = exports.getFrameLocator = exports.getFrame = exports.getAllLocators = exports.getLocatorByPlaceholder = exports.getLocatorByLabel = exports.getLocatorByRole = exports.getLocatorByText = exports.getLocatorByTestId = exports.getVisibleLocator = exports.getLocator = void 0;
const tslib_1 = require("tslib");
const test_1 = require("@playwright/test");
const _PageUtils_1 = require("@PageUtils");
const _LOADSTATE_1 = require("@LOADSTATE");
const _ElementUtils_1 = require("@ElementUtils");
/**
 * 1. Locators: This section contains functions and definitions related to locators.
 * Locators are used to find and interact with elements on the page.
 */
/**
 * Returns a Locator object based on the input provided.
 * @param {string | Locator} input - The input to create the Locator from.
 * @param {LocatorOptions} options - Optional parameters for the Locator.
 * @returns {Locator} - The created Locator object.
 */
function getLocator(input, options) {
    const locator = typeof input === 'string' ? (0, _PageUtils_1.getPage)().locator(input, options) : input;
    return (options === null || options === void 0 ? void 0 : options.onlyVisible) ? locator.locator('visible=true') : locator;
}
exports.getLocator = getLocator;
/**
 * Returns a locator pointing to only visible element based on the input provided.
 * By default, it returns locators that are visible. This behavior can be customized
 * via the `options` parameter, allowing for more specific locator configurations.
 *
 * @param input - The selector string or Locator object to identify the element.
 * @param options - Optional. Configuration options for the locator. Use `{ onlyVisible: false }`
 * to include non-visible elements in the locator's search criteria.
 * @returns A `Locator` instance pointing to an element that matches the specified
 * criteria, prioritizing visibility unless overridden by `options`.
 */
function getVisibleLocator(input, options) {
    return getLocator(input, Object.assign(Object.assign({}, _LOADSTATE_1.defaultVisibleOnlyOption), options));
}
exports.getVisibleLocator = getVisibleLocator;
/**
 * Returns a Locator object with a specific testId. The global testId attribute is set in the playwright.config.ts file with default value as 'data-testid' if not set explicitly, but can be overridden by providing an attributeName.
 * @param {string | RegExp} testId - The testId to create the Locator from.
 * @param {string} [attributeName] - Optional attribute name for the testId. If provided, this will override the default 'testId' attribute value set in the playwright.config.ts file only for this instance.
 * @returns {Locator} - The created Locator object.
 */
function getLocatorByTestId(testId, attributeName) {
    if (attributeName) {
        test_1.selectors.setTestIdAttribute(attributeName);
    }
    return (0, _PageUtils_1.getPage)().getByTestId(testId);
}
exports.getLocatorByTestId = getLocatorByTestId;
/**
 * Returns a Locator object with a specific text.
 * @param {string | RegExp} text - The text to create the Locator from.
 * @param {GetByTextOptions} options - Optional parameters for the Locator.
 * @returns {Locator} - The created Locator object.
 */
function getLocatorByText(text, options) {
    return (0, _PageUtils_1.getPage)().getByText(text, options);
}
exports.getLocatorByText = getLocatorByText;
/**
 * Returns a Locator object with a specific role.
 * @param {GetByRoleTypes} role - The role to create the Locator from.
 * @param {GetByRoleOptions} options - Optional parameters for the Locator.
 * @returns {Locator} - The created Locator object.
 */
function getLocatorByRole(role, options) {
    return (0, _PageUtils_1.getPage)().getByRole(role, options);
}
exports.getLocatorByRole = getLocatorByRole;
/**
 * Returns a Locator object with a specific label.
 * @param {string | RegExp} text - The label text to create the Locator from.
 * @param {GetByRoleOptions} options - Optional parameters for the Locator.
 * @returns {Locator} - The created Locator object.
 */
function getLocatorByLabel(text, options) {
    return (0, _PageUtils_1.getPage)().getByLabel(text, options);
}
exports.getLocatorByLabel = getLocatorByLabel;
/**
 * Returns a Locator object with a specific placeholder.
 * @param {string | RegExp} text - The place holder text to create the Locator from.
 * @param {GetByPlaceholderOptions} options - Optional parameters for the Locator.
 * @returns {Locator} - The created Locator object.
 */
function getLocatorByPlaceholder(text, options) {
    return (0, _PageUtils_1.getPage)().getByPlaceholder(text, options);
}
exports.getLocatorByPlaceholder = getLocatorByPlaceholder;
/**
 * Returns all Locator objects based on the input provided.
 * @param {string | Locator} input - The input to create the Locators from.
 * @param {LocatorOptions} options - Optional parameters for the Locators.
 * @returns {Promise<Locator[]>} - The created Locator objects.
 */
function getAllLocators(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ElementUtils_1.waitForFirstElementToBeAttached)(input, options);
        return typeof input === 'string' ? yield (0, _PageUtils_1.getPage)().locator(input, options).all() : yield input.all();
    });
}
exports.getAllLocators = getAllLocators;
/**
 * 2. Frames: This section contains functions and definitions related to frames.
 * Frames are used to handle and interact with iframes or frames within the web page.
 */
/**
 * Returns a Frame object based on the provided frame selector options. If the frame is not found, an error is thrown unless the 'force' option is set to true.
 * @param {FrameOptions} frameSelector - The options to identify the frame.
 * @param {{ force?: boolean }} options - Additional options for frame retrieval.
 * - force (boolean): If true, returns the frame (or null) without throwing an error if the frame is not found.
 * @returns {null | Frame} - The Frame object if found, otherwise null (if 'force' is true).
 * @throws {Error} - Throws an error if the frame is not found and 'force' is false.
 */
function getFrame(frameSelector, options = { force: false }) {
    const frame = (0, _PageUtils_1.getPage)().frame(frameSelector);
    if (options.force)
        return frame;
    if (!frame) {
        throw new Error(`Frame not found with selector: ${JSON.stringify(frameSelector)}`);
    }
    return frame;
}
exports.getFrame = getFrame;
/**
 * Returns a FrameLocator object based on the input provided.
 * @param {string | FrameLocator} frameInput - The input to create the FrameLocator from.
 * @returns {FrameLocator} - The created FrameLocator object.
 */
function getFrameLocator(frameInput) {
    return typeof frameInput === 'string' ? (0, _PageUtils_1.getPage)().frameLocator(frameInput) : frameInput;
}
exports.getFrameLocator = getFrameLocator;
/**
 * Returns a Locator object within a specific frame based on the input provided.
 * @param {string | FrameLocator} frameInput - The input to create the FrameLocator from.
 * @param {string | Locator} input - The input to create the Locator from, within the frame.
 * @returns {Locator} - The created Locator object.
 */
function getLocatorInFrame(frameInput, input) {
    return getFrameLocator(frameInput).locator(input);
}
exports.getLocatorInFrame = getLocatorInFrame;
//# sourceMappingURL=locator-utils.js.map