defmodule VeriFlow.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      VeriFlowWeb.Telemetry,
      {DNSCluster, query: Application.get_env(:veriflow, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: VeriFlowPubSub},
      # Start the Finch HTTP client for sending emails
      {Finch, name: VeriFlowFinch},
      # Start a worker by calling: VeriFlowWorker.start_link(arg)
      # {VeriFlowWorker, arg},
      # Start to serve requests, typically the last entry
      VeriFlowWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html.
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: VeriFlowSupervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    VeriFlowWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
