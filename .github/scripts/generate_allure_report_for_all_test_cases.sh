#!/bin/bash

# Define directories
SCRIPT_DIR="/Volumes/chappy/chappy/Coding/Projects/work/personal/QA/VeriFlow/.github/scripts"
RESULTS_DIR="$SCRIPT_DIR/../../test-results"
ALLURE_RESULTS_DIR="$SCRIPT_DIR/../../allure-results"
ALLURE_REPORT_DIR="$SCRIPT_DIR/../../allure-report"

# Ensure Allure CLI is installed
if ! command -v allure &> /dev/null; then
    echo "❌ Allure CLI is not installed. Installing Allure..."
    sudo apt-add-repository -y ppa:qameta/allure
    sudo apt-get update
    sudo apt-get install -y allure
fi

# Remove existing directories if they exist
if [ -d "$RESULTS_DIR" ]; then
    echo "🗑️ Removing existing test-results directory..."
    rm -rf "$RESULTS_DIR"
fi

if [ -d "$ALLURE_RESULTS_DIR" ]; then
    echo "🗑️ Removing existing allure-results directory..."
    rm -rf "$ALLURE_RESULTS_DIR"
fi

if [ -d "$ALLURE_REPORT_DIR" ]; then
    echo "🗑️ Removing existing allure-report directory..."
    rm -rf "$ALLURE_REPORT_DIR"
fi

# Ensure necessary directories exist
mkdir -p "$RESULTS_DIR"
mkdir -p "$ALLURE_RESULTS_DIR"

echo "🚀 Running Elixir tests with JUnitFormatter..."
cd "$SCRIPT_DIR/../../" || exit 1  # Move to the project root

# Run tests with JUnitFormatter and CLIFormatter
MIX_ENV=test mix test --formatter JUnitFormatter --formatter ExUnit.CLIFormatter

# Move the JUnit XML report to the results directory
if [ -f "test-results/test-junit-report.xml" ]; then
    mv test-results/test-junit-report.xml "$RESULTS_DIR/"
else
    echo "❌ JUnit XML report not found. Ensure your tests generate the test-junit-report.xml file."
    exit 1
fi

# Check if test results exist
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
