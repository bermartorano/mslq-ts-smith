import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function getAllProducts(req: Request, res: Response) {
  const products = await productsService.getAllProducts();
  return res.status(200).json(products);
}

async function registerProduct(req: Request, res: Response) {
  const { body: productToRegister } = req;
  const registerResult = await productsService.registerProduct(productToRegister);
  return res.status(201).json(registerResult);
}

export default {
  getAllProducts,
  registerProduct,
};
