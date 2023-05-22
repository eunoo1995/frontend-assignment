import { Routes, Route, Navigate } from "react-router-dom";
import { ProductPage, ProductsPage, CartPage, NotFoundPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/products" />} />
      <Route>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
