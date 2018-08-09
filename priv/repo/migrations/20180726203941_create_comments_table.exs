defmodule Demiurge.Repo.Migrations.CreateCommentsTable do
  use Ecto.Migration

  def change do
    create table("comments") do
     add :text, :text
     add :author, :string
     add :parent_comment_id, references(:comments)
     add :post_id, references(:posts)

     timestamps()
    end

    create index("comments", [:author])
  end
end
