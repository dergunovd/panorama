FROM node:10.16.3-alpine

WORKDIR /client

COPY . .

RUN yarn
