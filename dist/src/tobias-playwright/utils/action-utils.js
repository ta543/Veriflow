"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceptConsentIfVisible = exports.clearByJS = exports.clickByJS = exports.scrollLocatorIntoView = exports.uploadFiles = exports.downloadFile = exports.doubleClick = exports.dragAndDrop = exports.focus = exports.hover = exports.getAlertText = exports.dismissAlert = exports.acceptAlert = exports.selectByIndex = exports.selectByText = exports.selectByValues = exports.selectByValue = exports.uncheck = exports.check = exports.clear = exports.pressLocatorKeyboard = exports.pressPageKeyboard = exports.pressSequentially = exports.fillAndTab = exports.fillAndEnter = exports.fill = exports.clickAndNavigate = exports.click = void 0;
const tslib_1 = require("tslib");
/**
 * action-utils.ts: This module provides a set of utility functions for performing various actions in Playwright tests.
 * These actions include navigation, interaction with page elements, handling of dialogs, and more.
 */
const test_1 = require("@playwright/test");
const _PageUtils_1 = require("@PageUtils");
const _TIMEOUT_1 = require("@TIMEOUT");
const _LocatorUtils_1 = require("@LocatorUtils");
const loadstate_1 = require("../constants/loadstate");
const _AssertUtils_1 = require("@AssertUtils");
const _ElementUtils_1 = require("@ElementUtils");
/**
 * 1. Actions: This section contains functions for interacting with elements on a web page.
 * These functions include clicking, filling input fields, typing, clearing input fields, checking and unchecking checkboxes, selecting options in dropdowns, and more.
 */
/**
 * Returns a locator, ensuring visibility by default, with the option to override visibility and stability checks.
 * Intended for internal use, this function facilitates retrieving locators under specific conditions—
 * visibility (enabled by default) and stability (optional), as per the requirements for further actions.
 * Users have the flexibility to adjust these checks via the `options` parameter.
 *
 * @param input - The selector string or Locator object used to find the element. This serves as the base for locating the element.
 * @param options - Optional. Configuration for locator retrieval. Allows overriding the default behavior for visibility and enables stability checks.
 * Use `{ onlyVisible: false }` to include non-visible elements and `{ stable: true }` to wait for the element to stabilize.
 * @returns A Promise that resolves to a Locator. This locator has been checked for visibility (enabled by default) and,
 * if specified in `options`, for stability, ensuring it meets the specified conditions.
 */
function getLocatorWithStableAndVisibleOptions(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, _LocatorUtils_1.getVisibleLocator)(input, options);
        if (options === null || options === void 0 ? void 0 : options.stable)
            yield (0, _ElementUtils_1.waitForElementToBeStable)(input, options);
        return locator;
    });
}
/**
 * Clicks on a specified element.
 * @param {string | Locator} input - The element to click on.
 * @param {ClickOptions} options - The click options.
 */
function click(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = yield getLocatorWithStableAndVisibleOptions(input, options);
        yield locator.click(options);
    });
}
exports.click = click;
/**
 * Clicks on a specified element and waits for navigation.
 * @param {string | Locator} input - The element to click on.
 * @param {ClickOptions} options - The click options.
 */
