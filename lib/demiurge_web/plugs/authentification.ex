defmodule DemiurgeWeb.Plugs.Authentification do
  @behaviour Plug

  import Plug.Conn
  require IEx

  def init(opts), do: opts

  def call(conn, _) do
    context = build_context(conn)
    Absinthe.Plug.put_options(conn, context: context)
  end

  @doc """
  Return the current user context based on the authorization header
  """
  def build_context(conn) do
    with ["Bearer " <> token] <- get_req_header(conn, "authorization"),
    {:ok, current_user} <- authorize(token) do
      %{current_user: current_user}
    else
      _ -> %{}
    end
  end

  defp authorize(token) do
    if token == admin_token() do
      {:ok, :admin}
    else
      {:error, "invalid authorization token"}
    end
  end

  defp admin_token do
    Application.get_env(:demiurge, :admin_token)
  end
end
