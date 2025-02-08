import Config

config :hound,
  driver: "chrome_driver",
  browser: "chrome",
  port: 64584,
  webdriver: "http://localhost:64584/wd/hub",
  chrome_driver: [
    args: [
      "--headless",
      "--disable-gpu",
      "--no-sandbox",
      "--disable-dev-shm-usage",
      "--window-size=1280,800"
    ]
  ]

config :junit_formatter,
  report_dir: "test-results"
