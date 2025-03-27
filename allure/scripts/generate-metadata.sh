#!/bin/bash

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
ROOT_ALLURE_RESULTS="$ROOT/allure/allure-results"
ALLURE_DIR="$ROOT/allure"
ALLURE_REPORT="$ALLURE_DIR/allure-report"
ALLURE_CONFIG="$ALLURE_DIR/config"

echo "📁 BASE (ALLURE_DIR):        $ALLURE_DIR"
echo "📁 ROOT_ALLURE_RESULTS:      $ROOT_ALLURE_RESULTS"
echo "📁 ALLURE_REPORT:            $ALLURE_REPORT"
echo "📁 ALLURE_CONFIG:            $ALLURE_CONFIG"

# 📊 Generate Allure report
allure generate "$ROOT_ALLURE_RESULTS" --clean -o "$ALLURE_REPORT"













