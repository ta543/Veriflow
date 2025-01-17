import Config

# General application configuration
config :advanced_qa_framework,
  ecto_repos: [] # Add any Ecto repos if necessary in the future

# Endpoint configuration
config :advanced_qa_framework, AdvancedQaFrameworkWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "NOS4Q4GRixHDQqbu6bcvrTJj4Ye5T5PYychv+qTOHpKhSiCejhTKijY3whi9pqoU", # Replace with `mix phx.gen.secret`
  render_errors: [view: AdvancedQaFrameworkWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: AdvancedQaFramework.PubSub,
  live_view: [signing_salt: "T0RKnrJnThQnwN1Xsm7xu+VwuJQLFxY5f0Mym1JE4umINPH52p/HlUPZ7TPHvmoV"] # Replace with a generated signing salt

# Set Jason as the default JSON library for Phoenix
config :phoenix, :json_library, Jason

# Logger configuration
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Optional Plug settings for Cowboy
config :advanced_qa_framework, :plug_cowboy,
  http: [ip: {127, 0, 0, 1}, port: 4000]

# Gettext configuration for translation
config :advanced_qa_framework, AdvancedQaFrameworkWeb.Gettext,
  otp_app: :advanced_qa_framework

# Phoenix live reload configuration (useful for development)
config :advanced_qa_framework, AdvancedQaFrameworkWeb.Endpoint,
  live_reload: [
    patterns: [
      ~r"lib/advanced_qa_framework_web/views/.*(ex)$",
      ~r"lib/advanced_qa_framework_web/templates/.*(eex)$",
      ~r"priv/gettext/.*(po)$",
      ~r"assets/js/.*(js)$",
      ~r"assets/css/.*(css)$",
      ~r"assets/static/.*(svg|eot|woff|woff2|ttf)$"
    ]
  ]

# Enable Phoenix presence (if used)
config :phoenix, :pubsub, :redis
# Use Redis for pubsub (for large apps or clustering)
config :advanced_qa_framework, :pubsub, [pubsub: AdvancedQaFramework.PubSub, adapter: Phoenix.PubSub.PG2]

# Set up your error handling views
config :advanced_qa_framework, AdvancedQaFrameworkWeb.ErrorView,
  view: AdvancedQaFrameworkWeb.ErrorView,
  accepts: ~w(html json),
  layout: false

# Tailwind configuration
config :tailwind,
  version: "3.4.6", # Specify the tailwind version you're using
  advanced_qa_framework: [
    args: ~w(
      --config=tailwind.config.js
      --input=css/app.css
      --output=../priv/static/assets/app.css
    ),
    cd: Path.expand("../assets", __DIR__)
  ]

# Esbuild configuration
config :esbuild,
  version: "0.23.0", # Specify the esbuild version you're using
  advanced_qa_framework: [
    args: ~w(js/app.js --bundle --target=es2016 --outdir=../priv/static/assets),
    cd: Path.expand("../assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ]

# Add more services and configurations as needed (mailers, background jobs, etc.)

# Environment-specific configuration
import_config "#{config_env()}.exs"
