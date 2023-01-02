FROM ubuntu:22.04

ENV TZ=Asia/Kolkata

RUN apt update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt -y install nodejs
RUN npm i -g npm

# Set the working directory to /app
WORKDIR /app

COPY . /app/

RUN cd .layouts && npm i

EXPOSE 8000
