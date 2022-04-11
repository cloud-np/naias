# Dockerfile, Image, Container
FROM node:16.14.2-slim


RUN apt update && apt upgrade -y && \
    apt install gcc g++ make python git libc6-dev build-essential libpng-dev \
    libjpeg-dev libvips-dev libvips musl-dev node-gyp pngquant webp vim -y

RUN yarn global add gatsby-cli

# The port gatsby runs on
EXPOSE 8000
WORKDIR /naias
COPY ./package.json /naias
COPY ./yarn.lock /naias
RUN yarn install && yarn cache clean
COPY . /naias
CMD ["gatsby", "develop", "-H", "0.0.0.0" ]
ADD . .

