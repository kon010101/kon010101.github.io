#!/bin/sh

# remove dist folder
rm -rf dist/

# build
npm run build

# deploy to gh pages
echo 'konradweiss.dev' > ./dist/CNAME && gh-pages -d dist
