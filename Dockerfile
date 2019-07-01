FROM node:10-alpine

RUN apk update \
  && apk add --update alpine-sdk python git \
  && npm install -g @angular/cli@7.3.8 \
  && apk del alpine-sdk python \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache clean --force \
  && yarn cache clean \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd

COPY . /app-front/
WORKDIR /app-front

RUN npm i npm@latest -g && npm install && npm i --save-dev @angular-devkit/build-angular && npm i -g nodemon
