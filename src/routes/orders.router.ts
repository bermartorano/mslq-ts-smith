import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import tokenMd from '../middlewares/tokenMiddleware';

const ordersRouter = Router();
ordersRouter.get('/orders', ordersController.getAllOrders);
ordersRouter.post('/orders', tokenMd.tokenValidation, ordersController.registerOrder);

export default ordersRouter;