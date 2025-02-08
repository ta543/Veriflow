defmodule Pages.DropdownPage do
  use Hound.Helpers

  def select_option(index) do
    dropdown = find_element(:id, "dropdown")
    click(dropdown)
    option = find_element(:xpath, "//*[@id='dropdown']/option[#{index}]")
    execute_script("arguments[0].selected = true;", [option])
    execute_script("arguments[0].dispatchEvent(new Event('change', { bubbles: true }));", [dropdown])
    click(dropdown)
    option
  end

  # Waits until the dropdown is visible on the page
  def checkthat_dropdown_page_is_displayed() do
    wait_until(fn ->
      element_displayed?(find_element(:id, "dropdown"))
    end)
  end

  # Helper function: Wait until a condition is true (dynamic waiting)
  defp wait_until(condition, timeout \\ 5000) do
    interval = 100
    end_time = System.monotonic_time(:millisecond) + timeout

    Stream.repeatedly(fn ->
      if condition.() do
        :ok
      else
        Process.sleep(interval)
      end
    end)
    |> Enum.find(fn result ->
      result == :ok or System.monotonic_time(:millisecond) > end_time
    end)
  end

  def selected?(index) do
    option = find_element(:xpath, "//*[@id='dropdown']/option[#{index}]")
    selected_value = attribute_value(option, "selected")
    IO.inspect(selected_value, label: "Selected attribute for option #{index}")
    selected_value == "true"
  end
end
