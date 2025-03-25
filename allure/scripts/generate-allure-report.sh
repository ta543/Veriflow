#!/bin/bash

ALLURE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ALLURE_RESULTS="$ALLURE_DIR/allure-results"
ALLURE_HISTORY="$ALLURE_DIR/allure-history"
ALLURE_REPORT="$ALLURE_DIR/allure-report"
ALLURE_CONFIG="$ALLURE_DIR/config"
ROOT_ALLURE_RESULTS="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)/allure-results"

# echo "📁 BASE (ALLURE_DIR):        $ALLURE_DIR"
# echo "📁 ALLURE_RESULTS:           $ALLURE_RESULTS"
# echo "📁 ALLURE_HISTORY:           $ALLURE_HISTORY"
# echo "📁 ALLURE_REPORT:            $ALLURE_REPORT"
# echo "📁 ALLURE_CONFIG:            $ALLURE_CONFIG"
# echo "📁 ROOT_ALLURE_RESULTS:      $ROOT_ALLURE_RESULTS"
# echo ""

cp "$ALLURE_CONFIG/environment.properties" "$ROOT_ALLURE_RESULTS/" 2>/dev/null || echo "⚠️ Missing environment.properties"
# cp "$ALLURE_CONFIG/categories.json" "$ROOT_ALLURE_RESULTS/" 2>/dev/null || echo "⚠️ Missing categories.json"

allure generate "$ROOT_ALLURE_RESULTS" --clean -o "$ALLURE_REPORT"
# npx tsx allure/scripts/slack-allure.ts
# allure open "$ALLURE_REPORT" &

