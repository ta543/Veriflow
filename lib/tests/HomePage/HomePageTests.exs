defmodule VeriFlow.Tests.HomePageTests do
  use ExUnit.Case
  use Hound.Helpers

  alias VeriFlow.Pages.HomePage
  alias VeriFlow.Pages.ForgotPasswordPage

  hound_session()

  test "Forgot Password Flow" do
    HomePage.check_homepage()
    HomePage.click_forgot_password()
  
    assert ForgotPasswordPage.is_on_forgot_password_page?()
  
    ForgotPasswordPage.enter_email_and_submit("test@example.com")
    assert ForgotPasswordPage.confirmation_message_displayed?()
  end
  end
