defmodule VeriFlow.Pages.ForgotPasswordPage do
  use VeriFlow.Pages.BasePage

  @email_field {:css, "#email"}
  @submit_button {:css, "button"}

  def enterEmailAndSubmit(email) do
    find_element(@email_field, :css) |> fill_field_value(email)  # Explicitly use find_element/2 and fill_field_value/2
    find_element(@submit_button, :css) |> click_element()        # Explicitly use click_element
  end

  def confirmation_message_displayed? do
    find_element({:css, ".confirmation-message"}, :css) |> is_displayed?()  # Explicitly use find_element/2
  end
end
