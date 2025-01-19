defmodule VeriFlow.Application do
  use Application

  @impl true
  def start(_type, _args) do
    children = [
      VeriFlow.Repo,
      VeriFlowWeb.Telemetry,
      {Phoenix.PubSub, name: VeriFlow.PubSub},
      VeriFlowWeb.Endpoint
    ]

    opts = [strategy: :one_for_one, name: VeriFlow.Supervisor]
    Supervisor.start_link(children, opts)
  end

  @impl true
  def config_change(changed, _new, removed) do
    VeriFlowWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
