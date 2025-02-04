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

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:hound, "~> 1.1"},
      {:ex_unit_formatter_html, "~> 0.4"}
    ]
  end
end
