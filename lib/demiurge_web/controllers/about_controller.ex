defmodule DemiurgeWeb.AboutController do
  use DemiurgeWeb, :controller

  def index(conn, %{"lang" => language}) do
    render conn, "about.json", lang: language
  end
end
