defmodule VeriFlow.Application do
    use Application
  
    def start(_type, _args) do
      children = [
        # Define workers and child supervisors to be supervised
      ]
  
      opts = [strategy: :one_for_one, name: VeriFlow.Supervisor]
      Supervisor.start_link(children, opts)
    end
  end
  