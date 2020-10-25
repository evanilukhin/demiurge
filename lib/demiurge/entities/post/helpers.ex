defmodule Demiurge.Post.Helpers do
  alias Demiurge.Post
  alias Demiurge.Repo

  import Ecto.Query
  require Logger

  def create_post(args) do
    changeset = Post.changeset(%Post{state: "draft"}, args)

    if changeset.valid? do
      {:ok, _post} = Repo.insert(changeset)
    else
      error_string = "Bad changeset : " <> to_string(changeset.errors)
      Logger.error(error_string)
      {:error, message: error_string}
    end
  end

  def update_post(args) do
    post = Repo.get_by(Post, id: args[:id])
    changeset = Post.changeset(post, args)

    if changeset.valid? do
      {:ok, _post} = Repo.insert_or_update(changeset)
    else
      error_string = "Bad changeset : " <> to_string(changeset.errors)
      Logger.error(error_string)
      {:error, message: error_string}
    end
  end

  def get_posts(args) do
    tag = args[:tag]
    limit_value = args[:limit]
    offset_value = args[:offset]
    query =
      from Post,
        select: [
          :id,
          :header,
          :summary,
          :short,
          :state,
          :tags,
          :inserted_at
        ],
        order_by: [desc: :id]

    query = if(!is_nil(tag),          do: where(query, [post], ^tag in post.tags), else: query)
    query = if(!is_nil(limit_value),  do: limit(query, ^limit_value), else: query)
    query = if(!is_nil(offset_value), do: offset(query, ^offset_value), else: query)
    Repo.all(query)
  end

  def get_post(args) do
    post = Repo.get_by(Post, id: args[:id])
    {:ok, post}
  end

  def get_comments(%Post{} = post) do
    {:ok, Repo.preload(post, :comments).comments}
  end
end
