"use strict";
/**
 * playwright.config.ts: This module is responsible for configuring the Playwright test runner.
 * It includes settings for test execution, browser configuration, and environment variables.
 * See https://playwright.dev/docs/test-configuration for more details.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOADSTATE = exports.LOCAL_HOST_URL = void 0;
const tslib_1 = require("tslib");
const _TIMEOUT_1 = require("@TIMEOUT");
const test_1 = require("@playwright/test");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config({ path: '.env' });
const os_1 = tslib_1.__importDefault(require("os"));
const BASE_URL = process.env.URL || 'https://the-internet.herokuapp.com/';
const startLocalHost = process.env.URL && process.env.URL.includes('localhost');
exports.LOCAL_HOST_URL = 'https://localhost:9002';
const Reporter = require.resolve('./src/tobias-playwright/setup/reporter');
/**
 * Default load state to be used while loading a URL or performing a click and navigate operation.
 * The load state is set to 'domcontentloaded', which means the action will wait until the 'DOMContentLoaded' event is fired.
 */
exports.LOADSTATE = 'domcontentloaded';
exports.default = (0, test_1.defineConfig)(Object.assign({ 
    /**
     * The directory where tests are located.
     * See https://playwright.dev/docs/api/class-testconfig#testconfig-testdir
     */
    testDir: './tests/testcases', testMatch: '**/*.spec.ts', outputDir: "allure/allure-results", 
    // testMatch: ['**/*.spec.ts', '**/*.test.ts'],
    /**
     * Determines whether to run tests within each spec file in parallel, in addition to running the spec files themselves in parallel.
     * See https://playwright.dev/docs/api/class-testconfig#testconfig-fullyparallel
     */
    fullyParallel: false, 
    /**
     * Whether to fail the build on CI if you accidentally left test.only in the source code.
     * See https://playwright.dev/docs/api/class-testconfig#testconfig-forbidonly
     */
    forbidOnly: !!process.env.CI, 
    /**
     * The number of times to retry failed tests. Retries value is only set to happen on CI.
     * See https://playwright.dev/docs/api/class-testconfig#testconfig-retries
     */
    retries: process.env.CI ? 2 : 0, 
    /**
     * The number of worker threads to use for running tests. This is set to a different value on CI.
     * See https://playwright.dev/docs/api/class-testconfig#testconfig-workers
     */
    workers: process.env.CI ? 3 : 6, 
    /*  Note: Add allure-playwright report */
    /**
     * The reporter to use. This can be set to use a different value on CI.
     * See https://playwright.dev/docs/test-reporters
     */
    reporter: [
        ['allure-playwright', { outputFolder: 'allure/allure-results' }],
        ['junit', { outputFile: 'test-results.xml' }],
        [Reporter],
        ['json', { outputFile: 'allure/allure-results/test-results.json' }],
        ['html', { outputFolder: 'allure/allure-report', open: 'never' }],
        // ['list'],
    ], 
    /**
     * Shared settings for all the projects below.
     * See https://playwright.dev/docs/api/class-testoptions
     */
    globalSetup: require.resolve('./src/tobias-playwright/setup/global-setup.ts'), globalTeardown: require.resolve('./src/tobias-playwright/setup/global-teardown.ts'), timeout: _TIMEOUT_1.TEST_TIMEOUT, expect: {
        timeout: _TIMEOUT_1.EXPECT_TIMEOUT,
    }, use: {
        headless: true,
        /* Sets extra headers for CloudFlare. */
        extraHTTPHeaders: {
            'CF-Access-Client-Id': process.env.CF_CLIENT_ID || '',
            'CF-Access-Client-Secret': process.env.CF_CLIENT_SECRET || '',
        },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        testIdAttribute: 'qa-target',
        /**
         * The base URL to be used in navigation actions such as `await page.goto('/')`.
         * This allows for shorter and more readable navigation commands in the tests.
         */
        baseURL: BASE_URL,
        /* Records traces after each test failure for debugging purposes. */
        trace: 'retain-on-failure',
        /* Captures screenshots/videos after each test to provide visual context. */
        screenshot: 'on',
        video: 'on',
        /* Sets a timeout for actions like click, fill, select to prevent long-running operations. */
        actionTimeout: _TIMEOUT_1.ACTION_TIMEOUT,
        /* Sets a timeout for page loading navigations like goto URL, go back, reload, waitForNavigation to prevent long page loads. */
        navigationTimeout: _TIMEOUT_1.NAVIGATION_TIMEOUT,
    }, 
    /**
     * Configure projects for major browsers.
     * See https://playwright.dev/docs/test-configuration#projects
     */
    projects: [
        {
            name: 'Chrome',
            use: Object.assign(Object.assign({}, test_1.devices['Desktop Chrome']), { viewport: { width: 1600, height: 1000 }, launchOptions: {
                    args: ['--disable-web-security'],
                    /* --auto-open-devtools-for-tabs option is used to open a test with Network tab for debugging. It can help in analyzing network requests and responses.*/
                    // args: ["--disable-web-security","--auto-open-devtools-for-tabs"],
                    slowMo: 0,
                } }),
        },
        /*
    
        {
          name: 'firefox',
          use: {
            ...devices['Desktop Firefox'],
            viewport: { width: 1600, height: 1000 },
            launchOptions: {
              firefoxUserPrefs: {
                'browser.cache.disk.enable': false,
                'browser.cache.memory.enable': false,
              },
            },
          },
        },
    
        {
          name: 'webkit',
          use: {
            ...devices['Desktop Safari'],
            viewport: { width: 1600, height: 1000 },
          },
        },
    
        // Test against mobile viewports.
        {
          name: 'Mobile Chrome',
          use: { ...devices['Pixel 5'] },
        },
        {
          name: 'Mobile Safari',
          use: { ...devices['iPhone 12'] },
        },
    
        // Test against branded browsers.
        {
          name: 'Microsoft Edge',
          use: { ...devices['Desktop Edge'], channel: 'msedge' },
        },
        {
          name: 'Google Chrome',
          use: { ...devices['Desktop Chrome'], channel: 'chrome' },
        },
     */
    ] }, (startLocalHost && {
    webServer: {
        cwd: `${os_1.default.homedir()}/repos/ui`,
        command: 'npm start ui-server',
        url: exports.LOCAL_HOST_URL,
        ignoreHTTPSErrors: true,
        timeout: 60 * 1000,
        reuseExistingServer: true,
        stdout: 'pipe',
        stderr: 'pipe',
    },
})));
//# sourceMappingURL=playwright.config.js.map