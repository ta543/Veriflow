#!/bin/bash

# Get absolute paths
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
ALLURE_REPORT="$PROJECT_ROOT/allure/allure-report"
ALLURE_METADATA="$PROJECT_ROOT/allure/metadata"
SUMMARY_JSON="$ALLURE_REPORT/widgets/summary.json"
LAST_SUMMARY_JSON="$ALLURE_METADATA/last-summary.json"
ALLURE_RESULTS="$PROJECT_ROOT/allure/allure-results"
METADATA_WIDGETS="$PROJECT_ROOT/allure/metadata/widgets"
REPORT_WIDGETS="$PROJECT_ROOT/allure/allure-results/widgets"

# Create metadata folder if it doesn't exist
mkdir -p "$ALLURE_METADATA"

# Copy essential folders and files
for item in data export history plugin widgets index.html app.js styles.css favicon.ico; do
  if [ -e "$ALLURE_REPORT/$item" ]; then
    echo "✅ Backing up $item"
    cp -r "$ALLURE_REPORT/$item" "$ALLURE_METADATA/"
  else
    echo "⚠️ Missing $item in $ALLURE_REPORT"
  fi
done

mkdir -p "$ALLURE_RESULTS/history"

if [ -d "$ALLURE_METADATA/history" ]; then
  cp -R "$ALLURE_METADATA/history/"* "$ALLURE_RESULTS/history/"
  echo "✅ History copied"
else
  echo "⚠️ No history folder found in metadata"
fi


cat > "$ALLURE_METADATA/widgets/executor.json" <<EOL
{
  "name": "custom",
  "type": "github",
  "url": "",
  "buildOrder": 1,
  "buildName": "",
  "buildUrl": "",
  "reportUrl": "",
  "executor": "playwright"
}
EOL

cp -R "$ALLURE_METADATA/widgets/"* "$ALLURE_RESULTS" 2>/dev/null || echo "⚠️ Failed to copy some widget files"







