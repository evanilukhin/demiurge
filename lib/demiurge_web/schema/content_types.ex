defmodule DemiurgeWeb.Schema.ContentTypes do
  use Absinthe.Schema.Notation

  alias DemiurgeWeb.Resolvers

  object :post do
    field :id, :id
    field :header, :string
    field :summary, :string
    field :short, :boolean
    field :main_part, :string
    field :state, :string
    field :tags, list_of(:string)
    field :inserted_at, :string
    field :updated_at, :string
    field :comments, list_of(:comment) do
      resolve &Resolvers.Content.post_comments/3
    end
  end

  object :post_preview do
    field :id, :id
    field :header, :string
    field :summary, :string
    field :short, :boolean
    field :state, :string
    field :tags, list_of(:string)
    field :inserted_at, :string
  end

  object :comment do
    field :id, :id
    field :text, :string
    field :author, :string
    field :post_id, :id
    field :comment_id, :id
    field :inserted_at, :string
    field :updated_at, :string
  end

  object :about do
    field :base_information, :string # json with master resume
    field :extended_bio, :string # markdowned text with more complex information about me
  end
end
