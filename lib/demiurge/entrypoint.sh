#!/bin/sh

while ! pg_isready -q -h $PG_HOST -p $PG_PORT -U $PG_USER
do
  echo "$(date) - waiting for database to start"
  sleep 2
done

mix ecto.create
mix ecto.migrate

exec mix phx.server
