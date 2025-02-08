#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status

# Define directories
SCRIPT_DIR="/Volumes/chappy/chappy/Coding/Projects/work/personal/QA/VeriFlow/.github/scripts"
PROJECT_ROOT="$SCRIPT_DIR/../../"
RESULTS_DIR="$PROJECT_ROOT/test-results"
ALLURE_RESULTS_DIR="$PROJECT_ROOT/allure-results"
ALLURE_REPORT_DIR="$PROJECT_ROOT/allure-report"

# Ensure Allure CLI is installed
if ! command -v allure &> /dev/null; then
    echo "❌ Allure CLI is not installed. Installing Allure..."
    sudo apt-add-repository -y ppa:qameta/allure
    sudo apt-get update
    sudo apt-get install -y allure
fi

# Remove existing directories if they exist
echo "🗑️ Cleaning up old test results..."
rm -rf "$RESULTS_DIR" "$ALLURE_RESULTS_DIR" "$ALLURE_REPORT_DIR"

# Recreate necessary directories
mkdir -p "$RESULTS_DIR"
mkdir -p "$ALLURE_RESULTS_DIR"

echo "🚀 Running Elixir tests with JUnitFormatter..."
cd "$PROJECT_ROOT" || exit 1  # Move to the project root

# Run only the specific test (Line 25 of home_page_test.exs)
MIX_ENV=test mix test test/tests/home_page_test.exs:25 --formatter JUnitFormatter --formatter ExUnit.CLIFormatter

TEST_REPORT="$PROJECT_ROOT/test-results/test-junit-report.xml"

if [ -f "$TEST_REPORT" ]; then
    if [ "$TEST_REPORT" != "$RESULTS_DIR/test-junit-report.xml" ]; then
        echo "📂 Moving JUnit XML report to results directory..."
        mv "$TEST_REPORT" "$RESULTS_DIR/"
    else
        echo "✅ JUnit XML report is already in the correct location. Skipping move."
    fi
else
    echo "❌ JUnit XML report not found. Ensure your tests generate 'test-junit-report.xml'."
    exit 1
fi

# Check if test results directory contains any files
if [ ! -d "$RESULTS_DIR" ] || [ -z "$(ls -A "$RESULTS_DIR")" ]; then
    echo "❌ No test results found in $RESULTS_DIR. Skipping Allure report generation."
    exit 1
fi

echo "📊 Generating Allure report..."
allure generate "$RESULTS_DIR" --clean -o "$ALLURE_REPORT_DIR"

if [ $? -eq 0 ]; then
    echo "✅ Allure report successfully generated at $ALLURE_REPORT_DIR"
else
    echo "❌ Failed to generate Allure report."
    exit 1
fi

echo "🌐 Serving Allure report locally..."
allure serve "$ALLURE_REPORT_DIR"
