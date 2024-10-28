
require('dotenv').config();
const express = require('express');
const admin = require('firebase-admin');
const app = express();

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

app.use(express.json());

// CORSの設定
app.use((req, res, next) => {
  const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',');
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.get('/merchant-point-info', (req, res) => {
  res.send('merchant-point-info');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});