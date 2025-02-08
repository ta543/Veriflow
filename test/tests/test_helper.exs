{:ok, _} = Application.ensure_all_started(:hound)

ExUnit.configure(
  formatters: [
    ExUnit.CLIFormatter,
    JUnitFormatter
  ]
)

ExUnit.start()
Code.compiler_options(warnings_as_errors: false)
Code.require_file("../support/test_metadata.ex", __DIR__)
Hound.start_session()
