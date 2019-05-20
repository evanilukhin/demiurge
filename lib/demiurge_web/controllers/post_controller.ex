defmodule DemiurgeWeb.PostController do
  use DemiurgeWeb, :controller

  def show(conn, params) do
    refined_params = params |> Map.new(fn {k, v} -> {String.to_atom(k), v} end)
    {:ok, post} = Demiurge.Post.Helpers.get_post(refined_params)
    render(conn, "index.html", meta_attrs: post_attributes(post, conn, params))
  end

  defp post_attributes(post, conn, params) do
    %Demiurge.Post{summary: summary, header: header, head_image: head_image} = post
    [
      %{name: "og:description", content: summary},
      %{name: "description", content: summary},
      %{name: "author", content: "Ivan Ilukhin"},
      %{name: "title", content: header <> " | Ivan Ilukhin"},
      %{name: "og:title", content: header},
      %{property: "og:url", content: DemiurgeWeb.Router.Helpers.url(conn) <> "/posts/" <> params["id"]},
      %{property: "og:image", content: head_image},
    ]
  end
end
