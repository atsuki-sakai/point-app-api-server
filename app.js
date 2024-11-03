const express = require('express');
const admin = require('firebase-admin');
const app = express();

// const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

const db = admin.firestore();

app.use(express.json());

// CORSの設定
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/merchant-point-info/:merchantId', async (req, res) => {
    const merchantId = req.params.merchantId;
    if (!merchantId) {
        res.status(400).send('Merchant ID is required');
        return;
    }
    try {
        const merchantPointInfo = await db.collection('merchant').doc(merchantId).get();
        res.send(merchantPointInfo.data());
    } catch (error) {
        res.status(500).send(error);
    }
});

// PORTを環境変数から取得、未設定時は8080をデフォルト
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});