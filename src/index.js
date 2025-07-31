import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.router.js';
import authRouter from './routes/auth.router.js';
import { authentication } from './middlewares/auth.middleware.js';

const app = express();
app.set("PORT",3000);

app.use(cors());
app.use(express.json())

app.get ('/',(req,res) =>{
    res.json({Mensaje: "Bienvenido a la API STORE"})
});

app.use("/auth", authRouter);  
app.use("/api/products", authentication, productsRouter); 


app.use((req,res,next) =>{
    res.status(404).send('Recurso no encontrado');
});

app.listen(app.get("PORT"),()=>{
     console.log(`Servidor corriendo en el puerto http://localhost:${app.get("PORT")}`);
});