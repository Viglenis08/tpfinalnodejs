import dotenv from "dotenv";
dotenv.config();
console.log("JWT_SECRET:", process.env.JWT_SECRET);

import express from "express";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "Bienvenido a la API REST" });
});

import productsRouter from './src/routes/products.router.js';
app.use("/api", productsRouter);

import authRouter from './src/routes/auth.router.js';
app.use("/api/auth", authRouter);

// ⛔️ Middleware global para manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack); // Muestra error en consola
    res.status(500).json({
        message: "Ocurrió un error en el servidor"
        // error: err.message // si quieres mostrar el mensaje real en desarrollo
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

export default app;
