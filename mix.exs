defmodule VeriFlow.MixProject do
  use Mix.Project

  def project do
    [
      app: :veriflow,
      version: "0.1.0",
      elixir: "~> 1.14",
      start_permanent: Mix.env() == :prod,
      test_paths: ["test/tests"],
      deps: deps(),
      elixirc_options: [warnings_as_errors: false]
    ]
  end

  def application do
    [
      extra_applications: [:logger]
    ]
  end

  defp deps do
    [
      {:hound, "~> 1.1.1"},
      {:junit_formatter, "~> 3.1"}
    ]
  end
end
