defmodule AdvancedQaFrameworkWeb.PageController do
  use AdvancedQaFrameworkWeb, :controller
  use Gettext, otp_app: :advanced_qa_framework


  def home(conn, _params) do
    # The home page is often custom made,
    # so skip the default app layout.
    render(conn, :home, layout: false)
  end
end
