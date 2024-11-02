# Dockerfile
FROM node:lts-slim

WORKDIR /usr/src/app

EXPOSE 8080

# 依存関係のインストール
COPY package*.json ./
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションを起動
CMD ["npm", "start"]