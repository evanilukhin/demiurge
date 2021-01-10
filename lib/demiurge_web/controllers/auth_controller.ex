defmodule DemiurgeWeb.AuthController do
  use DemiurgeWeb, :controller
  require Logger

  def authenticate(conn, %{"password" => password}) do
    hash = Application.get_env(:demiurge, :admin_token)
    Logger.info(hash)
    if Argon2.verify_pass(password, hash) do
      conn = put_resp_header(conn, "Auth-Token", hash)
      send_resp(conn, :ok, "")
    else
      send_resp(conn, :unauthorized, "")
    end

  end

  def authenticate(conn, _) do
    send_resp(conn, :bad_request, "")
  end
end
