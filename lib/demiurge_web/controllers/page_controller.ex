defmodule DemiurgeWeb.PostController do
  use DemiurgeWeb, :controller

  def meta(conn, _params) do
    render(conn, "index.html")
  end
end
