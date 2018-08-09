defmodule Demiurge.Comment do
  use Ecto.Schema
  
  import Ecto.Changeset

  schema "comments" do
    field :text, :string
    field :author, :string
    belongs_to :post, Demiurge.Post

    timestamps()

    has_one :parent_comment, Demiurge.Comment, foreign_key: :parent_comment_id
  end

  def changeset(comment, params) do
    comment
    |> cast(params, [:text, :author])
    |> validate_required([:text, :post_id])
  end
end
