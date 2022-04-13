#!/bin/sh
yarn install
mkdir node_modules/.cache
chmod -R 777 node_modules/.cache
npm start
exec $@
