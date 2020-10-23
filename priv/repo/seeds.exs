# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Demiurge.Repo.insert!(%Demiurge.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

# Seed posts

File.read!("priv/data/en/posts_seed.json")
|> Jason.decode!()
|> Enum.each(fn post -> Demiurge.Post.changeset(%Demiurge.Post{:state => "published", :short => false}, post) |> Demiurge.Repo.insert! end)
