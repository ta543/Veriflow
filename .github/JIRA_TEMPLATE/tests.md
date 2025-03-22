📝 [VeriFlow][E2E] Slack & Allure Integration

🔢 PR  
4 (https://github.com/ta543/Veriflow/pull/4)

🔗 Related Jira Ticket  
[VF-XX] (Replace with actual ticket link)

🎯 Test Objective  
Validate the integration between Slack and Allure reporting in VeriFlow's E2E automation pipeline.  
Ensure test execution results are correctly published to Slack and Allure.  

🛠️ Test Steps  

| Step No. | Action | Expected Result |
|----------|--------|----------------|
| 1 | Trigger an E2E test execution in the VeriFlow pipeline. | The test suite execution starts. |
| 2 | Verify that Allure reports are generated. | Allure reports are created with proper logs and test execution details. |
| 3 | Check Slack notifications for test execution updates. | A Slack message is posted with test results (Passed/Failed). |
| 4 | Validate Allure report links in Slack notifications. | Clicking the Allure report link redirects to the correct report. |
| 5 | Ensure error logs are properly captured in Slack for failed tests. | Failure logs and debugging information are included in the Slack message. |

📊 Test Data  

- **Test Suite:** VeriFlow E2E Test Suite  
- **Trigger Method:** Automated CI/CD Pipeline Execution  
- **Slack Channel:** `#qa-notifications`  
- **Allure Report URL Format:** `[BASE_URL]/allure-report/[RUN_ID]`  

🖥️ Test Environment  

- **Platform:** VeriFlow Automation Framework  
- **Execution Mode:** CI/CD Pipeline (GitHub Actions / Jenkins)  
- **Slack Webhook Configuration:** Enabled  
- **Allure Reporting:** Integrated  

✅ Test Execution Status  

- [x] **Passed** ✅  
- [ ] **Failed** ❌  
- [ ] **Blocked** ⛔  
- [ ] **Not Run** 🔄  

📸 Screenshot / Video (If Applicable)  
_Attach screenshots of the Slack message, Allure report, or logs if needed._  

⚠️ Impact Analysis  

- **Affected Features:**  
  - Slack notification system  
  - Allure report generation  
  - CI/CD pipeline execution  

- **Potential Risks:**  
  - Missing test execution notifications  
  - Incorrect or broken Allure links  
  - Delayed or duplicate Slack messages  

📌 Additional Notes  

- Ensure Slack messages are **formatted correctly**.  
- Validate timestamps and consistency between **Allure reports and Slack notifications**.  
- Check for **duplicate messages** in Slack if multiple executions occur.  
