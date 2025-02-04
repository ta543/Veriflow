defmodule Pages.DropdownPage do
  use Hound.Helpers

  def select_option(option_number) do
    dropdown_box = find_element(:xpath, "/html/body/div[2]/div/div/select")
    click(dropdown_box)

    option = find_element(:xpath, "/html/body/div[2]/div/div/select/option[#{option_number}]")
    click(option)

    option
  end

  def selected?(option) do
    attribute_value(option, "selected") == "true"
  end
end
