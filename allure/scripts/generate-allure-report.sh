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

# ⚙️ Copy environment.properties
cp "$ALLURE_CONFIG/environment.properties" "$ROOT_ALLURE_RESULTS/" 2>/dev/null || echo "⚠️ Missing environment.properties"
cp "$ALLURE_CONFIG/categories.json" "$ROOT_ALLURE_RESULTS/" 2>/dev/null || echo "⚠️ Missing categories.json"

# 📁 Sync any results from root-level allure-results to the proper folder
mkdir -p "$ROOT_ALLURE_RESULTS"
cp -r "$ROOT/allure-results/"* "$ROOT_ALLURE_RESULTS/" 2>/dev/null || echo "⚠️ No root-level allure-results to copy"
rm -rf "$ROOT/allure-results"

# allure open "$ALLURE_REPORT"
# allure open "$ALLURE_REPORT" --clean 












