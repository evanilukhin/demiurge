defmodule DemiurgeWeb.PostController do
  use DemiurgeWeb, :controller

  def show(conn, params) do
    refined_params = params |> Map.new(fn {k, v} -> {String.to_atom(k), v} end)
    {:ok, post} = Demiurge.Post.Helpers.get_post(refined_params)
    %Demiurge.Post{summary: summary, header: header, head_image: _head_image} = post
    attrs_list = [%{name: "og:description", content: summary},
                  %{name: "og:title", content: header},
                  %{property: "og:url", content: "/posts/" <> params[:id]},
                  %{property: "og:image", content: "https://cdn.pixabay.com/photo/2019/04/28/18/34/purple-4163951_960_720.jpg"},
                ]
    render(conn, "index.html", meta_attrs: attrs_list)
  end
end
