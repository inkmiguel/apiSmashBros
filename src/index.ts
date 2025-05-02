import express from 'express';
import router from './routes';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.use(router);

app.get('/Home', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
