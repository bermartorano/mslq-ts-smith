import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

const registerOrder = async (productsIds: number[], userId: number) => {
  const [orderRegistered] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?);',
    [userId],
  );
  const { insertId: orderId } = orderRegistered;
  const postingOrderIdInProducts = productsIds.map((productId) => {
    const query = connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
      [orderId, productId],
    );
    return query;
  });
  await Promise.all(postingOrderIdInProducts);
};  

export default {
  getAllOrders,
  registerOrder,
};
