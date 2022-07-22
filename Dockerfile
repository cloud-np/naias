# Dockerfile, Image, Container
FROM node:16.14.2-slim

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        file        \
        gcc         \
        libwww-perl && \
    apt-get autoremove -y && \
    apt-get clean \
    apt-get zsh vim \
RUN apt install g++ make python git libc6-dev build-essential libpng-dev \
    libjpeg-dev libvips-dev libvips musl-dev node-gyp pngquant webp -y 

# Default powerline10k theme, no plugins installed
# RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.2/zsh-in-docker.sh)"

RUN yarn global add gatsby-cli


# The port gatsby runs on
EXPOSE 8000
WORKDIR /naias
COPY ./package.json /naias
COPY ./yarn.lock /naias
RUN yarn install && yarn cache clean
COPY . /naias
# ADD . .
CMD ["gatsby", "develop", "-H", "0.0.0.0" ]

