import { useQuery } from "react-query";
import { fetchCartdata } from "../api/cart";

export const useCartList = () => {
  return useQuery("cart", fetchCartdata);
};