function clickAndNavigate(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const timeout = (options === null || options === void 0 ? void 0 : options.timeout) || _TIMEOUT_1.STANDARD_TIMEOUT;
        const elementHandle = yield (0, _LocatorUtils_1.getLocator)(input).elementHandle(options);
        try {
            // Adding 100 ms to the framenavigated timeout prioritizes locator error during click over navigation error, aiding in accurate debugging.
            yield Promise.all([click(input, options), (0, _PageUtils_1.getPage)().waitForEvent('framenavigated', { timeout: timeout + 100 })]);
            yield (0, _PageUtils_1.getPage)().waitForLoadState((options === null || options === void 0 ? void 0 : options.loadState) || (0, loadstate_1.getDefaultLoadState)(), {
                timeout: timeout,
            });
            // Wait for the element to be hidden or stale after navigation. If stale then catch the error and return.
            yield test_1.test.step('Wait for element to be stale/hidden after navigation and ignore any errors in this step', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield (elementHandle === null || elementHandle === void 0 ? void 0 : elementHandle.waitForElementState('hidden', { timeout }));
            }), { box: true });
        }
        catch (error) {
            if (error instanceof Error && error.name === 'TimeoutError' && error.message.includes('framenavigated')) {
                throw new Error(`After the click action, the page did not navigate to a new page\n ${error.message}`);
            }
            else if (error instanceof Error && !error.message.includes('elementHandle.waitForElementState')) {
                throw error;
            }
        }
    });
}
exports.clickAndNavigate = clickAndNavigate;
/**
 * Fills a specified element with a value.
 * @param {string | Locator} input - The element to fill.
 * @param {string} value - The value to fill the element with.
 * @param {FillOptions} options - The fill options.
 */
function fill(input, value, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = yield getLocatorWithStableAndVisibleOptions(input, options);
        yield locator.fill(value, options);
    });
}
exports.fill = fill;
/**
 * Fills a specified element with a value and press Enter.
 * @param {string | Locator} input - The element to fill.
 * @param {string} value - The value to fill the element with.
 * @param {FillOptions} options - The fill options.
 */
function fillAndEnter(input, value, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = yield getLocatorWithStableAndVisibleOptions(input, options);
        yield locator.fill(value, options);
        yield locator.press('Enter');
    });
}
exports.fillAndEnter = fillAndEnter;
/**
 * Fills a specified element with a value and press Tab.
 * @param {string | Locator} input - The element to fill.
 * @param {string} value - The value to fill the element with.
 * @param {FillOptions} options - The fill options.
 */
function fillAndTab(input, value, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = yield getLocatorWithStableAndVisibleOptions(input, options);
        yield locator.fill(value, options);
        yield locator.press('Tab');
    });
}
exports.fillAndTab = fillAndTab;
/**
 * Types a value into a specified element, simulating keystrokes character by character.
 * @param {string | Locator} input - The element into which the value will be typed. This can be either a string representing the selector or a Locator object.
 * @param {string} value - The string value to be typed into the element, character by character.
 * @param {PressSequentiallyOptions} [options] - Optional configuration for the typing action.
 */
function pressSequentially(input, value, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = yield getLocatorWithStableAndVisibleOptions(input, options);
        yield locator.pressSequentially(value, options);
    });
}
exports.pressSequentially = pressSequentially;
/**
 * Simulates the action of pressing a key or a combination of keys on the page.
 * This function is useful for scenarios where you need to simulate key presses like 'Enter', 'Tab', etc on the page..
 * @param {string} key - The key or combination of keys to be pressed. For example, 'Enter', 'Tab', or 'Control+A'.
 * @param {PressSequentiallyOptions} [options] - Optional configuration for the key press action. This can include options like delay between key presses.
 */
function pressPageKeyboard(key, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _PageUtils_1.getPage)().keyboard.press(key, options);
    });
}
exports.pressPageKeyboard = pressPageKeyboard;
/**
 * Simulates the action of pressing a key or a combination of keys on a specified element.
 * This function is useful for scenarios where you need to simulate key presses like 'Enter', 'Tab', etc on a specified element..
 * @param {string} key - The key or combination of keys to be pressed. For example, 'Enter', 'Tab', or 'Control+A'.
 * @param {string | Locator} input - The element on which the key press action will be performed. This can be either a string representing the selector or a Locator object.
 * @param {PressSequentiallyOptions} [options] - Optional configuration for the key press action. This can include options like delay between key presses.
 */
function pressLocatorKeyboard(input, key, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = yield getLocatorWithStableAndVisibleOptions(input, options);
        yield locator.press(key, options);
    });
}
exports.pressLocatorKeyboard = pressLocatorKeyboard;
/**
 * Clears the value of a specified element.
 * @param {string | Locator} input - The element to clear.
 * @param {ClearOptions} options - The clear options.
 */
