#!/bin/sh

while ! pg_isready -q -h $PG_HOST -p $PG_PORT -U $PG_USER
do
  echo "$(date) - waiting for database to start"
  sleep 2
done

bin/demiurge eval "Demiurge.Release.create_database"
bin/demiurge eval "Demiurge.Release.migrate"
bin/demiurge start
