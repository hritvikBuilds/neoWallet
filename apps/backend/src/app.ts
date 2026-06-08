import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('NeoWallet API Running');
});

export default app;