import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { CartItem } from "./CartItem";
import { useCartList } from "../../hooks/useCartList";
import { CartItem as CartItemType } from "../../@types/interface";

const CartList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 650px;
  height: 600px;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
`;

export const CartBoard = () => {
  const { data: cartList } = useCartList();

  console.log(
    cartList?.reduce((acc: number, cur: CartItemType) => {
      return acc + cur.price * cur.quantity;
    }, 0)
  );
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ width: "1000px", marginY: "40px", marginX: "auto" }}
    >
      <CartList>
        {cartList &&
          cartList.map((cartItem: CartItemType) => <CartItem {...cartItem} />)}
      </CartList>
      <Stack
        sx={{
          width: "300px",
          height: "400px",
          borderTop: "1px solid #999",
          borderBottom: "1px solid #999",
          paddingX: "10px",
        }}
      >
        <h3>PAYMENT RECEIPT</h3>
        <Stack direction="row" justifyContent="space-between">
          <p>total product amount</p>
          <p>
            {`₩ ${Number(
              cartList?.reduce(
                (acc: number, cur: CartItemType) =>
                  acc + cur.price * cur.quantity,
                0
              )
            ).toLocaleString()}`}
          </p>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <p>total discount</p>
          <p>₩ 0</p>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ borderBottom: "1px solid #eee" }}
        >
          <p>delivery fee</p>
          <p>₩ 0</p>
        </Stack>
        <Stack justifyContent="space-between" gap={1}>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            total payment amount
          </p>
          <p
            style={{
              alignSelf: "flex-end",
              fontSize: "20px",
            }}
          >{`₩ ${Number(
            cartList?.reduce(
              (acc: number, cur: CartItemType) =>
                acc + cur.price * cur.quantity,
              0
            )
          ).toLocaleString()}`}</p>
        </Stack>
      </Stack>
    </Stack>
  );
};
