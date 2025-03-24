"use strict";
/**
 * (C) VeriFlow 2025 - Automation Exercise API Tests
 * This test suite validates API endpoints on automationexercise.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const test_1 = require("@playwright/test");
const setupAllure_1 = require("setup/setupAllure");
const _AutomationExerciseAPI_1 = require("@AutomationExerciseAPI");
const _APIUtils_1 = require("@APIUtils");
const API = tslib_1.__importStar(require("@AutomationExerciseAPI"));
let apiRequest;
test_1.test.beforeAll(({}) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    apiRequest = yield test_1.request.newContext();
    (0, _AutomationExerciseAPI_1.initializeAPI)(apiRequest);
}));
test_1.test.afterAll(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield apiRequest.dispose();
}));
test_1.test.describe.parallel('Automation Exercise | API', () => {
    (0, test_1.test)('Get All Products List', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('apiAutomationExerciseGetAllProducts');
        const response = yield API.getAllProducts();
        yield _APIUtils_1.APIUtils.APICode(response, 200);
        const responseBody = yield response.json();
        (0, test_1.expect)(responseBody).toHaveProperty('products');
    }));
    (0, test_1.test)('Get All Brands List', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('apiAutomationExerciseGetAllBrands');
        const response = yield API.getAllBrands();
        yield _APIUtils_1.APIUtils.APICode(response, 200);
        const responseBody = yield response.json();
        (0, test_1.expect)(responseBody).toHaveProperty('brands');
    }));
    (0, test_1.test)('PUT Request - All Brands List should return 405', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('apiAutomationExercisePutAllBrands');
        const response = yield API.putAllBrands();
        (0, test_1.expect)(response.body.responseCode).toBe(405);
        (0, test_1.expect)(response.body.message).toBe("This request method is not supported.");
    }));
    (0, test_1.test)('POST Request - Search for a Product', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('apiAutomationExercisePostSearchProduct');
        const productName = "tshirt";
        const response = yield API.searchProduct(productName);
        yield _APIUtils_1.APIUtils.APICode(response, 200);
        yield _APIUtils_1.APIUtils.APIBody(response, 'responseCode', 400);
        yield _APIUtils_1.APIUtils.APIBody(response, 'message', "Bad request, search_product parameter is missing in POST request.");
    }));
    (0, test_1.test)('POST Request - Verify Login without Email Parameter', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('apiAutomationExerciseVerifyLoginNoEmail');
        const requestBody = {
            password: "password123"
        };
        const response = yield API.verifyLogin(undefined, requestBody.password);
        yield _APIUtils_1.APIUtils.APICode(response, 200);
        yield _APIUtils_1.APIUtils.APIBody(response, 'responseCode', 400);
        yield _APIUtils_1.APIUtils.APIBody(response, 'message', "Bad request, email or password parameter is missing in POST request.");
    }));
    (0, test_1.test)('DELETE Request - Verify Login should return 405', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, setupAllure_1.setupAllure)('apiAutomationExerciseDeleteVerifyLogin');
        const response = yield API.deleteVerifyLogin();
        (0, test_1.expect)(response.status).toBe(200);
        (0, test_1.expect)(response.body).toHaveProperty('responseCode', 405);
        (0, test_1.expect)(response.body).toHaveProperty('message', "This request method is not supported.");
    }));
});
//# sourceMappingURL=practice-expandtesting-tests.spec.js.map