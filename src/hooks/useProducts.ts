import { useQuery } from "react-query";
import { fetchProductsData } from "../api/products";

export const useProducts = () => {
  return useQuery("products", fetchProductsData);
};
