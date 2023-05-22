import Box from "@mui/material/Box";

export const NotFoundPage = () => {
  return (
    <Box sx={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>404</h1>
      <h3>페이지를 찾을 수 없습니다.</h3>
      <p>죄송합니다, 요청하신 페이지를 찾을 수 없습니다.</p>
    </Box>
  );
};
