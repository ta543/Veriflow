export const testMetadata = {
  keyPressTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'TEST-005',
    description: 'Verify that key presses are correctly detected and displayed.',
    tags: ['Keyboard'],
    severity: 'NORMAL',
    suite: 'UI Tests',
    feature: 'Keyboard Interaction',
    story: 'User can press and detect keys',
  },

  dropdownTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'TEST-001',
    description: 'Verify that selecting an option in the dropdown properly updates the selected attribute.',
    tags: ['Dropdown'],
    severity: 'NORMAL',
    suite: 'UI Tests',
    feature: 'Dropdown Functionality',
    story: 'User selects a dropdown option',
  },

  loginTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'TEST-002',
    description: 'Validate that a user can successfully log in with valid credentials.',
    tags: ['Login', 'Auth'],
    severity: 'NORMAL',
    suite: 'Authentication Tests',
    feature: 'Login Flow',
    story: 'User logs in with valid credentials',
  },

  logoutTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'TEST-003',
    description: 'Validate that a user can successfully log out after logging in.',
    tags: ['Logout', 'Auth'],
    severity: 'NORMAL',
    suite: 'Authentication Tests',
    feature: 'Logout Flow',
    story: 'User logs out successfully',
  },

  checkboxTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'TEST-004',
    description: 'Verify that checkboxes can be toggled on and off correctly.',
    tags: ['Checkbox'],
    severity: 'NORMAL',
    suite: 'UI Tests',
    feature: 'Checkboxes',
    story: 'User interacts with checkboxes',
  },

  sauceDemoLoginTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'SAUCE-001',
    description: 'Validate that a user can successfully log in with valid credentials on SauceDemo.',
    tags: ['SauceDemo', 'Login', 'Authentication'],
    severity: 'NORMAL',
    suite: 'SauceDemo Tests',
    feature: 'User Authentication',
    story: 'User logs in successfully',
  },

  sauceDemoAddToCartTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'SAUCE-002',
    description: 'Verify that users can add a product to the cart on SauceDemo.',
    tags: ['SauceDemo', 'Cart', 'E-commerce'],
    severity: 'NORMAL',
    suite: 'SauceDemo Tests',
    feature: 'Shopping Cart',
    story: 'User adds a product to the cart',
  },

  sauceDemoFailedLoginTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'SAUCE-003',
    description: 'Validate that a failed login attempt does not display the Products page.',
    tags: ['SauceDemo', 'Login'],
    severity: 'NORMAL',
    suite: 'SauceDemo Tests',
    feature: 'User Authentication',
    story: 'User enters incorrect credentials and fails to log in',
  },

  automationExerciseTestCasesNavigationTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'AE-001',
    description: 'Verify that the Test Cases page is accessible from the homepage.',
    tags: ['AutomationExercise', 'Navigation', 'Test Cases'],
    severity: 'NORMAL',
    suite: 'Automation Exercise - Navigation',
    feature: 'Test Cases Page Navigation',
    story: 'User accesses the Test Cases page from the homepage',
  },

  automationExerciseSearchProductTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'AE-002',
    description: 'Validate that users can search for a product and see relevant results.',
    tags: ['AutomationExercise', 'Search', 'Products'],
    severity: 'NORMAL',
    suite: 'Automation Exercise - Products',
    feature: 'Product Search',
    story: 'User searches for a product using the search bar',
  },

  automationExerciseAddToCartTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'AE-003',
    description: 'Ensure that a product can be added to the cart and verified.',
    tags: ['AutomationExercise', 'Cart', 'Products'],
    severity: 'NORMAL',
    suite: 'Automation Exercise - Cart',
    feature: 'Add to Cart',
    story: 'User adds a product to the cart and verifies its presence',
  },

  automationExerciseLoginTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'AE-004',
    description: 'Validate that a user can successfully log in with valid credentials.',
    tags: ['AutomationExercise', 'Login', 'Authentication'],
    severity: 'NORMAL',
    suite: 'Automation Exercise - Authentication',
    feature: 'User Login',
    story: 'User logs in with valid credentials and accesses account dashboard',
  },

  automationExerciseLogoutTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'AE-005',
    description: 'Validate that a user can successfully log out after logging in.',
    tags: ['AutomationExercise', 'Logout', 'Authentication'],
    severity: 'NORMAL',
    suite: 'Automation Exercise - Authentication',
    feature: 'User Logout',
    story: 'User logs out successfully and is redirected to login page',
  },

  automationExerciseContactUsTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'AE-006',
    description: 'Verify that users can submit a contact form successfully.',
    tags: ['AutomationExercise', 'Contact Us', 'Forms'],
    severity: 'NORMAL',
    suite: 'Automation Exercise - Forms',
    feature: 'Contact Us Form',
    story: 'User fills and submits the contact form successfully',
  },

  practiceAutomationFormFieldsNavigationTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'PA-001',
    description: 'Verify that users can navigate to the Form Fields page from the homepage.',
    tags: ['PracticeAutomation', 'Navigation', 'Form Fields'],
    severity: 'NORMAL',
    suite: 'Practice Automation - Navigation',
    feature: 'Form Fields Navigation',
    story: 'User navigates to the Form Fields page',
  },

  practiceAutomationFormSubmissionTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'PA-002',
    description: 'Validate that a user can successfully fill out and submit the form.',
    tags: ['PracticeAutomation', 'Forms', 'Submission'],
    severity: 'NORMAL',
    suite: 'Practice Automation - Forms',
    feature: 'Form Submission',
    story: 'User fills out and submits a form successfully',
  },

  practiceAutomationPopupsTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'PA-003',
    description: 'Verify that popups can be opened and closed correctly.',
    tags: ['PracticeAutomation', 'Popups', 'UI'],
    severity: 'NORMAL',
    suite: 'Practice Automation - UI',
    feature: 'Popup Handling',
    story: 'User interacts with popups and closes them successfully',
  },

  practiceAutomationFileUploadTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'PA-004',
    description: 'Ensure that users can successfully upload a file.',
    tags: ['PracticeAutomation', 'File Upload', 'UI'],
    severity: 'NORMAL',
    suite: 'Practice Automation - File Handling',
    feature: 'File Upload',
    story: 'User uploads a file and verifies success message',
  },

  practiceAutomationFileDownloadTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'PA-005',
    description: 'Verify that users can download a file successfully.',
    tags: ['PracticeAutomation', 'File Download', 'UI'],
    severity: 'NORMAL',
    suite: 'Practice Automation - File Handling',
    feature: 'File Download',
    story: 'User downloads a file from the File Download page',
  },

  practiceAutomationBrokenLinksTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'PA-006',
    description: 'Check if any broken links exist on the page.',
    tags: ['PracticeAutomation', 'Broken Links', 'Validation'],
    severity: 'NORMAL',
    suite: 'Practice Automation - Validation',
    feature: 'Broken Links Verification',
    story: 'User checks for broken links and verifies their status',
  },

  apiAutomationExerciseGetAllProducts: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'AE-API-001',
    description: 'Validate that the Get All Products API returns a list of products successfully.',
    tags: ['AutomationExercise', 'API', 'Products'],
    severity: 'NORMAL',
    suite: 'Automation Exercise - API',
    feature: 'Product API',
    story: 'User retrieves a list of all products via API',
  },

  apiAutomationExerciseGetAllBrands: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'AE-API-002',
    description: 'Validate that the Get All Brands API returns a list of brands successfully.',
    tags: ['AutomationExercise', 'API', 'Brands'],
    severity: 'NORMAL',
    suite: 'Automation Exercise - API',
    feature: 'Brand API',
    story: 'User retrieves a list of all brands via API',
  },

  apiAutomationExercisePutAllBrands: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'AE-API-004',
    description: 'Validate that sending a PUT request to the Get All Brands API returns a 405 error.',
    tags: ['AutomationExercise', 'API', 'Brands'],
    severity: 'NORMAL',
    suite: 'Automation Exercise - API',
    feature: 'Brand API',
    story: 'User attempts to send an unsupported PUT request to the brands API',
  },

  apiAutomationExercisePostSearchProduct: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'AE-API-005',
    description: 'Validate that sending a POST request to search for a product returns a list of matching products.',
    tags: ['AutomationExercise', 'API', 'Search', 'Products'],
    severity: 'NORMAL',
    suite: 'Automation Exercise - API',
    feature: 'Product Search API',
    story: 'User searches for a product using the API and retrieves relevant results',
  },

  apiAutomationExerciseVerifyLoginNoEmail: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'AE-API-008',
    description: 'Validate that sending a POST request to the Verify Login API without an email returns a 400 error.',
    tags: ['AutomationExercise', 'API', 'Login'],
    severity: 'NORMAL',
    suite: 'Automation Exercise - API',
    feature: 'Login API',
    story: 'User attempts to log in without providing an email parameter'
  },

  apiAutomationExerciseDeleteVerifyLogin: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'AE-API-009',
    description: 'Validate that sending a DELETE request to the Verify Login API returns a 405 error.',
    tags: ['AutomationExercise', 'API', 'Login'],
    severity: 'NORMAL',
    suite: 'Automation Exercise - API',
    feature: 'Login API',
    story: 'User attempts to send an unsupported DELETE request to the verify login endpoint'
  },

  expandTestingWebInputsTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'EXPAND-WEB-001',
    description: 'Validate that a user can interact with various input fields and buttons on the Form Fields page of practice.expandtesting.com.',
    tags: ['ExpandTesting', 'Web', 'Inputs', 'FormFields'],
    severity: 'NORMAL',
    suite: 'ExpandTesting - Web',
    feature: 'Form Fields',
    story: 'User fills in number, text, password, and date fields, and submits the form successfully'
  },

  expandTestingLoginTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'EXPAND-WEB-002',
    description: 'Validate that a user can successfully log into the secure area using valid credentials on practice.expandtesting.com.',
    tags: ['ExpandTesting', 'Web', 'Login'],
    severity: 'CRITICAL',
    suite: 'ExpandTesting - Web',
    feature: '[EXPANDTESTING][E2E] Onboarding',
    story: 'User accesses the login page, provides valid credentials, and verifies successful login message'
  },

  expandTestingFailedRegisterTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'EXPAND-WEB-REGISTER-001',
    description: 'Validate that registration fails with invalid credentials on the Register page of practice.expandtesting.com.',
    tags: ['ExpandTesting', 'Web', 'Register', 'Negative'],
    severity: 'NORMAL',
    suite: 'ExpandTesting - Web',
    feature: '[EXPANDTESTING][E2E] Onboarding',
    story: 'User attempts to register with invalid credentials and sees an error message'
  },

  timescaleDBVerifyDataImport: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-27',
    description: 'Verify that financial data is successfully imported into the TimescaleDB business_financial_data table.',
    tags: ['TimescaleDB', 'Database', 'FinancialData', 'Import'],
    severity: 'NORMAL',
    suite: 'TimescaleDB - Financial Data',
    feature: '[TIMESCALEDB][DB] Data Import',
    story: 'Verify the financial data table contains at least one row after import.'
  },

  timescaleDBValidateColumnStructure: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-26',
    description: 'Ensure that the financial data table contains the expected column structure.',
    tags: ['TimescaleDB', 'Database', 'FinancialData', 'Schema'],
    severity: 'NORMAL',
    suite: 'TimescaleDB - Financial Data',
    feature: '[TIMESCALEDB][DB] Schema Validation',
    story: 'Ensure all expected columns exist in the financial data table.'
  },

  timescaleDBValidateFirstRowData: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-25',
    description: 'Verify the first row of the financial data table has valid and expected values.',
    tags: ['TimescaleDB', 'Database', 'FinancialData', 'RowValidation'],
    severity: 'NORMAL',
    suite: 'TimescaleDB - Financial Data',
    feature: '[TIMESCALEDB][DB] Data Validation',
    story: 'Ensure the first row of the financial data table has correct values for key fields.'
  },

  timescaleDBCalculateAverageDataValue: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-24',
    description: 'Calculate and verify the average data value in the financial data table.',
    tags: ['TimescaleDB', 'Database', 'FinancialData', 'Analytics'],
    severity: 'NORMAL',
    suite: 'TimescaleDB - Financial Data',
    feature: '[TIMESCALEDB][DB] Data Analytics',
    story: 'Compute the average data value to ensure proper financial calculations.'
  },

  timescaleDBCheckTotalDataValueForQuarter: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-19',
    description: 'Verify that the total data value for a specific quarter is within the expected range.',
    tags: ['TimescaleDB', 'Database', 'FinancialData', 'QuarterlyReports'],
    severity: 'NORMAL',
    suite: 'TimescaleDB - Financial Data',
    feature: '[TIMESCALEDB][DB] Quarterly Reports',
    story: 'Ensure the financial data is correctly aggregated for quarterly reporting.'
  },

  timescaleDBFindMissingPeriodsForSeries: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-18',
    description: 'Check for missing periods in a financial data series.',
    tags: ['TimescaleDB', 'Database', 'FinancialData', 'DataCompleteness'],
    severity: 'MEDIUM',
    suite: 'TimescaleDB - Financial Data',
    feature: '[TIMESCALEDB][DB] Data Completeness',
    story: 'Identify missing months in a financial time series.'
  },

  timescaleDBVerifyDataValueTrend: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-17',
    displayname: '[Data Analysis] Verify Data Value Trend',
    description: 'Ensure that financial data follows a logical increasing or decreasing trend.',
    tags: ['TimescaleDB', 'Database', 'FinancialData', 'DataTrend'],
    severity: 'NORMAL',
    suite: 'TimescaleDB - Financial Data',
    feature: '[TIMESCALEDB][DB] Data Analysis',
    story: 'Verify that financial data values follow a reasonable trend over time.'
  },

  timescaleDBCheckDataConsistency: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-16',
    description: 'Verify that financial data remains consistent across periods.',
    tags: ['TimescaleDB', 'Database', 'FinancialData', 'Consistency'],
    severity: 'CRITICAL',
    suite: 'TimescaleDB - Financial Data',
    feature: '[TIMESCALEDB][DB] Data Consistency',
    story: 'Ensure there are no unexplained inconsistencies in financial records.'
  },

  timescaleDBValidateDataRange: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-15',
    description: 'Check that financial data values fall within an acceptable range.',
    tags: ['TimescaleDB', 'Database', 'FinancialData', 'Validation'],
    severity: 'NORMAL',
    suite: 'TimescaleDB - Financial Data',
    feature: '[TIMESCALEDB][DB] Data Validation',
    story: 'Ensure that financial data values are within expected minimum and maximum thresholds.'
  },

  timescaleDBCheckDuplicateEntries: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-13',
    description: 'Verify that there are no duplicate records in the financial data table.',
    tags: ['TimescaleDB', 'Database', 'FinancialData', 'Duplicates'],
    severity: 'CRITICAL',
    suite: 'TimescaleDB - Financial Data',
    feature: '[TIMESCALEDB][DB] Data Integrity',
    story: 'Ensure that no duplicate records exist in the financial data table.'
  },

  timescaleDBVerifyDataRetention: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-12',
    description: 'Ensure that financial data retention policy is properly enforced and older data is not lost.',
    tags: ['TimescaleDB', 'Database', 'FinancialData', 'Retention'],
    severity: 'MEDIUM',
    suite: 'TimescaleDB - Financial Data',
    feature: '[TIMESCALEDB][DB] Data Retention',
    story: 'Ensure that financial data is retained for a predefined period.'
  },

  timescaleDBValidateDataRangesPerSubject: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-11',
    description: 'Validate that financial data values remain within expected ranges per subject category.',
    tags: ['TimescaleDB', 'Database', 'FinancialData', 'DataValidation', 'Regression'],
    severity: 'CRITICAL',
    suite: 'TimescaleDB - Financial Data',
    feature: '[TIMESCALEDB][DB] Data Validation',
    story: 'Ensure financial data values per subject do not exceed predefined thresholds.'
  },

  timescaleDBCheckForGaps: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-10',
    description: 'Check for gaps in consecutive time periods for financial data records.',
    tags: ['TimescaleDB', 'Database', 'FinancialData', 'Gaps'],
    severity: 'CRITICAL',
    suite: 'TimescaleDB - Financial Data',
    feature: '[TIMESCALEDB][DB] Data Completeness',
    story: 'Ensure that no expected time periods are missing in the financial data records.'
  },

  timescaleDBValidateAgainstReferenceTable: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-9',
    description: 'Verify that all records in the financial data table have corresponding reference records.',
    tags: ['TimescaleDB', 'Database', 'FinancialData', 'ReferenceValidation'],
    severity: 'CRITICAL',
    suite: 'TimescaleDB - Financial Data',
    feature: '[TIMESCALEDB][DB] Data Integrity',
    story: 'Ensure all financial data records align with an authoritative reference dataset.'
  },

  timescaleDBCheckOutliers: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-8',
    description: 'Identify financial data values that significantly deviate from the mean, indicating potential errors.',
    tags: ['TimescaleDB', 'Database', 'FinancialData', 'Outliers'],
    severity: 'MEDIUM',
    suite: 'TimescaleDB - Financial Data',
    feature: '[TIMESCALEDB][DB] Data Quality',
    story: 'Ensure that outlier financial data values are detected and reviewed.'
  },

  timescaleDBVerifyDataCompleteness: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-7',
    displayname: '[Data Validation] Verify Data Completeness for Each Series',
    description: 'Verify that every series_reference contains data for each expected period.',
    tags: ['TimescaleDB', 'Database', 'FinancialData', 'Completeness'],
    parameter: 'TEST',
    severity: 'CRITICAL',
    suite: 'TimescaleDB - Financial Data',
    feature: '[TIMESCALEDB][DB] Data Integrity',
    story: 'Ensure financial data is complete for all periods across all series.'
  },

  timescaleDBVerifyFinancialTrend: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-6',
    displayname: '[Data Validation] Verify Data Completeness for Each Series',
    description: 'Ensure financial data follows a consistent increasing or decreasing trend.',
    tags: ['TimescaleDB', 'Database', 'FinancialData', 'Trends'],
    severity: 'MEDIUM',
    suite: 'TimescaleDB - Financial Data',
    feature: '[TIMESCALEDB][DB] Data Analysis',
    story: 'Identify whether financial data trends are stable or have unexpected fluctuations.'
  },

  timescaleDBDetectAnomalousSpikes: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-5',
    displayname: '[Data Validation] Verify Data Completeness for Each Series',
    description: 'Detect anomalous financial data spikes that may indicate fraud or errors.',
    tags: ['TimescaleDB', 'Database', 'FinancialData', 'Anomalies'],
    severity: 'CRITICAL',
    suite: 'TimescaleDB - Financial Data',
    feature: '[TIMESCALEDB][DB] Data Quality',
    story: 'Ensure that unexpected large spikes in financial data are detected and investigated.'
  },

  timescaleDBMeasurePerformance: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-4',
    displayname: '[Data Validation] Verify Data Completeness for Each Series',
    description: 'Measure query execution time to ensure optimal database performance.',
    tags: ['TimescaleDB', 'Database', 'Performance', 'Optimization'],
    severity: 'NORMAL',
    suite: 'TimescaleDB - Financial Data',
    feature: '[TIMESCALEDB][DB] Performance',
    story: 'Monitor and validate database query response times to prevent slow performance.'
  },

  timescaleDBVerifyForeignKeyIntegrity: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-3',
    displayname: '[Data Validation] Verify Foreign Keys for Each Series',
    description: 'Verify that all series_reference values in financial data exist in the reference table.',
    tags: ['TimescaleDB', 'Database', 'ForeignKeys', 'DataIntegrity'],
    severity: 'CRITICAL',
    suite: 'TimescaleDB - Financial Data',
    feature: '[TIMESCALEDB][DB] Data Validation',
    story: 'Ensure financial data does not contain orphaned series_reference values.'
  },

  timescaleDBDynamicSwitchingTest: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-21',
    displayname: '[Data Validation] Verify Data Completeness for Each Series',
    description: 'Ensure test databases can be dynamically created from a template and switched between at runtime.',
    tags: ['TimescaleDB', 'Database', 'Failover'],
    severity: 'CRITICAL',
    suite: 'TimescaleDB - Financial Data',
    feature: '[TIMESCALEDB][DB] Test DB Initialization and Switching',
    story: 'Validate dynamic creation and switching of multiple TimescaleDB test instances based on a template.'
  },
  
  timescaleDBRestartAndVerifyFromPeer: {
    owner: 'Tobias Andersen - [tobias@tobiasa.com]',
    tms: 'VF-22',
    displayname: '[Cluster Resilience] Restart & Verify From Peer',
    description: 'Restart one TimescaleDB container and verify from another container that it comes back online using pg_isready.',
    tags: ['TimescaleDB', 'DB', 'Failover', 'HealthCheck', 'Container'],
    severity: 'CRITICAL',
    suite: 'TimescaleDB | DB',
    feature: '[TIMESCALEDB][DB] Cluster Resilience',
    // skipReason: '⚠️ Temporarily disabled due to container startup flakiness on CI',
    story: 'Ensure the system can monitor and confirm the availability of a peer database after restart.'
  },
};
