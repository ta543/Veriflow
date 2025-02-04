defmodule Pages.HomePage do
    use Hound.Helpers
  
    @url "https://the-internet.herokuapp.com/"
  
    def visit do
      navigate_to(@url)
    end
  
    def click_dropdown do
      find_element(:xpath, "/html/body/div[2]/div/ul/li[11]/a")
      |> click()
    end
  
    def click_login_page do
      find_element(:xpath, "/html/body/div[2]/div/ul/li[21]/a")
      |> click()
    end
  
    def click_checkboxes_page do
      find_element(:xpath, "/html/body/div[2]/div/ul/li[6]/a")
      |> click()
    end
  
    def click_key_presses_page do
      find_element(:xpath, "/html/body/div[2]/div/ul/li[31]/a")
      |> click()
    end
  end
  