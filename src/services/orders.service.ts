import ordersModel from '../models/orders.model';

const getAllOrders = async () => {
  const allOrders = await ordersModel.getAllOrders();
  return allOrders;
};

export default {
  getAllOrders,
};
