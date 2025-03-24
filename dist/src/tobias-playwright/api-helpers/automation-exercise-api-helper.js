"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVerifyLogin = exports.verifyLogin = exports.searchProduct = exports.putAllBrands = exports.getAllBrands = exports.getAllProducts = exports.initializeAPI = void 0;
const tslib_1 = require("tslib");
const _APIUtils_1 = require("@APIUtils");
const BASE_URL = 'https://automationexercise.com/api';
function initializeAPI(request) {
    _APIUtils_1.APIUtils.init(request);
}
exports.initializeAPI = initializeAPI;
function getAllProducts() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield _APIUtils_1.APIUtils.GET(`${BASE_URL}/productsList`);
    });
}
exports.getAllProducts = getAllProducts;
function getAllBrands() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield _APIUtils_1.APIUtils.GET(`${BASE_URL}/brandsList`);
    });
}
exports.getAllBrands = getAllBrands;
function putAllBrands() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const response = yield _APIUtils_1.APIUtils.PUT(`${BASE_URL}/brandsList`);
        return {
            status: response.status(),
            body: yield response.json()
        };
    });
}
exports.putAllBrands = putAllBrands;
function searchProduct(productName) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const response = yield _APIUtils_1.APIUtils.POST(`${BASE_URL}/searchProduct`, {
            search_product: productName
        });
        return {
            status: response.status(),
            body: yield response.json()
        };
    });
}
exports.searchProduct = searchProduct;
function verifyLogin(email, password) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const requestBody = {};
        if (email)
            requestBody.email = email;
        if (password)
            requestBody.password = password;
        const response = yield _APIUtils_1.APIUtils.POST(`${BASE_URL}/verifyLogin`, requestBody);
        return {
            status: response.status(),
            body: yield response.json()
        };
    });
}
exports.verifyLogin = verifyLogin;
function deleteVerifyLogin() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const response = yield _APIUtils_1.APIUtils.DEL(`${BASE_URL}/verifyLogin`);
        return {
            status: response.status(),
            body: yield response.json()
        };
    });
}
exports.deleteVerifyLogin = deleteVerifyLogin;
//# sourceMappingURL=automation-exercise-api-helper.js.map