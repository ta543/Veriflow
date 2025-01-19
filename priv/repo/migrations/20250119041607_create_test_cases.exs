defmodule VeriFlow.Repo.Migrations.CreateTestCases do
  use Ecto.Migration

  def change do
    create table(:test_cases) do
      add :name, :string
      add :description, :string
      add :expected_result, :string
      add :actual_result, :string
      add :status, :string
      add :priority, :integer
      timestamps()
    end
  end
end
