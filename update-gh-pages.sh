#!/bin/bash
docker-compose up -d --build
docker exec reciplo_vue_1 npm run build
git add -f app/dist
git commit -m "Update pages"
git subtree push --prefix app/dist origin gh-pages