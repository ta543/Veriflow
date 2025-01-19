defmodule VeriFlow.TestCase do
    use Ecto.Schema
    import Ecto.Changeset
  
    schema "test_cases" do
      field :name, :string
      field :description, :string
      timestamps()
    end
  
    @doc false
    def changeset(test_case, attrs) do
      test_case
      |> cast(attrs, [:name, :description])
      |> validate_required([:name, :description])
    end
  end
  