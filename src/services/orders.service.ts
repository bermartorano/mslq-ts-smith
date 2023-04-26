import ordersModel from '../models/orders.model';

const getAllOrders = async () => {
  const allOrders = await ordersModel.getAllOrders();
  return allOrders;
};

const registerOrder = async (productsIds: number[], userId: number) => {
  await ordersModel.registerOrder(productsIds, userId);
  return { statusCode: 201, info: { userId, productsIds } };
};

export default {
  getAllOrders,
  registerOrder,
};
