defmodule Pages.KeyPressPage do
    use Hound.Helpers
  
    def send_key(key) do
      input_field = find_element(:id, "target")
      click(input_field)
      send_keys(key)
    end
  
    def last_key_pressed do
      find_element(:xpath, "/html/body/div[2]/div/div/p[2]")
      |> inner_text()
    end
  end
  