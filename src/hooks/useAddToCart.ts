import { useMutation, useQueryClient } from "react-query";
import { createCartItem } from "../api/cart";
import { CartItem } from "../@types/interface";

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation((newCartItem: CartItem) => createCartItem(newCartItem), {
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
    },
  });
};
