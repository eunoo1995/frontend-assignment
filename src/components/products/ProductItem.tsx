import styled from "@emotion/styled";
import { Product } from "../../@types/interface";
import { Link } from "react-router-dom";

const StyledImg = styled.img`
  width: 250px;
  height: 250px;
`;

export const ProductItem = (product: Product) => {
  return (
    <li>
      <Link to={`${product.id}`}>
        <StyledImg src={product.imageURL} alt="" />
        <h3>{product.title}</h3>
        <span>{product.price}</span>
      </Link>
    </li>
  );
};
