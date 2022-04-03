FROM node:16-alpine

WORKDIR /usr/src/app

EXPOSE 3000

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]
