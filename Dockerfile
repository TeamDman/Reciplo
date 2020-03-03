FROM node:lts-alpine as build-stage
ARG nobuild

WORKDIR /app
COPY ./app/package.json /app/package.json
COPY ./app/package-lock.json /app/package-lock.json
RUN npm install

COPY ./app/ /app/
# RUN npm run build
ENTRYPOINT ["npm","run","serve"]
EXPOSE 8080