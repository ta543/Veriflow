# Ensure Hound dependencies are started
{:ok, _} = Application.ensure_all_started(:hound)

# Start ExUnit for running tests
ExUnit.start()

# Optional: Set up default session options for Hound (useful for multiple environments)
Hound.start_session(
  driver: Application.get_env(:hound, :driver, "chrome_driver"),
  browser: Application.get_env(:hound, :browser, "chrome"),
  port: Application.get_env(:hound, :port, 64584)
)