function clear(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = yield getLocatorWithStableAndVisibleOptions(input, options);
        yield locator.clear(options);
    });
}
exports.clear = clear;
/**
 * Checks a specified checkbox or radio button.
 * @param {string | Locator} input - The checkbox or radio button to check.
 * @param {CheckOptions} options - The check options.
 */
function check(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = yield getLocatorWithStableAndVisibleOptions(input, options);
        yield locator.check(options);
    });
}
exports.check = check;
/**
 * Unchecks a specified checkbox or radio button.
 * @param {string | Locator} input - The checkbox or radio button to uncheck.
 * @param {CheckOptions} options - The uncheck options.
 */
function uncheck(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = yield getLocatorWithStableAndVisibleOptions(input, options);
        yield locator.uncheck(options);
    });
}
exports.uncheck = uncheck;
/**
 * Selects an option in a dropdown by its value.
 * @param {string | Locator} input - The dropdown to select an option in.
 * @param {string} value - The value of the option to select.
 * @param {SelectOptions} options - The select options.
 */
function selectByValue(input, value, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = yield getLocatorWithStableAndVisibleOptions(input, options);
        yield locator.selectOption({ value: value }, options);
    });
}
exports.selectByValue = selectByValue;
/**
 * Selects options in a dropdown by their values (multi select).
 * @param {string | Locator} input - The dropdown to select options in.
 * @param {Array<string>} value - The values of the options to select.
 * @param {SelectOptions} options - The select options.
 */
function selectByValues(input, value, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = yield getLocatorWithStableAndVisibleOptions(input, options);
        yield locator.selectOption(value, options);
    });
}
exports.selectByValues = selectByValues;
/**
 * Selects an option in a dropdown by its text.
 * @param {string | Locator} input - The dropdown to select an option in.
 * @param {string} text - The text of the option to select.
 * @param {SelectOptions} options - The select options.
 */
function selectByText(input, text, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = yield getLocatorWithStableAndVisibleOptions(input, options);
        yield locator.selectOption({ label: text }, options);
    });
}
exports.selectByText = selectByText;
/**
 * Selects an option in a dropdown by its index.
 * @param {string | Locator} input - The dropdown to select an option in.
 * @param {number} index - The index of the option to select.
 * @param {SelectOptions} options - The select options.
 */
function selectByIndex(input, index, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = yield getLocatorWithStableAndVisibleOptions(input, options);
        yield locator.selectOption({ index: index }, options);
    });
}
exports.selectByIndex = selectByIndex;
/**
 * 2. Alerts: This section contains functions for handling alert dialogs.
 * These functions include accepting and dismissing alerts, and getting the text of an alert.
 * Note: These functions currently have some repetition and could be optimized by applying the DRY (Don't Repeat Yourself) principle.
 */
/**
 * Accepts an alert dialog.
 * @param {string | Locator} input - The element to click to trigger the alert.
 * @param {string} [options.promptText] - The text to enter into a prompt dialog. Optional.
 * @param {number} [options.timeout] - Maximum time to wait for the alert to appear in milliseconds. Optional.
 * @returns {Promise<string>} - The message of the dialog.
 */
function acceptAlert(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const timeoutInMs = (options === null || options === void 0 ? void 0 : options.timeout) || _TIMEOUT_1.SMALL_TIMEOUT;
        const locator = (0, _LocatorUtils_1.getLocator)(input);
        let dialogMessage = '';
        const dialogPromise = (0, _PageUtils_1.getPage)()
            .waitForEvent('dialog', { timeout: timeoutInMs })
            .then((dialog) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            dialogMessage = dialog.message();
            return yield dialog.accept(options === null || options === void 0 ? void 0 : options.promptText);
        }))
            .catch(() => {
            throw new Error(`No dialog appeared after waiting for ${timeoutInMs} ms.`);
        });
        yield locator.click();
        yield dialogPromise;
        return dialogMessage;
    });
}
exports.acceptAlert = acceptAlert;
/**
 * Dismisses an alert dialog.
 * @param {string | Locator} input - The element to click to trigger the alert.
 * @param {number} [options.timeout] - Maximum time to wait for the alert to appear in milliseconds. Optional.
 * @returns {Promise<string>} - The message of the dialog.
 */
