"use strict";
/**
 * (C) VeriFlow 2025
 *
 * Test Data for Login Tests on practice.expandtesting.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpandTestingRegisterTestData = exports.ExpandTestingLoginTestData = void 0;
exports.ExpandTestingLoginTestData = {
    validCredentials: {
        username: 'practice',
        password: 'SuperSecretPassword!',
    },
    invalidCredentials: {
        username: 'wrongUser',
        password: 'wrongPassword',
    },
};
exports.ExpandTestingRegisterTestData = {
    invalidCredentials: {
        username: 'test',
        password: 'test',
        confirmPassword: 'test',
    }
};
//# sourceMappingURL=practice-expandtesting-testdata.js.map