#!/bin/sh

# remove dist folder
rm -rf dist/

# build
npm run build

# deploy to gh pages
gh-pages -d dist


