import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import productsRouter from './src/routes/products.router.js';
import authRouter from './src/routes/auth.router.js';
import { authentication } from './src/middlewares/auth.middleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas principales
app.get('/', (req, res) => {
  res.status(200).json({ message: "Bienvenido a la API REST" });
});

// Rutas API
app.use("/api/auth", authRouter);
app.use("/api/products", authentication, productsRouter);

// Manejo de rutas inexistentes
app.use((req, res) => {
  res.status(404).send('Recurso no encontrado');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
