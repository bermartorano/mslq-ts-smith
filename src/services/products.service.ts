import productsModel from '../models/products.model';

async function getAllProducts() {
  const products = await productsModel.getAllProducts();
  return products;
}

export default {
  getAllProducts,
};
