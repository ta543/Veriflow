"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAllure = void 0;
const allure_playwright_1 = require("allure-playwright");
const test_1 = require("@playwright/test");
const test_metadata_1 = require("setup/test-metadata");
function setupAllure(testId) {
    const details = test_metadata_1.testMetadata[testId];
    allure_playwright_1.allure.label('owner', details.owner);
    allure_playwright_1.allure.tms(details.tms, `https://veriflowqa.atlassian.net/browse/${details.tms}`);
    allure_playwright_1.allure.description(details.description);
    if (details.displayname) {
        allure_playwright_1.allure.displayName(details.displayname);
    }
    if (details.parameter) {
        allure_playwright_1.allure.parameter('parameter', details.parameter);
    }
    allure_playwright_1.allure.severity(details.severity.toUpperCase());
    details.tags.forEach(tag => allure_playwright_1.allure.tag(tag));
    if (details.suite)
        allure_playwright_1.allure.suite(details.suite);
    if (details.feature)
        allure_playwright_1.allure.feature(details.feature);
    if (details.story)
        allure_playwright_1.allure.story(details.story);
    allure_playwright_1.allure.attachment('Test Metadata', JSON.stringify(details, null, 2), 'application/json');
    if (details.skipReason) {
        test_1.test.skip(true, details.skipReason);
    }
}
exports.setupAllure = setupAllure;
//# sourceMappingURL=setupAllure.js.map