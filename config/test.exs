use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :demiurge, DemiurgeWeb.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :demiurge, Demiurge.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: System.get_env("DEMIURGE_PG_USER"),
  password: System.get_env("DEMIURGE_PG_PASS"),
  database: System.get_env("DEMIURGE_PG_TEST_DATABASE"),
  hostname: System.get_env("DEMIURGE_PG_HOST"),
  pool: Ecto.Adapters.SQL.Sandbox
