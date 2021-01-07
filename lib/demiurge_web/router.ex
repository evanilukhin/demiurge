defmodule DemiurgeWeb.Router do
  use DemiurgeWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug DemiurgeWeb.Plugs.Authentification
  end

  scope "/api" do
    pipe_through :api

    forward "/graphql", Absinthe.Plug.GraphiQL,
      schema: DemiurgeWeb.Schema,
      json_codec: Jason

    post "/authenticate", DemiurgeWeb.AuthController, :authenticate
  end
end
