import { CartItem } from "../@types/interface";
import client from "./client";

export const fetchCartdata = async () => {
  try {
    const response = await client.get("/cart");
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const createCartItem = async (newCartItem: CartItem) => {
  try {
    const response = await client.post("/cart", newCartItem);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const updateCartItem = async (id: string, quantity: number) => {
  try {
    const response = await client.patch(`/cart/${id}`, { quantity });
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const removeCartItem = async (id: string) => {
  try {
    const response = await client.delete(`/cart/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
