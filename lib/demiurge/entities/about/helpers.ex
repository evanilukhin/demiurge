defmodule Demiurge.About.Helpers do
  def get_about() do
    {:ok,
     %Demiurge.About{
       base_information: read_base_information(),
       extended_bio: read_extended_bio()
     }}
  end

  defp read_base_information() do
    read_document("about.json") |> Jason.decode!() |> Jason.encode!()
  end

  defp read_extended_bio() do
    read_document("extended_bio.md")
  end

  # error handling is redundant in this case of usage
  defp read_document(name) do
    Application.app_dir(:demiurge, "priv/data")
    |> Path.join("en")
    |> Path.join(name)
    |> File.read!()
  end
end
