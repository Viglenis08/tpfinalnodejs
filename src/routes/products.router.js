import { Router } from "express";
import productController from "../controllers/products.controller.js";
import { authentication } from "../middlewares/auth.middleware.js";

const router = Router();


router.get('/', productController.getProducts);
router.get('/descripcion/:des', productController.getProductsbyDesc);
router.get('/:id', productController.getProductsById);
router.post('/create', productController.addProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export default router;
