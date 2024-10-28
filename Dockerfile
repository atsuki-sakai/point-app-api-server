# Dockerfile
FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
COPY .env ./

ENV PORT=8080
EXPOSE 8080

CMD ["node", "app.js"]