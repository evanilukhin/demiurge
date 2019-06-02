defmodule Demiurge.Post do
  use Ecto.Schema

  import Ecto.Changeset

  schema "posts" do
    field(:head_image, :string)
    field(:header, :string)
    field(:summary, :string)
    field(:short, :boolean)
    field(:main_part, :string)
    field(:state, :string)
    field(:tags, {:array, :string})

    timestamps()

    has_many(:comments, Demiurge.Comment)
  end

  def changeset(post, params) do
    post
    |> cast(params, [:header, :main_part, :state, :tags, :summary, :short, :head_image])
    |> validate_required([:header, :main_part, :state])
    |> validate_inclusion(:state, ["draft", "published"])
    |> unique_constraint(:header)
  end
end
