defmodule DemiurgeWeb.Router do
  use DemiurgeWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug DemiurgeWeb.Plugs.Authentification
  end

  scope "/api" do
    pipe_through :api

    forward "/graphql", Absinthe.Plug.GraphiQL,
      schema: DemiurgeWeb.Schema,
      json_codec: Jason
  end

  scope "/", DemiurgeWeb do
    # Use the default browser stack
    pipe_through :browser
    get "/*path", PageController, :index
  end
end
