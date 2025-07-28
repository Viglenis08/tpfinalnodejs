import { Router } from "express";
import productController from "../controllers/products.controller.js";


const router = Router();

router.get('/',productController.getProducts);
router.get('/:id',productController.getProductsById);
router.get('/descripcion/:des',productController.getProductsbyDesc)
router.post('/create',productController.addProduct);
router.delete('/:id',productController.deleteProduct);



export default router;