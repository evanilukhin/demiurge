defmodule DemiurgeWeb.Schema do
  use Absinthe.Schema
  import_types DemiurgeWeb.Schema.ContentTypes

  alias DemiurgeWeb.Resolvers

  query do
    @desc "Get all posts"
    field :posts, list_of(:post) do
      resolve &Resolvers.Content.list_posts/3
    end

    @desc "Get about"
    field :about, type: :about do
      resolve &Resolvers.Content.about/3
    end
  end

  mutation do
    @desc "Create post"
    field :create_post, type: :post do
      arg :header, non_null(:string)
      arg :main_part, non_null(:string)
      arg :state, :string

      resolve &Resolvers.Content.create_post/3
    end

    @desc "Create comment"
    field :create_comment, type: :comment do
      arg :text, non_null(:string)
      arg :author, non_null(:string)
      arg :post_id, :integer
      arg :comment_id, :integer

      resolve &Resolvers.Content.create_comment/3
    end
  end
end
