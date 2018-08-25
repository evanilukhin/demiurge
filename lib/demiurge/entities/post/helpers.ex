defmodule Demiurge.Post.Helpers do
  alias Demiurge.Post
  alias Demiurge.Repo

  import Ecto.Query

  def create_post(args) do
    changeset = Post.changeset(%Post{state: "draft"}, args)
    if changeset.valid? do
      {:ok, _post} = Repo.insert(changeset)
    end
  end

  def get_all_posts() do
    query = from p in Post,
     select: p
    Repo.all(query)
  end

  def get_comments(%Post{} = post) do
    {:ok, Repo.preload(post, :comments).comments}
  end
end
