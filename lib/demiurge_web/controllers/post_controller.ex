defmodule DemiurgeWeb.PostController do
  use DemiurgeWeb, :controller

  plug :put_layout, "meta.html"

  def meta(conn, %{"id" => id}) do
    {:ok, post} = Demiurge.Post.Helpers.get_post(id: id)
    render(conn, "meta.html", meta_attrs: post_attributes(post, conn, id))
  end

  defp post_attributes(post, conn, id) do
    %Demiurge.Post{summary: summary, header: header, head_image: head_image} = post
    [
      %{name: "title", content: header <> " | Ivan Ilukhin"},
      %{name: "author", content: "Ivan Ilukhin"},
      %{name: "description", content: summary},
      %{name: "og:title", content: header},
      %{name: "og:description", content: summary},
      %{property: "og:url", content: DemiurgeWeb.Router.Helpers.url(conn) <> "/posts/" <> id},
      %{property: "og:image", content: head_image},
    ]
  end
end
