"use strict";
/**
 * api-utils.ts: This module provides a set of utility functions for making API requests in Playwright tests.
 * These utilities include GET, POST, PUT, DELETE, and other common HTTP request methods.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIUtils = void 0;
const tslib_1 = require("tslib");
const test_1 = require("@playwright/test");
class APIUtils {
    static init(request) {
        APIUtils.request = request;
    }
    /**
     * 1. General API Methods: This section contains functions for making common HTTP requests.
     * These functions include GET, POST, PUT, DELETE, and handling headers.
     */
    /**
     * Sends a GET request to the specified endpoint.
     * @param {APIRequestContext} request - The Playwright API request context.
     * @param {string} endpoint - The URL of the endpoint.
     * @param {object} headers - Optional headers for the request.
     * @returns {Promise<APIResponse>} - The API response.
     */
    static GET(endpoint, headers = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield APIUtils.request.get(endpoint, {
                headers: Object.assign({ 'Content-Type': 'application/json' }, headers)
            });
        });
    }
    /**
     * Sends a POST request to the specified endpoint with a JSON payload.
     * @param {APIRequestContext} request - The Playwright API request context.
     * @param {string} endpoint - The URL of the endpoint.
     * @param {object} data - The JSON payload to send.
     * @param {object} headers - Optional headers for the request.
     * @returns {Promise<APIResponse>} - The API response.
     */
    static POST(endpoint, data, headers = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield APIUtils.request.post(endpoint, {
                headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
                data
            });
        });
    }
    /**
     * Sends a PUT request to the specified endpoint with a JSON payload.
     * @param {APIRequestContext} request - The Playwright API request context.
     * @param {string} endpoint - The URL of the endpoint.
     * @param {object} data - The JSON payload to send.
     * @param {object} headers - Optional headers for the request.
     * @returns {Promise<APIResponse>} - The API response.
     */
    static PUT(endpoint, data = {}, headers = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield APIUtils.request.put(endpoint, {
                headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
                data
            });
        });
    }
    /**
     * Sends a DELETE request to the specified endpoint.
     * @param {APIRequestContext} request - The Playwright API request context.
     * @param {string} endpoint - The URL of the endpoint.
     * @param {object} headers - Optional headers for the request.
     * @returns {Promise<APIResponse>} - The API response.
     */
    static DEL(endpoint, headers = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield APIUtils.request.delete(endpoint, {
                headers: Object.assign({ 'Content-Type': 'application/json' }, headers)
            });
        });
    }
    /**
     * Sends a PATCH request to the specified endpoint with a JSON payload.
     * @param {APIRequestContext} request - The Playwright API request context.
     * @param {string} endpoint - The URL of the endpoint.
     * @param {object} headers - Optional headers for the request.
     * @param {object} data - The JSON payload to send.
     * @returns {Promise<APIResponse>} - The API response.
     */
    static PATCH(endpoint, data = {}, headers = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield APIUtils.request.patch(endpoint, {
                headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
                data
            });
        });
    }
    /**
     * 2. API Debugging & Logging: This section contains functions to log API responses for debugging purposes.
     */
    /**
     * 3. API Validation Helpers: This section contains functions to validate API responses.
     */
    /**
     * Validates the status code of an API response.
     * @param {APIResponse | { status: number; body: any }} response - The API response object.
     * @param {number} expectedStatus - The expected HTTP status code.
     */
    static APICode(response, expectedStatus) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const statusCode = typeof response.status === 'function' ? response.status() : response.status;
            (0, test_1.expect)(statusCode).toBe(expectedStatus);
        });
    }
    /**
     * Validates that an API response contains specific JSON properties with expected values.
     * @param {APIResponse | { body: any }} response - The API response object.
     * @param {string} key - The JSON key to validate.
     * @param {any} expectedValue - The expected value of the key.
     */
    static APIBody(response, key, expectedValue) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let responseBody;
            if ('json' in response && typeof response.json === 'function') {
                responseBody = yield response.json();
            }
            else if ('body' in response) {
                responseBody = response.body;
            }
            else {
                throw new Error('Invalid response format. Expected APIResponse or an object with status and body.');
            }
            (0, test_1.expect)(responseBody).toHaveProperty(key, expectedValue);
        });
    }
}
exports.APIUtils = APIUtils;
//# sourceMappingURL=api-utils.js.map