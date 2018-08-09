defmodule Demiurge.Repo.Migrations.CreatePostsTable do
  use Ecto.Migration

  def change do
    create table("posts") do
     add :head_image, :string
     add :header, :string
     add :main_part, :text
     add :state, :string
     add :tags, {:array, :string}, default: []

     timestamps()
    end

   create index("posts", [:state])
  end
end
