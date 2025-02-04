#!/bin/bash

mkdir -p artifacts

for MODULE in $GMAP_APP_MODULES; do
  echo "Processing TestNG results for \"$MODULE\""
  MODULE_PATH="/home/runner/work/gmbat-tests-eu-mobile-automation/gmbat-tests-eu-mobile-automation/$MODULE/build/reports/tests/test"
  if [ -d "$MODULE_PATH" ]; then
    mkdir -p "artifacts/$MODULE"
    cp -r "$MODULE_PATH" "artifacts/$MODULE/"
  else
    echo "No TestNG results found for \"$MODULE\""
  fi
done
