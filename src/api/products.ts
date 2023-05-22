import client from "./client";
import { Product } from "../@types/interface";

export const fetchProductsData = async () => {
  try {
    const response = await client.get("/products");
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const createProduct = async (newProduct: Product) => {
  try {
    const response = await client.post("/products", newProduct);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const fetchProductData = async (productId: string) => {
  try {
    const response = await client.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
