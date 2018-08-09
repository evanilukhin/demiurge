defmodule DemiurgeWeb.Resolvers.Content do

  def list_posts(_parent, _args, _resolution) do
    {:ok, Demiurge.Post.Helpers.get_all_posts()}
  end

  def post_comments(parent, _args, _resolution) do
    Demiurge.Post.Helpers.get_comments(parent)
  end

  def create_post(_parent, args, _resolution) do
    Demiurge.Post.Helpers.create_post(args)
  end

  def create_comment(_parent, args, _resolution) do
    Demiurge.Comment.Helpers.create_comment(args)
  end
end
