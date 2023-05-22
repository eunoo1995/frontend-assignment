import { useMutation, useQueryClient } from "react-query";
import { removeCartItem } from "../api/cart";

export const useRemoveCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation((id: string) => removeCartItem(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
    },
  });
};
