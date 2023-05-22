import { useMutation, useQueryClient } from "react-query";
import { updateCartItem } from "../api/cart";

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (data: { id: string; quantity: number }) =>
      updateCartItem(data.id, data.quantity),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("cart");
      },
    }
  );
};
