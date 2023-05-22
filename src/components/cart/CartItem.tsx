import styled from "@emotion/styled";
import { CartItem as CartItemType } from "../../@types/interface";
import { Button, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { useUpdateCartItem } from "../../hooks/useUpdateCartItem";
import { useRemoveCartItem } from "../../hooks/useRemoveCartItem";

const Li = styled.li`
  height: 100px;
  border-bottom: 1px solid #eee;
`;

const Title = styled.h3`
  margin: 0;
`;

const Text = styled.span`
  color: #666;
`;

export const CartItem = ({
  id,
  title,
  imageURL,
  price,
  size,
  color,
  quantity,
}: CartItemType) => {
  const { mutate: update } = useUpdateCartItem();
  const { mutate: remove } = useRemoveCartItem();

  const handleMinus = () => {
    update({ id: String(id), quantity: quantity - 1 });
  };

  const handlePlus = () => {
    update({ id: String(id), quantity: quantity + 1 });
  };

  const handleRemove = () => {
    remove(String(id));
  };

  return (
    <Li>
      <Stack direction="row" justifyContent="space-between">
        <img src={imageURL} alt="" width="100px" height="100px" />
        <Stack direction="column" justifyContent="center" gap={1} width="250px">
          <Title>{title}</Title>
          <Text>{`size : ${size} / color : ${color}`}</Text>
        </Stack>
        <Stack direction="row" alignItems="center" gap={1}>
          <Button disabled={quantity < 2} onClick={handleMinus}>
            <RemoveCircleOutlineIcon sx={{ color: "#333" }} />
          </Button>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap={1}
          >
            <Text>{`₩ ${Number(price).toLocaleString()}`}</Text>
            <Text>{`${quantity} pcs`}</Text>
          </Stack>
          <Button onClick={handlePlus}>
            <AddCircleOutlineIcon sx={{ color: "#333" }} />
          </Button>
        </Stack>
        <Button onClick={handleRemove}>
          <DeleteIcon sx={{ color: "#333" }} />
        </Button>
      </Stack>
    </Li>
  );
};
