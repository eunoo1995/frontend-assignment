import { useMutation, useQueryClient } from "react-query";
import { createProduct } from "../api/products";
import { Product } from "../@types/interface";

export const useUploadProduct = () => {
  const queryClient = useQueryClient();

  return useMutation((newProduct: Product) => createProduct(newProduct), {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });
};
