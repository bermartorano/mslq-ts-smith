import productsModel from '../models/products.model';
import { Product } from '../types';

async function getAllProducts() {
  const products = await productsModel.getAllProducts();
  return products;
}

async function registerProduct(product: Product) {
  const registerResult = await productsModel.registerProduct(product);
  return registerResult;
}

export default {
  getAllProducts,
  registerProduct,
};
