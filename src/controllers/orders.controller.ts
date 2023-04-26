import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import auth from '../utils/auth';

const getAllOrders = async (_req: Request, res: Response) => {
  const allOrders = await ordersService.getAllOrders();
  return res.status(200).json(allOrders);
};

const registerOrder = async (req: Request, res: Response) => {
  const { headers: { authorization: token }, body: { productsIds } } = req;
  const { id: userId } = auth.decodeToken(token as string);
  const { statusCode, info } = await ordersService.registerOrder(productsIds, userId);
  return res.status(statusCode).json(info);
};

export default {
  getAllOrders,     
  registerOrder,
};
