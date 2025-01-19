import Config

config :veriflow, ecto_repos: [VeriFlow.Repo]

config :veriflow, VeriFlowWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "NOS4Q4GRixHDQqbu6bcvrTJj4Ye5T5PYychv+qTOHpKhSiCejhTKijY3whi9pqoU",
  render_errors: [view: VeriFlowWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: VeriFlow.PubSub,
  live_view: [signing_salt: "T0RKnrJnThQnwN1Xsm7xu+VwuJQLFxY5f0Mym1JE4umINPH52p/HlUPZ7TPHvmoV"],
  live_reload: [
    patterns: [
      ~r"lib/veriflow_web/views/.*(ex)$",
      ~r"lib/veriflow_web/templates/.*(eex)$",
      ~r"priv/gettext/.*(po)$",
      ~r"assets/js/.*(js)$",
      ~r"assets/css/.*(css)$",
      ~r"assets/static/.*(svg|eot|woff|woff2|ttf)$"
    ]
  ],
  http: [ip: {127, 0, 0, 1}, port: 4000]

config :phoenix, :json_library, Jason

config :wallaby,
  driver: Wallaby.Chrome,
  chromedriver: [path: "/opt/homebrew/bin/chromedriver"]

config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :veriflow, :plug_cowboy,
  http: [ip: {127, 0, 0, 1}, port: 4000]

config :veriflow, VeriFlowWeb.Gettext,
  default_locale: "en",
  locales: ~w(en fr es) # Add your supported locales here

config :veriflow, VeriFlowWeb.Endpoint,
  live_reload: [
    patterns: [
      ~r"lib/veriflow_web/views/.*(ex)$", 
      ~r"lib/veriflow_web/templates/.*(eex)$",
      ~r"priv/gettext/.*(po)$",
      ~r"assets/js/.*(js)$",
      ~r"assets/css/.*(css)$",
      ~r"assets/static/.*(svg|eot|woff|woff2|ttf)$"
      ]
  ]

config :veriflow, VeriFlow.PubSub,
adapter: Phoenix.PubSub.Redis,
redis_url: "redis://localhost:6379/0"

config :veriflow, VeriFlowWeb.ErrorView,
  view: VeriFlowWeb.ErrorView,
  accepts: ~w(html json),
  layout: false

config :tailwind,
  version: "3.4.6",
  veriflow: [ 
    args: ~w(
      --config=tailwind.config.js
      --input=css/app.css
      --output=../priv/static/assets/app.css
    ),
    cd: Path.expand("../assets", __DIR__)
  ]

config :esbuild,
  version: "0.23.0", 
  veriflow: [ 
    args: ~w(js/app.js --bundle --target=es2016 --outdir=../priv/static/assets),
    cd: Path.expand("../assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ]

import_config "#{config_env()}.exs"
