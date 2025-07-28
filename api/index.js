import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import serverless from 'serverless-http';

import productsRouter from '../src/routes/products.router.js';
import authRouter from '../src/routes/auth.router.js';
import { authentication } from '../src/middlewares/auth.middleware.js';

dotenv.config();

const app = express();

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

// Exportar como serverless function
export default serverless(app);
