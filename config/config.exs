import Config

config :veriflow,
  base_url: "https://the-internet.herokuapp.com/",
  ecto_repos: [VeriFlow.Repo]

# Configures the endpoint
config :veriflow, VeriFlowWeb.Endpoint,
  url: [host: "localhost"],
  render_errors: [view: VeriFlowWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: VeriFlow.PubSub,
  live_view: [signing_salt: "RANDOM_SALT"]

# Configures the logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Phoenix JSON library
config :phoenix, :json_library, Jason

# Hound configuration
config :hound,
  driver: "chrome_driver", # Use the ChromeDriver for testing
  browser: "chrome",       # Specify the browser
  app_port: 62040,          # Port for the application during tests
  retries: 3               # Number of retries for failed tests

# Configures Esbuild
config :esbuild,
  version: "0.23.0"

# Configures Tailwind
config :tailwind,
  version: "3.4.6"
