defmodule DemiurgeWeb.AboutView do
  use DemiurgeWeb, :view

  def render("about.json", %{lang: lang}) when lang in ["en", "ru"] do
    get_file(lang)
    |> Poison.decode!
  end

  defp get_file(lang) do
    Application.app_dir(:demiurge, "priv/data")
    |> Path.join(lang)
    |> Path.join("about.json")
    |> File.read!()
  end
end
