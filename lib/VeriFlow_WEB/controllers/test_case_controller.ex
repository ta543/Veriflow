defmodule AdvancedQaFrameworkWeb.TestCaseController do
  use AdvancedQaFrameworkWeb, :controller

  alias AdvancedQaFramework.TestCases

  def create(conn, %{"test_case" => test_case_params}) do
    case TestCases.create(test_case_params) do
      {:ok, test_case} ->
        conn
        |> put_flash(:info, "Test case created successfully")
        |> redirect(to: Routes.test_case_path(conn, :show, test_case))
      {:error, changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    test_case = TestCases.get(id)
    render(conn, "show.html", test_case: test_case)
  end

  def update(conn, %{"id" => id, "test_case" => test_case_params}) do
    case TestCases.update(id, test_case_params) do
      {:ok, test_case} ->
        conn
        |> put_flash(:info, "Test case updated successfully")
        |> redirect(to: Routes.test_case_path(conn, :show, test_case))
      {:error, changeset} ->
        render(conn, "edit.html", test_case: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    case TestCases.delete(id) do
      {:ok, _test_case} ->
        conn
        |> put_flash(:info, "Test case deleted successfully")
        |> redirect(to: Routes.test_case_path(conn, :index))
      {:error, _} ->
        conn
        |> put_flash(:error, "Unable to delete test case")
        |> redirect(to: Routes.test_case_path(conn, :index))
    end
  end
end
