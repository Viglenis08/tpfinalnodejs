import dotenv from "dotenv";
dotenv.config();

import express from "express";
import serverless from "serverless-http";

import productsRouter from "../src/routes/products.router.js";
import authRouter from "../src/routes/auth.router.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido a la API REST" });
});

app.use("/api", productsRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Ocurrió un error en el servidor" });
});

export default serverless(app);
