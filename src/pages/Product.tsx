import { ProductCard } from "../components/product/ProductCard";
import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";

export const ProductPage = () => {
  return (
    <>
      <Box sx={visuallyHidden}>
        <h2>Product Detail</h2>
      </Box>
      <ProductCard />
    </>
  );
};
