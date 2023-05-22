import { useQuery } from "react-query";
import { fetchProductData } from "../api/products";

export const useProduct = (id: string) => {
  return useQuery("product", () => fetchProductData(id), { cacheTime: 0 });
};
