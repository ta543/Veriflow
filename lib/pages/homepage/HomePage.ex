defmodule VeriFlow.Pages.HomePage do
  use VeriFlow.Pages.BasePage

  @homepage_screen {:css, ".heading"}
  @forgot_password_link {:css, "[href='/forgot_password']"}
  @login_page_link {:css, "[href='/login']"}

  def check_homepage do
    find_element(@homepage_screen, :css) |> is_displayed?()  # Explicitly use find_element/2
  end

  def click_forgot_password do
    find_element(@forgot_password_link, :css) |> click_element()  # Explicitly use click_element
  end

  def navigate_to_login do
    find_element(@login_page_link, :css) |> click_element()  # Explicitly use click_element
  end
end
