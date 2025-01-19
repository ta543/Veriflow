defmodule VeriFlow.TestCases do
  alias VeriFlow.Repo
  alias VeriFlow.TestCase

  def create(attrs) do
    %TestCase{}
    |> TestCase.changeset(attrs)
    |> Repo.insert()
  end

  def get(id) do
    Repo.get(TestCase, id)
  end

  def update(id, attrs) do
    test_case = Repo.get!(TestCase, id)

    test_case
    |> TestCase.changeset(attrs)
    |> Repo.update()
  end

  def delete(id) do
    test_case = Repo.get!(TestCase, id)
    Repo.delete(test_case)
  end
end
