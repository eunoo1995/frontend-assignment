import { Container, Stack, Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";

const Header = styled.header`
  background-color: #eee;
  height: 6rem;
  width: 100%;
  position: fixed;
`;

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link to="/products">
              <h1>Plugo</h1>
            </Link>
            <Stack direction="row" gap="30px">
              <Link to="/admin/upload">
                <AddIcon sx={{ fontSize: "30px" }} />
              </Link>
              <Link to="/cart">
                <ShoppingCartIcon sx={{ fontSize: "30px" }} />
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Header>
      <main>
        <Container sx={{ paddingTop: "6rem", paddingX: "1rem" }}>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
