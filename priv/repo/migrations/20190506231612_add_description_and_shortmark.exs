defmodule Demiurge.Repo.Migrations.AddDescriptionAndShortmark do
  use Ecto.Migration

  def change do
    alter table(:posts) do
      add :summary, :text
      add :short,  :boolean, default: false, null: false
    end
  end
end
