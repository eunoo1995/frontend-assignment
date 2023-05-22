import styled from "@emotion/styled";
import { Product } from "../../@types/interface";
import { Link } from "react-router-dom";

const Li = styled.li`
  margin-bottom: 8px;
`;

const StyledImg = styled.img`
  width: 250px;
  height: 250px;
`;

const Text = styled.p`
  margin: 0;
  font-weight: bold;
  padding-top: 4px;
`;

export const ProductItem = (product: Product) => {
  return (
    <Li>
      <Link to={`${product.id}`}>
        <StyledImg src={product.imageURL} alt="" />
        <Text>{product.title}</Text>
        <Text>{`₩ ${Number(product.price).toLocaleString()}`}</Text>
      </Link>
    </Li>
  );
};
