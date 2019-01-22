FROM node:10

RUN apt-get update && apt-get -y upgrade
RUN apt-get install -y bash

RUN mkdir /api
WORKDIR /api

COPY package.json .
RUN npm i

COPY main.js .
COPY src src
COPY test test 
COPY cmd.sh .

CMD ["bash", "cmd.sh"]
