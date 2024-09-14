import { Router } from "express";
import {
  createProduct,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProductById,
} from "../apis/productApi.js";

const routes = Router();
const product = "/product";

// API Product
routes.get(`${product}`, getAllProducts);
routes.get(`${product}/:id`, getProductById);
routes.post(`${product}`, createProduct);
routes.put(`${product}/:id`, updateProductById);
routes.delete(`${product}/:id`, deleteProductById);

export default routes;
