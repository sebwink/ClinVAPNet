#!/usr/bin/bash
set -e

if [ "$ENV" = 'DEV' ]; then
  exec node_modules/.bin/nodemon main.js
else
  exec node main.js
fi
