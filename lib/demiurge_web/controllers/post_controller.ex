defmodule DemiurgeWeb.PostController do
  use DemiurgeWeb, :controller

  def show(conn, %{"id" => id}) do
    {:ok, post} = Demiurge.Post.Helpers.get_post(id: id)
    render(conn, "index.html", meta_attrs: post_attributes(post, conn, id))
  end

  defp post_attributes(post, conn, id) do
    %Demiurge.Post{summary: summary, header: header, head_image: head_image} = post
    [
      %{name: "title", property: "og:title", content: header},
      %{name: "author", content: "Ivan Ilukhin"},
      %{name: "description", content: summary},
      %{name: "og:type", content: "article"},
      %{name: "og:description", content: summary},
      %{name: "og:url", content: DemiurgeWeb.Router.Helpers.url(conn) <> "/posts/" <> id},
      %{name: "image", property: "og:image", content: head_image},
    ]
  end
end
