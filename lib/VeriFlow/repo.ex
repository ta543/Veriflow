defmodule VeriFlowRepo do
  use Ecto.Repo,
    otp_app: :veriflow,
    adapter: Ecto.Adapters.Postgres
end
