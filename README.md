
# VeriFlow - Advanced QA Framework

VeriFlow is an advanced, scalable, and feature-rich QA automation framework built with **Elixir** and **Phoenix Framework**. The framework is designed to handle complex test scenarios, automate testing processes, and integrate with modern CI/CD pipelines. It allows for efficient test case management, parallel test execution, reporting, and more, making it the ideal tool for continuous testing in modern development environments.

## Features

- **Test Case Management**: Manage test cases with full CRUD support (Create, Read, Update, Delete) and store metadata such as test steps, expected results, actual results, status, and priority.
- **Automated Test Execution**: Automate test execution using tools like **ExUnit** and **Wallaby**. Run tests in multiple environments (local, staging, production).
- **Parallel Test Execution**: Execute tests in parallel across multiple worker nodes to speed up test suites.
- **CI/CD Integration**: Integrates seamlessly with **GitHub Actions** to trigger tests automatically when changes are pushed to the repository.
- **Advanced Reporting & Analytics**: Generate detailed reports with pass/fail rates, execution times, and test trends. Visualize results over time and across different environments.
- **Security & Access Control**: Implement Role-Based Access Control (RBAC) to define different user roles (admin, tester, viewer) and ensure secure access to test data.
- **Test Environment Management**: Define and manage test environments (e.g., local, staging, production) with environment-specific configurations.
- **Data-Driven Testing**: Use external datasets (CSV, JSON, databases) to drive tests and perform data-driven testing across multiple test cases.

## Installation

### Prerequisites

Make sure you have the following dependencies installed:

- **Elixir**: Install from the [official Elixir website](https://elixir-lang.org/install.html).
- **Phoenix Framework**: This project is based on Phoenix, which requires Erlang/OTP. You can install it by following the [Phoenix installation guide](https://hexdocs.pm/phoenix/installation.html).

### Steps to Install

1. Clone this repository:

   ```bash
   git clone https://github.com/ta543/veriflow.git
   cd veriflow
   ```

2. Install dependencies:

   ```bash
   mix deps.get
   ```

3. Set up the database:

   Create and migrate the database (if applicable):

   ```bash
   mix ecto.create
   mix ecto.migrate
   ```

4. Start the Phoenix server:

   ```bash
   mix phx.server
   ```

   The application should now be running at `http://localhost:4000`.

## Configuration

The default configuration for the application is stored in `config/config.exs`. You can modify the configuration for different environments (e.g., staging, production) in the respective environment files (e.g., `config/prod.exs`).

## Usage

### Test Case Management

- Create, read, update, and delete test cases from the web interface.
- Each test case can store metadata such as:
  - Test Steps
  - Expected Results
  - Actual Results
  - Status
  - Priority

### Automated Test Execution

- Run automated tests using **ExUnit** and **Wallaby**.
- Trigger tests for different environments (local, staging, production).
- Execute tests in parallel across multiple worker nodes.

### Reporting & Analytics

- View detailed reports on test executions.
- See pass/fail rates, execution time, and trends.
- Visualize test results over time and by environment.

### CI/CD Integration

- **GitHub Actions**: Set up to run tests automatically whenever changes are pushed to the repository. 
- Real-time feedback with detailed reports on the test execution. You can check the status of your tests directly in the **Actions** tab of your GitHub repository.

### Security & Access Control

- Implement Role-Based Access Control (RBAC) for different user roles.
- Control access to test data and reports.

## Contributing

We welcome contributions to VeriFlow! To get started:

1. Fork the repository.
2. Clone your fork:
   ```bash
   git clone https://github.com/yourusername/veriflow.git
   ```
3. Create a new branch for your changes:
   ```bash
   git checkout -b feature/my-new-feature
   ```
4. Commit your changes:
   ```bash
   git commit -am 'Add new feature'
   ```
5. Push to your fork:
   ```bash
   git push origin feature/my-new-feature
   ```
6. Submit a pull request to the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## GitHub Actions Setup

To configure **GitHub Actions** for CI/CD:

1. Create a `.github/workflows/ci.yml` file in the root directory of your repository.
   
2. Add the following content to **ci.yml**:

```yaml
name: CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Set up Elixir
      uses: erlef/setup-elixir@v1
      with:
        otp-version: '23.3'
        elixir-version: '1.12.2'

    - name: Install dependencies
      run: |
        mix deps.get
        mix deps.compile

    - name: Run tests
      run: |
        mix test --cover
```

This **GitHub Actions** configuration automatically:

- Runs tests on every **push** or **pull request** to the `main` branch.
- Sets up **Elixir** and **OTP**.
- Installs project dependencies.
- Runs **ExUnit** tests and checks test coverage.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
