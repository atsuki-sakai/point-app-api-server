# Dockerfile
FROM node:20

WORKDIR /usr/src/app

EXPOSE 8080
ENV PORT=8080

# 依存関係のインストール
COPY package*.json ./
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションを起動
CMD ["npm", "start"]