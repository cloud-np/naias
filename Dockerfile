# Dockerfile, Image, Container
# FROM node:16.14.2-slim
FROM node:16.14.2-slim

RUN npm install --global gatsby-cli
RUN apt-get update || : && apt-get install python -y
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

