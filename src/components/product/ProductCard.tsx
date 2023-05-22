import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import { Stack, MenuItem, InputLabel, Button, Snackbar } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import styled from "@emotion/styled";
import { useAddToCart } from "../../hooks/useAddToCart";

const StyledButton = styled(Button)`
  background-color: #eee;
  border: none;
  border-radius: 2px;
  height: 40px;
  font-weight: bold;
  color: #222;
`;

const Text = styled.p`
  margin: 0;
`;

export const ProductCard = () => {
  const { id } = useParams();
  const { data: product } = useProduct(id as string);
  const { mutate } = useAddToCart();
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [open, setOpen] = useState(false);

  const handleSize = (event: SelectChangeEvent) => {
    setSize(event.target.value as string);
  };

  const handleColor = (event: SelectChangeEvent) => {
    setColor(event.target.value as string);
  };

  const handleClick = () => {
    setOpen(true);
    mutate({
      title: product.title,
      price: product.price,
      color,
      size,
      category: product.category,
      imageURL: product.imageURL,
      quantity: 1,
    });
  };

  return (
    <>
      {product && (
        <Stack
          direction="row"
          sx={{ width: "1000px", marginY: "40px", marginX: "auto" }}
        >
          <img src={product.imageURL} alt="" width={500} height={500} />
          <Stack
            width="500px"
            paddingLeft="40px"
            justifyContent="space-between"
          >
            <h3>{product.title}</h3>
            <Text style={{ fontWeight: "bold", fontSize: "18px" }}>
              {`₩ ${Number(product.price).toLocaleString()}`}
            </Text>
            <Text>{product.description}</Text>
            <InputLabel id="size-select-label">SIZE</InputLabel>
            <Select
              labelId="size-select-label"
              id="size-select"
              value={size}
              label="Age"
              onChange={handleSize}
            >
              {product.size.map((item: string, idx: number) => (
                <MenuItem key={idx} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            <InputLabel id="color-select-label">COLOR</InputLabel>
            <Select
              labelId="color-select-label"
              id="color-select"
              value={color}
              label="Age"
              onChange={handleColor}
            >
              {product.color.map((item: string, idx: number) => (
                <MenuItem key={idx} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            <StyledButton onClick={handleClick} disabled={!size || !color}>
              Add to Cart
            </StyledButton>
            <Snackbar
              open={open}
              autoHideDuration={3000}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              onClose={() => setOpen(false)}
              message="You have added an item to your cart."
            />
          </Stack>
        </Stack>
      )}
    </>
  );
};
