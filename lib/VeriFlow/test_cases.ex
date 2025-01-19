defmodule VeriFlowTestCase do
  use Ecto.Schema
  import Ecto.Changeset

  schema "test_cases" do
    field :name, :string
    field :description, :string
    field :expected_result, :string
    field :actual_result, :string
    field :status, :string
    field :priority, :integer
    timestamps()
  end

  def changeset(test_case, attrs) do
    test_case
    |> cast(attrs, [:name, :description, :expected_result, :actual_result, :status, :priority])
    |> validate_required([:name, :description, :expected_result, :status])
  end
end
