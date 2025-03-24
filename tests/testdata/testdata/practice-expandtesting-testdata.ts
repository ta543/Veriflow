/**
 * (C) VeriFlow 2025
 *
 * Test Data for Login Tests on practice.expandtesting.com
 */

export const ExpandTestingLoginTestData = {
  validCredentials: {
      username: 'practice',
      password: 'SuperSecretPassword!',
  },
  invalidCredentials: {
      username: 'wrongUser',
      password: 'wrongPassword',
  },
};

export const ExpandTestingRegisterTestData = {
  invalidCredentials: {
      username: 'test',
      password: 'test',
      confirmPassword: 'test',
  }
};

