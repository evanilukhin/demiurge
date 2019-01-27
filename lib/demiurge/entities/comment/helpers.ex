defmodule Demiurge.Comment.Helpers do
  alias Demiurge.Comment

  def create_comment(args) do
    changeset = Comment.changeset(%Comment{}, args)

    if changeset.valid? do
      {:ok, _comment} = Demiurge.Repo.insert(changeset)
    end
  end
end
