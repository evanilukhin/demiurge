use Mix.Config

config :demiurge,
  admin_token: System.get_env("ADMIN_TOKEN")

config :demiurge, DemiurgeWeb.Endpoint,
  load_from_system_env: true,
  http: [ip: {127,0,0,1}, port: {:system, "PORT"}, compress: true],
  cache_static_manifest: "priv/static/cache_manifest.json"

# Do not print debug messages in production
config :logger, level: :info

config :demiurge, DemiurgeWeb.Endpoint, server: true

config :demiurge, DemiurgeWeb.Endpoint,
  secret_key_base: System.get_env("DEMIURGE_SECRET_KEY_BASE")

config :cors_plug,
       origin: ["https://www.evanilukhin.com", "https://evanilukhin.com"],
       max_age: 86400,
       methods: ["GET", "POST"],
       headers: [
         "Auth-Token",
         "Content-Type",
         "Accept",
         "Origin",
         "User-Agent",
         "DNT",
         "Cache-Control",
         "X-Mx-ReqToken",
         "Keep-Alive",
         "X-Requested-With",
         "If-Modified-Since",
         "X-CSRF-Token"
       ],
       expose: ["Auth-Token"]

# Configure your database
config :demiurge, Demiurge.Repo,
  username: System.get_env("PG_USER"),
  password: System.get_env("PG_PASS"),
  database: System.get_env("PG_DATABASE"),
  hostname: System.get_env("PG_HOST"),
  pool_size: 15
