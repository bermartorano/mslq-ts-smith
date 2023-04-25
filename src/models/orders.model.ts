import { RowDataPacket } from 'mysql2';
import connection from './connection';

const getAllOrders = async () => {
  const [allOrders] = await connection.execute<RowDataPacket[]>('SELECT o.id, o.user_id AS userId,'
  + ' JSON_ARRAYAGG(p.id) AS productsIds'
  + ' FROM Trybesmith.orders AS o'
  + ' LEFT JOIN Trybesmith.products AS p'
  + ' ON o.id = p.order_id'
  + ' GROUP BY o.id;');
  return allOrders;
};

export default {
  getAllOrders,
};
