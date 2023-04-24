import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { Product } from '../types';

async function getAllProducts(): Promise<Product[]> {
  const query = 'SELECT * FROM Trybesmith.products products';
  const [products] = await connection.execute<RowDataPacket[]>(query);
  return products as Product[];
}

export default {
  getAllProducts,
};
