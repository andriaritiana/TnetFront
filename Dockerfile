FROM node:10-alpine

RUN apk update \
  && apk add --update alpine-sdk python git \
  && npm install -g @angular/cli@7.3.8 \
  && apk del alpine-sdk python \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache clean --force \
  && yarn cache clean \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd


WORKDIR /app
COPY . /app

RUN npm install

RUN npm i --save-dev @angular-devkit/build-angular

VOLUME  /app

CMD ng serve --host 0.0.0.0