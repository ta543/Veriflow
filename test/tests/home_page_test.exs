defmodule HomePageTests do
  use ExUnit.Case
  use Hound.Helpers
  use TestMetadata

  alias Pages.HomePage
  alias Pages.DropdownPage
  alias Pages.LoginPage
  alias Pages.CheckboxPage
  alias Pages.KeyPressPage

  setup do
    Hound.start_session()
    :ok
  end

  feature("[VeriFlow] UI Testing")
  story("Dropdown Selection")
  severity(:NORMAL)
  owner("Tobias Andersen - [tobias@tobiasa.com]")
  issue("N/A")
  tms_link("TEST-001")
  description("Verify that selecting an option in the dropdown properly updates the selected attribute.")
  tags([:Dropdown, :UI])
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

  feature("[VeriFlow] Authentication")
  story("Login Functionality")
  severity(:NORMAL)
  owner("Tobias Andersen - [tobias@tobiasa.com]")
  issue("AUTH-101")
  tms_link("TEST-002")
  description("Validate that a user can successfully log in with valid credentials.")
  tags([:Login, :Auth])
  test "Login page test - successful login" do
    HomePage.visit()
    HomePage.click_login_page()
    LoginPage.login("tomsmith", "SuperSecretPassword!")
    assert LoginPage.login_successful?() == true
  end

  feature("[VeriFlow] Authentication")
  story("Logout Functionality")
  severity(:NORMAL)
  owner("Tobias Andersen - [tobias@tobiasa.com]")
  issue("AUTH-102")
  tms_link("TEST-003")
  description("Validate that a user can successfully log out after logging in.")
  tags([:Logout, :Auth])
  test "Login page test - successful logout" do
    HomePage.visit()
    HomePage.click_login_page()
    LoginPage.login("tomsmith", "SuperSecretPassword!")
    LoginPage.logout()
    assert LoginPage.logout_successful?() == true
  end

  feature("[VeriFlow] UI Testing")
  story("Checkbox Toggle")
  severity(:NORMAL)
  owner("Tobias Andersen - [tobias@tobiasa.com]")
  issue("UI-201")
  tms_link("TEST-004")
  description("Verify that checkboxes can be toggled on and off correctly.")
  tags([:Checkbox, :UI])
  test "Checkbox test" do
    HomePage.visit()
    HomePage.click_checkboxes_page()
    checkbox1 = CheckboxPage.toggle_checkbox(1)
    checkbox2 = CheckboxPage.toggle_checkbox(2)
    assert CheckboxPage.checked?(checkbox1) == true
    assert CheckboxPage.checked?(checkbox2) == false
  end

  feature("[VeriFlow] Keyboard Events")
  story("Key Presses")
  severity(:NORMAL)
  owner("Tobias Andersen - [tobias@tobiasa.com]")
  issue("UI-301")
  tms_link("TEST-005")
  description("Verify that key presses are correctly detected and displayed.")
  tags([:Keyboard, :UI])
  test "Key presses test" do
    HomePage.visit()
    HomePage.click_key_presses_page()
    KeyPressPage.send_key(:control)
    assert KeyPressPage.last_key_pressed() == "You entered: CONTROL"
  end
end
