#!/bin/sh

# remove dist folder
rm -rf dist/

# build
npm run build

# remove dist from gitignore
sed -i.bak '/^dist\//d' .gitignore

# Stage all changes
git add dist/

# commit changes
git commit -m "Deploy to subtree branch (gh-pages)"

# deploy to subtree branch
git subtree push --prefix dist origin gh-page

# undo last commit
git reset --soft HEAD~

# Unstage all changes
git reset

# Restore original .gitignore
git restore .gitignore
