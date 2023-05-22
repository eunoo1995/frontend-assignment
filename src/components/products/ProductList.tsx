import styled from "@emotion/styled";
import { useProducts } from "../../hooks/useProducts";
import { ProductItem } from "./ProductItem";
import { Product } from "../../@types/interface";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin: 40px 0 40px 0;
  list-style: none;
`;

export const ProductList = () => {
  const { data: products } = useProducts();

  return (
    <StyledUl>
      {products &&
        products.map((product: Product) => (
          <ProductItem key={product.id} {...product} />
        ))}
    </StyledUl>
  );
};
