defmodule AdvancedQaFramework.Repo do
  use Ecto.Repo,
    otp_app: :advanced_qa_framework,
    adapter: Ecto.Adapters.Postgres
end
