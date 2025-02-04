defmodule HomePageTests do
    use ExUnit.Case
    use Hound.Helpers
  
    alias Pages.HomePage
    alias Pages.DropdownPage
    alias Pages.LoginPage
    alias Pages.CheckboxPage
    alias Pages.KeyPressPage
    
    hound_session()

    test "Internet dropdown test" do
      HomePage.visit()
      HomePage.click_dropdown()
    
      option1 = DropdownPage.select_option(2)
      option2 = DropdownPage.select_option(3)
    
      option1_selected = attribute_value(option1, "selected")
      option2_selected = attribute_value(option2, "selected")
    
      assert option1_selected == nil
      assert option2_selected == "true"
    end    
      
    test "Login page test - successful login" do
      HomePage.visit()
      HomePage.click_login_page()
  
      LoginPage.login("tomsmith", "SuperSecretPassword!")
  
      assert LoginPage.login_successful?() == true
    end
  
    test "Login page test - successful logout" do
      HomePage.visit()
      HomePage.click_login_page()
  
      LoginPage.login("tomsmith", "SuperSecretPassword!")
      LoginPage.logout()
  
      assert LoginPage.logout_successful?() == true
    end
  
    test "Checkbox test" do
      HomePage.visit()
      HomePage.click_checkboxes_page()
  
      checkbox1 = CheckboxPage.toggle_checkbox(1)
      checkbox2 = CheckboxPage.toggle_checkbox(2)
  
      assert CheckboxPage.checked?(checkbox1) == true
      assert CheckboxPage.checked?(checkbox2) == false
    end
  
    test "Key presses test" do
      HomePage.visit()
      HomePage.click_key_presses_page()
  
      KeyPressPage.send_key(:control)
  
      assert KeyPressPage.last_key_pressed() == "You entered: CONTROL"
    end
  end
  