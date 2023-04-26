import { Router } from 'express';
import productsController from '../controllers/products.controller';
import md from '../middlewares/productsMiddlewares';

const productsRouter = Router();
productsRouter.get('/products', productsController.getAllProducts);
productsRouter.post(
  '/products',
  md.nameAndAmountFields,
  md.nameAndAmountString,
  md.nameAndAmountSize,
  productsController.registerProduct,
);

export default productsRouter;