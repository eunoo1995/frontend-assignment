import { Routes, Route, Navigate } from "react-router-dom";
import {
  ProductPage,
  ProductsPage,
  CartPage,
  NotFoundPage,
  UploadPage,
} from "./pages";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/products" />} />
      <Route element={<Layout />}>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin/upload" element={<UploadPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
