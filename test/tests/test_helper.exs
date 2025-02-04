# Ensure Hound dependencies are started
{:ok, _} = Application.ensure_all_started(:hound)
ExUnit.configure(formatters: [JUnitFormatter, ExUnit.CLIFormatter])
ExUnit.start()
Hound.start_session()

