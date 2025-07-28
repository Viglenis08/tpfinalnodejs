// index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import productsRouter from './src/routes/products.router.js';
import authRouter from './src/routes/auth.router.js';
import { authentication } from './src/middlewares/auth.middleware.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: "Bienvenido a la API REST" });
});

app.use("/api/auth", authRouter);
app.use("/api/products", authentication, productsRouter);

app.use((req, res) => {
  res.status(404).send('Recurso no encontrado');
});

// 👇 Solo en local
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

export default app;
