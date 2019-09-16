import Config

config :demiurge,
       admin_token: System.get_env("ADMIN_TOKEN")

config :demiurge, DemiurgeWeb.Endpoint,
       load_from_system_env: true,
       http: [ip: {127,0,0,1}, port: System.get_env("PORT")],
       cache_static_manifest: "priv/static/cache_manifest.json"

config :logger, level: :info

config :demiurge, DemiurgeWeb.Endpoint,
       secret_key_base: System.get_env("DEMIURGE_SECRET_KEY_BASE")

# Configure your database
config :demiurge, Demiurge.Repo,
       username: System.get_env("PG_USER"),
       password: System.get_env("PG_PASS"),
       database: System.get_env("PG_DATABASE"),
       hostname: System.get_env("PG_HOST"),
       pool_size: 15
