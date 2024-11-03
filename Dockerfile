# 官方 Node.js 18 LTS 版本をベースイメージとして使用
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.jsonをコピー
COPY package.json package-lock.json ./

# 依存関係をインストール
RUN npm install --production

# 残りのアプリケーションコードをコピー
COPY . .

# ポート8080を公開（Cloud Runでは必須ではないが、明示するため）
EXPOSE 8080

# アプリケーションを起動
CMD ["node", "app.js"]