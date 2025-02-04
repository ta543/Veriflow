# Ensure Hound dependencies are started
{:ok, _} = Application.ensure_all_started(:hound)

ExUnit.start()
Hound.start_session()

