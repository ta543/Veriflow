"use strict";
/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code HomePage}.
 *
 * VeriFlow Test Automation - ExpandTesting | HomePage
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigateToRegisterPage = exports.navigateToLoginPage = exports.navigateToWebInputPage = exports.verifyHomePageURL = exports.navigateToHomePage = void 0;
const tslib_1 = require("tslib");
const _ActionUtils_1 = require("@ActionUtils");
const _PageUtils_1 = require("@PageUtils");
const _AssertUtils_1 = require("@AssertUtils");
const _LocatorUtils_1 = require("@LocatorUtils");
const homePageURL = 'https://practice.expandtesting.com/';
// Locators
const webInputButton = () => (0, _LocatorUtils_1.getLocator)('.card-footer > div > .btn').first();
const clickLoginLinkButton = () => (0, _LocatorUtils_1.getLocator)('div:nth-child(2) > .card > .card-footer > div > .btn').first();
const registerCardFooterButton = () => (0, _LocatorUtils_1.getLocator)('div:nth-child(3) > .card > .card-footer > div > .btn').first();
// Methods
function navigateToHomePage() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _PageUtils_1.gotoURL)(homePageURL);
        yield (0, _PageUtils_1.wait)(1000);
        yield (0, _ActionUtils_1.acceptConsentIfVisible)();
    });
}
exports.navigateToHomePage = navigateToHomePage;
function verifyHomePageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectPageToHaveURL)(new RegExp(homePageURL));
    });
}
exports.verifyHomePageURL = verifyHomePageURL;
function navigateToWebInputPage() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(webInputButton());
        yield (0, _PageUtils_1.wait)(1000);
    });
}
exports.navigateToWebInputPage = navigateToWebInputPage;
function navigateToLoginPage() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(clickLoginLinkButton());
        yield (0, _PageUtils_1.wait)(1000);
    });
}
exports.navigateToLoginPage = navigateToLoginPage;
function navigateToRegisterPage() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(registerCardFooterButton());
        yield (0, _PageUtils_1.wait)(1000);
    });
}
exports.navigateToRegisterPage = navigateToRegisterPage;
//# sourceMappingURL=home-page.js.map