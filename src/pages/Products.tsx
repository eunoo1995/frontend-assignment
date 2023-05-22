import { ProductList } from "../components/products/ProductList";
import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";

export const ProductsPage = () => {
  return (
    <>
      <Box sx={visuallyHidden}>
        <h2>Product List</h2>
      </Box>
      <ProductList />
    </>
  );
};
