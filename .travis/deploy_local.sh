#!/usr/bin/env bash

# print outputs and exit on first failure
set -x

# setup ssh agent, git config and remote
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/travis_barca_rsa.pub
git remote add deploy "travis_barca@barcaburguer.com.br:/var/www/barcaburguer.com.br"
git config user.name "travis_barca"
git config user.email "romulobordezani@gmail.com"

# commit compressed files and push it to remote

cp .gitignore .gitignore_bkp
rm -f .gitignore
cp .travis/deployignore .gitignore
git add .
git status # debug
git commit -m "Deploy compressed files"
git push -f deploy HEAD:master

rm -f .gitignore
cp .gitignore_bkp .gitignore
rm -f .gitignore_bkp
