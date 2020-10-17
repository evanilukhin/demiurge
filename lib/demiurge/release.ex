defmodule Demiurge.Release do
  @app :demiurge

  require Logger

  def create_database do
    for repo <- repos() do
      case Ecto.Adapters.Postgres.storage_up(repo.config) do
        :ok -> Logger.info("Database successfully created")
        {:error, :already_up} -> Logger.info("Database already up")
        error -> Logger.error("Unknown error #{inspect(error)}")
      end
    end
  end

  def migrate do
    for repo <- repos() do
      {:ok, _, _} = Ecto.Migrator.with_repo(repo, &Ecto.Migrator.run(&1, :up, all: true))
    end
  end

  def rollback(repo, version) do
    {:ok, _, _} = Ecto.Migrator.with_repo(repo, &Ecto.Migrator.run(&1, :down, to: version))
  end

  defp repos do
    Application.load(@app)
    Application.fetch_env!(@app, :ecto_repos)
  end
end