function dismissAlert(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const timeoutInMs = (options === null || options === void 0 ? void 0 : options.timeout) || _TIMEOUT_1.SMALL_TIMEOUT;
        const locator = (0, _LocatorUtils_1.getLocator)(input);
        let dialogMessage = '';
        const dialogPromise = (0, _PageUtils_1.getPage)()
            .waitForEvent('dialog', { timeout: timeoutInMs })
            .then((dialog) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            dialogMessage = dialog.message();
            return yield dialog.dismiss();
        }))
            .catch(() => {
            throw new Error(`No dialog appeared after waiting for ${timeoutInMs} ms.`);
        });
        yield locator.click();
        yield dialogPromise;
        return dialogMessage;
    });
}
exports.dismissAlert = dismissAlert;
/**
 * Gets the text of an alert dialog and dismisses the alert triggered.
 * @param {string | Locator} input - The element to click to trigger the alert.
 * @param {number} [options.timeout] - Maximum time to wait for the alert to appear in milliseconds. Optional.
 * @returns {Promise<string>} - The message of the dialog.
 */
function getAlertText(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const timeoutInMs = (options === null || options === void 0 ? void 0 : options.timeout) || _TIMEOUT_1.SMALL_TIMEOUT;
        const locator = (0, _LocatorUtils_1.getLocator)(input);
        let dialogMessage = '';
        const dialogPromise = (0, _PageUtils_1.getPage)()
            .waitForEvent('dialog', { timeout: timeoutInMs })
            .then((dialog) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            dialogMessage = dialog.message();
            return yield dialog.dismiss();
        }))
            .catch(() => {
            throw new Error(`No dialog appeared after waiting for ${timeoutInMs} ms.`);
        });
        yield locator.click();
        yield dialogPromise;
        return dialogMessage;
    });
}
exports.getAlertText = getAlertText;
// This function will hang when the alert is not triggered
/* export async function getAlertText(input: string | Locator): Promise<string> {
  const locator = getLocator(input);
  let dialogMessage = '';
  const dialogHandler = (dialog: Dialog) => {
    dialogMessage = dialog.message();
    dialog.dismiss().catch(e => console.error('Error dismissing dialog:', e));
  };
  getPage().once('dialog', dialogHandler);
  await locator.click();
  getPage().off('dialog', dialogHandler);
  return dialogMessage;
} */
/**
 * Hovers over a specified element.
 * @param {string | Locator} input - The element to hover over.
 * @param {HoverOptions} options - The hover options.
 */
function hover(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = yield getLocatorWithStableAndVisibleOptions(input, options);
        yield locator.hover(options);
    });
}
exports.hover = hover;
/**
 * Focuses on a specified element.
 * @param {string | Locator} input - The element to focus on.
 * @param {TimeoutOption} options - The timeout options.
 */
function focus(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = yield getLocatorWithStableAndVisibleOptions(input, options);
        yield locator.focus(options);
    });
}
exports.focus = focus;
/**
 * Drags and drops a specified element to a destination.
 * @param {string | Locator} input - The element to drag.
 * @param {string | Locator} dest - The destination to drop the element at.
 * @param {DragOptions} options - The drag options.
 */
function dragAndDrop(input, dest, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const drag = yield getLocatorWithStableAndVisibleOptions(input, options);
        const drop = yield getLocatorWithStableAndVisibleOptions(dest, options);
        yield drag.dragTo(drop, options);
    });
}
exports.dragAndDrop = dragAndDrop;
/**
 * Double clicks on a specified element.
 * @param {string | Locator} input - The element to double click on.
 * @param {DoubleClickOptions} options - The double click options.
 */
function doubleClick(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = yield getLocatorWithStableAndVisibleOptions(input, options);
        yield locator.dblclick(options);
    });
}
exports.doubleClick = doubleClick;
/**
 * Downloads a file from a specified element.
 * @param {string | Locator} input - The element to download the file from.
 * @param {string} path - The path to save the downloaded file to.
 */
