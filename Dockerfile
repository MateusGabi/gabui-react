# https://github.com/fr3nd/docker-bootstrap
FROM node

RUN apt-get update && apt-get install -y \
    curl \
    git \
    ruby \
    unzip \
    && rm -rf /usr/share/doc/* && \
    rm -rf /usr/share/info/* && \
    rm -rf /tmp/* && \
    rm -rf /var/tmp/*

ADD . /code
WORKDIR /code