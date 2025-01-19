defmodule VeriFlow.Repo.Migrations.CreateTestCases do
  use Ecto.Migration

  def change do
    create table(:test_cases) do
      add :name, :string, null: false
      add :description, :string
      timestamps()
    end
  end
end
