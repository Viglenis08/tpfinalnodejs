import express from 'express';
import cors from 'cors';
import router from './routes/product.route.js';
import authRouter from './routes/auth.route.js';
import { authentication } from './middlewares/authentication.js';

const app = express();
app.set("PORT",3000);

app.use(cors());
app.use(express.json())

app.get ('/',(req,res) =>{
    res.json({Mensaje: "Raiz de la api, elija un endpoint"})
});


app.use("/auth",authRouter)
app.use("/api/products",authentication,router)


app.use((req,res,next) =>{
    res.status(404).send('Recurso no encontrado');
});

app.listen(app.get("PORT"),()=>{
     console.log(`Servidor corriendo en el puerto http://localhost:${app.get("PORT")}`);
});