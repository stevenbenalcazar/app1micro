FROM node:14-alpine
WORKDIR /usr/src/app2
COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8082

CMD [ "node", "app.js" ]