function downloadFile(input, path, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = yield getLocatorWithStableAndVisibleOptions(input, options);
        const downloadPromise = (0, _PageUtils_1.getPage)().waitForEvent('download');
        yield click(locator, options);
        const download = yield downloadPromise;
        // Wait for the download process to complete
        console.log(yield download.path());
        // Save downloaded file somewhere
        yield download.saveAs(path);
    });
}
exports.downloadFile = downloadFile;
/**
 * Uploads files to a specified element.
 * @param {string | Locator} input - The element to upload files to.
 * @param {UploadValues} path - The files to upload.
 * @param {UploadOptions} options - The upload options.
 */
function uploadFiles(input, path, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = yield getLocatorWithStableAndVisibleOptions(input, options);
        yield locator.setInputFiles(path, options);
    });
}
exports.uploadFiles = uploadFiles;
/**
 * Scrolls a specified element into view.
 * @param {string | Locator} input - The element to scroll into view.
 * @param {TimeoutOption} options - The timeout options.
 */
function scrollLocatorIntoView(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, _LocatorUtils_1.getLocator)(input);
        yield locator.scrollIntoViewIfNeeded(options);
    });
}
exports.scrollLocatorIntoView = scrollLocatorIntoView;
/**
 * 3. JS: This section contains functions that use JavaScript to interact with elements on a web page.
 * These functions include clicking on an element using JavaScript.
 */
/**
 * Clicks on a specified element using JavaScript execution.
 * This method is particularly useful in tests where the standard Playwright `click` function fails to trigger the click event properly.
 * It directly invokes the `click` method on the HTMLElement, bypassing any potential issues with CSS, visibility, or DOM events.
 * @param {string | Locator} input - The element to click on. Can be a string selector or a Playwright `Locator` object.
 * @param {TimeoutOptions} options - Currently the timeout options for evaluate is not taking effect.
 */
function clickByJS(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, _LocatorUtils_1.getLocator)(input);
        yield locator.evaluate((el) => el.click(), options);
    });
}
exports.clickByJS = clickByJS;
/**
 * Clears the value of an input element and triggers an input event.
 * This method is particularly useful in tests where the standard clear or fill functions fail to clear the text.
 * The `input` event is dispatched with the `bubbles` option set to true,
 * allowing the event to bubble up through the DOM, which can trigger event
 * listeners attached to parent elements, ensuring the application reacts as expected.
 * @param {string | Locator} input - The element whose input value is to be cleared. Can be a string selector or a Playwright Locator.
 * @param {TimeoutOptions} options - Currently the timeout options for evaluate is not taking effect.
 */
function clearByJS(input, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const locator = (0, _LocatorUtils_1.getLocator)(input);
        yield locator.evaluate(element => {
            element.value = '';
            element.dispatchEvent(new Event('input', { bubbles: true }));
            element.dispatchEvent(new Event('change', { bubbles: true }));
        }, options);
    });
}
exports.clearByJS = clearByJS;
/**
 * Clicks the consent button if it appears within a given timeout.
 * Ensures the test doesn't fail if the popup is not present.
 * @returns {Promise<void>} - Resolves when the consent button is clicked or if no popup is present.
 */
function acceptConsentIfVisible() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const consentPopupHeading = (0, _LocatorUtils_1.getLocatorByRole)('heading', { name: 'This site asks for consent to' });
        const consentButton = (0, _LocatorUtils_1.getLocatorByRole)('button', { name: 'Consent' });
        if (yield consentPopupHeading.isVisible({ timeout: 2000 })) {
            yield (0, _AssertUtils_1.expectElementToBeVisible)(consentPopupHeading);
            yield click(consentPopupHeading);
            yield (0, _AssertUtils_1.expectElementToBeVisible)(consentButton);
            yield click(consentButton);
        }
    });
}
exports.acceptConsentIfVisible = acceptConsentIfVisible;
//# sourceMappingURL=action-utils.js.map