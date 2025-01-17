defmodule AdvancedQaFramework.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      AdvancedQaFrameworkWeb.Telemetry,
      {DNSCluster, query: Application.get_env(:advanced_qa_framework, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: AdvancedQaFramework.PubSub},
      # Start the Finch HTTP client for sending emails
      {Finch, name: AdvancedQaFramework.Finch},
      # Start a worker by calling: AdvancedQaFramework.Worker.start_link(arg)
      # {AdvancedQaFramework.Worker, arg},
      # Start to serve requests, typically the last entry
      AdvancedQaFrameworkWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: AdvancedQaFramework.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    AdvancedQaFrameworkWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
