FROM php:8.2-fpm-alpine

RUN apk update && apk add --no-cache openssl-dev imap-dev
RUN docker-php-ext-configure imap --with-imap --with-imap-ssl \
    && docker-php-ext-install imap

# Remove apk cache
RUN rm -rf /var/cache/apk/*

COPY ./src /var/www/html
WORKDIR /var/www/html