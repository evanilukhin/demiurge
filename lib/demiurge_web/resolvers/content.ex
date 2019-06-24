defmodule DemiurgeWeb.Resolvers.Content do
  def get_posts(_parent, args, _resolution) do
    {:ok, Demiurge.Post.Helpers.get_posts(args)}
  end

  def get_post(_parent, args, _resolution) do
    Demiurge.Post.Helpers.get_post(args)
  end

  def post_comments(parent, _args, _resolution) do
    Demiurge.Post.Helpers.get_comments(parent)
  end

  def create_post(_parent, args, %{context: %{current_user: :admin}}) do
    Demiurge.Post.Helpers.create_post(args)
  end

  def create_post(_parent, _args, _resolution) do
    {:error, 'Posts can create only admin'}
  end

  def update_post(_parent, args, %{context: %{current_user: :admin}}) do
    Demiurge.Post.Helpers.update_post(args)
  end

  def update_post(_parent, _args, _resolution) do
    {:error, 'Only admin can update posts'}
  end

  def create_comment(_parent, args, _resolution) do
    Demiurge.Comment.Helpers.create_comment(args)
  end

  def about(_parent, _args, _resolution) do
    Demiurge.About.Helpers.get_about()
  end
end
