defmodule Pages.LoginPage do
    use Hound.Helpers
  
    def login(username, password) do
      username_field = find_element(:xpath, "/html/body/div[2]/div/div/form/div[1]/div/input")
      fill_field(username_field, username)
  
      password_field = find_element(:xpath, "/html/body/div[2]/div/div/form/div[2]/div/input")
      fill_field(password_field, password)
  
      login_button = find_element(:xpath, "/html/body/div[2]/div/div/form/button/i")
      click(login_button)
    end
  
    def logout do
      logout_button = find_element(:xpath, "/html/body/div[2]/div/div/a")
      click(logout_button)
    end
  
    def login_successful? do
      element_displayed?(find_element(:xpath, "/html/body/div[1]/div/div"))
    end
  
    def logout_successful? do
      element_displayed?(find_element(:xpath, "/html/body/div[1]/div/div"))
    end
  end
  