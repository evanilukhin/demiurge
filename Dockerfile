FROM elixir:1.8.1
MAINTAINER Evan Ilukhin <evanilukhin@gmail.com>

EXPOSE 5000
ENV PORT=5000 MIX_ENV=prod

RUN mix local.hex --force \
 && mix archive.install --force hex phx_new 1.4.0 \
 && apt-get update \
 && curl -sL https://deb.nodesource.com/setup_8.x | bash \
 && apt-get install -y apt-utils \
 && apt-get install -y nodejs \
 && apt-get install -y build-essential \
 && apt-get install -y inotify-tools \
 && apt-get install -y postgresql-client \
 && mix local.rebar --force

ADD mix.exs mix.lock ./
RUN mix do deps.get, deps.compile

# Same with npm deps
ADD assets/package.json assets/
RUN cd assets && \
    npm install

ADD . .

RUN cd assets/ && \
    npm install &&\
    cd - && \
    mix do compile, phx.digest

CMD ["bash", "./lib/demiurge/entrypoint.sh"]
