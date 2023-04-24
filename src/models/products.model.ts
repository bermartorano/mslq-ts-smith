import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Product } from '../types';

async function getAllProducts(): Promise<Product[]> {
  const query = 'SELECT * FROM Trybesmith.products products;';
  const [products] = await connection.execute<RowDataPacket[]>(query);
  return products as Product[];
}

async function registerProduct(product: Product): Promise<Product> {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);';
  const [registeredInfo] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const productRegistered = { ...product, id: registeredInfo.insertId };
  return productRegistered;
}

export default {
  getAllProducts,
  registerProduct,
};
