#!/bin/sh

# remove dist folder
rm -rf dist/

# build
npm run build

# Stage all changes
git add dist -f

# commit changes
git commit -am "Deploy to subtree branch (gh-pages)"

# deploy to subtree branch
git subtree pull --prefix dist/ origin gh-pages
git subtree push --prefix dist/ origin gh-pages

# undo last commit
git reset --soft HEAD~

# Unstage all changes
git reset

