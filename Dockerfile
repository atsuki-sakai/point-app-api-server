# Dockerfile
FROM node:18

WORKDIR /usr/src/app

# 環境変数の設定
ENV PORT=8080
EXPOSE 8080

# 依存関係のインストール
COPY package*.json ./
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションを起動
CMD ["npm", "start"]