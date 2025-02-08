defmodule TestMetadata do
  defmacro __using__(_) do
    quote do
      import TestMetadata, only: [
        feature: 1,
        story: 1,
        severity: 1,
        owner: 1,
        issue: 1,
        tms_link: 1,
        description: 1,
        tags: 1
      ]
    end
  end

  defmacro feature(value), do: quote(do: Module.put_attribute(__MODULE__, :feature, unquote(value)))
  defmacro story(value), do: quote(do: Module.put_attribute(__MODULE__, :story, unquote(value)))
  defmacro severity(value), do: quote(do: Module.put_attribute(__MODULE__, :severity, unquote(value)))
  defmacro owner(value), do: quote(do: Module.put_attribute(__MODULE__, :owner, unquote(value)))
  defmacro issue(value), do: quote(do: Module.put_attribute(__MODULE__, :issue, unquote(value)))
  defmacro tms_link(value), do: quote(do: Module.put_attribute(__MODULE__, :tms_link, unquote(value)))
  defmacro description(value), do: quote(do: Module.put_attribute(__MODULE__, :description, unquote(value)))
  defmacro tags(value), do: quote(do: Module.put_attribute(__MODULE__, :tags, unquote(value)))
end
