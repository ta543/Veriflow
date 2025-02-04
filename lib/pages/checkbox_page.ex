defmodule Pages.CheckboxPage do
    use Hound.Helpers
  
    def toggle_checkbox(index) do
      checkbox = find_element(:xpath, "/html/body/div[2]/div/div/form/input[#{index}]")
      click(checkbox)
      checkbox
    end
  
    def checked?(checkbox) do
      selected?(checkbox)
    end
  end
  