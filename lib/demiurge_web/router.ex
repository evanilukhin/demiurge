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
  end

  scope "/", DemiurgeWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  scope "/api", DemiurgeWeb do
    pipe_through :api
    scope "/v1" do
      get "/about", AboutController, :index
    end
  end

  # Other scopes may use custom stacks.
  # scope "/api", DemiurgeWeb do
  #   pipe_through :api
  # end
end
