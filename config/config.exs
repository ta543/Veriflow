import Config

config :hound,
  driver: "chrome_driver",
  browser: "chrome",
  port: 64584,
  webdriver: "http://localhost:64584/wd/hub"

config :junit_formatter,
  report_dir: "test-results"

