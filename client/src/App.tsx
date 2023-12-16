import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductPage from "./pages/ProductPage";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/CheckoutPage" element={<CheckoutPage />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
