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

app.use("/auth  ", authRouter);
app.use("/api/products", authentication, productsRouter);

app.use((req, res,next) => {
  res.status(404).send('Recurso no encontrado');
});

app.listen(app.get("PORT"),()=>{
     console.log(`Servidor corriendo en el puerto http://localhost:${app.get("PORT")}`);
});

export default app;
