#!/bin/bash
docker exec $1 npm run build
git add -f app/dist
git commit -m "Update pages"
git subtree push --prefix app/dist origin gh-pages