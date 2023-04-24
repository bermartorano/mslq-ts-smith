import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productsRouter = Router();
productsRouter.get('/products', productsController.getAllProducts);
productsRouter.post('/products', productsController.registerProduct);

export default productsRouter;