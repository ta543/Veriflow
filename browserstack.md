userName: ${BROWSERSTACK_USERNAME}
accessKey: ${BROWSERSTACK_ACCESS_KEY}

projectName: VeriFlow
buildName: Playwright Build 
buildIdentifier: '#${BUILD_NUMBER}'

platforms:
  - os: Windows
    osVersion: 11
    browserName: chrome
    browserVersion: latest
  - os: OS X
    osVersion: Ventura
    browserName: playwright-webkit
    browserVersion: latest
  - os: Windows
    osVersion: 11
    browserName: playwright-firefox
    browserVersion: latest

parallelsPerPlatform: 1

browserstackLocal: true
browserstackLocalOptions:
  localIdentifier: veriflow-ci

framework: playwright
source: node-js-playwright-sample-sdk:v1

debug: false # <boolean> # Set to true if you need screenshots for every selenium command ran
networkLogs: false # <boolean> Set to true to enable HAR logs capturing
consoleLogs: errors # <string> Remote browser's console debug levels to be printed (Default: errors)

testObservability: true
