FROM bitwalker/alpine-elixir-phoenix:latest
MAINTAINER Evan Ilukhin <evanilukhin@gmail.com>

EXPOSE 5000
ENV PORT=5000 MIX_ENV=prod

RUN apk update && \
    apk --no-cache --update add postgresql-client bash && \
    rm -rf /var/cache/apk/*

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
