FROM node:lts-alpine as app

ADD . ./app
WORKDIR /app
RUN npm install

WORKDIR /app/node_modules/eodash-v5

RUN \
npm i \
&& npm run build

FROM node:lts-alpine
WORKDIR /app
COPY --from=app /app/node_modules/eodash-v5/dist .

# install simple http server for serving static content
RUN npm install -g http-server

ADD ./config.js .
ADD ./public .

CMD ["http-server", "-p8080","--proxy","http://localhost:8080?"]
EXPOSE 8080
