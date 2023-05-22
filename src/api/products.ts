import client from "./client";
import { Product } from "../@types/interface";

export const fetchProductsData = async () => {
  try {
    const response = await client.get("/productsAPI");
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const createProduct = async (newProduct: Product) => {
  try {
    const response = await client.post("/productsAPI", newProduct);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const fetchProductData = async (productId: string) => {
  try {
    const response = await client.get(`/productsAPI/${productId}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
