FROM php:8.0-fpm-alpine

ARG ENABLE_XDEBUG

RUN apk add --update \
    build-base \
    autoconf \
    rabbitmq-c-dev \
    make \
    curl \
    nodejs \
    yarn \
    zip \
    libzip-dev \
    coreutils \
    icu-dev \
    libpng-dev \
    libjpeg-turbo-dev \
    libwebp-dev

RUN mkdir -p /usr/src/php/ext/amqp && \
    curl -fsSL https://pecl.php.net/get/amqp | tar xvz -C "/usr/src/php/ext/amqp" --strip 1 && \
    docker-php-ext-install amqp

RUN docker-php-ext-configure zip
RUN docker-php-ext-configure gd --enable-gd --with-jpeg --with-webp
RUN docker-php-ext-install zip mysqli pdo pdo_mysql intl gd

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer && \
    ln -s $(composer config --global home) /root/composer
ENV PATH=$PATH:/root/composer/vendor/bin COMPOSER_ALLOW_SUPERUSER=1

ADD php.ini /usr/local/etc/php/
ADD php-fpm.conf /usr/local/etc/

RUN if [ "${ENABLE_XDEBUG}" == "on" ]; then \
    yes | pecl install xdebug \
    && docker-php-ext-enable xdebug \
    && echo "xdebug.remote_enable=on" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_autostart=on" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_connect_back=1" >> /usr/local/etc/php/conf.d/xdebug.ini; \
    fi

WORKDIR /var/www/web

EXPOSE 9000

CMD ["php-fpm", "-F"]
