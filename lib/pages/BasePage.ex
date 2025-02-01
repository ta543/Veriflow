defmodule VeriFlow.Pages.BasePage do
  defmacro __using__(_opts) do
    quote do
      alias Hound.Helpers.Element
      alias Hound.Helpers.Page
      import Hound.Helpers.Navigation
      import Hound.Helpers.Element

      # Define reusable functions explicitly
      def click_element(element), do: Element.click(element)
      def find_element(strategy, locator), do: Page.find_element(strategy, locator)
      def fill_field_value(element, value), do: Element.fill_field(element, value)
      def get_text(element), do: Element.visible_text(element)

      def is_enabled?(element) do
        Element.attribute_value(element, "disabled") == nil
      end

      def is_displayed?(element) do
        Element.attribute_value(element, "hidden") == nil
      end

      def get_current_url, do: Navigation.current_url()

      # Universal URL verification function
      def on_page?(expected_url) do
        get_current_url() == expected_url
      end

      # Specific function to check if user is on homepage
      @homepage_url "https://the-internet.herokuapp.com/"
      def on_homepage? do
        on_page?(@homepage_url)
      end
    end
  end
end
