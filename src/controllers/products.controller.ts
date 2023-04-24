import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function getAllProducts(req: Request, res: Response) {
  const products = await productsService.getAllProducts();
  return res.status(200).json(products);
}

export default {
  getAllProducts,
};
