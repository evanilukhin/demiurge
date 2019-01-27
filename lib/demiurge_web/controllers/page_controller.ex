defmodule DemiurgeWeb.PageController do
  use DemiurgeWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
