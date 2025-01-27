FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY .env ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start"]