import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import tokenMd from '../middlewares/tokenMiddleware';
import md from '../middlewares/ordersMiddleware';

const ordersRouter = Router();
ordersRouter.get('/orders', ordersController.getAllOrders);
ordersRouter.post(
  '/orders',
  tokenMd.tokenValidation,
  md.productsIdValidation,
  ordersController.registerOrder,
);

export default ordersRouter;