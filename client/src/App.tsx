import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductPage from "./pages/ProductPage";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/header";
import Footer from "./components/footer";
import { Provider } from "react-redux";
import store from "./store/store";
import ShoppingbagPage from "./pages/ShoppingBagPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import InfoPage from "./pages/InfoPage";
import "./style/layout.scss";
import CategoryPageAbstract from "./pages/Category/CategoryPageAbstract";
import CategoryPageAnimals from "./pages/Category/CategoryPageAnimals";
import CategoryPagePlants from "./pages/Category/CategoryPagePlants";
import CategoryPageQuote from "./pages/Category/CategoryPageQuote";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route index element={<HomePage />} />
          <Route
            path="/ShoppingBagPage"
            element={<ShoppingbagPage></ShoppingbagPage>}
          />
          <Route
            path="/OrderConfirmationPage"
            element={<OrderConfirmationPage></OrderConfirmationPage>}
          />
          <Route path="/CheckoutPage" element={<CheckoutPage />} />
          <Route path="/ProductPage/:Id" element={<ProductPage />} />
          <Route path="/InfoPage" element={<InfoPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="/CategoryPageAbstract"
            element={<CategoryPageAbstract />}
          />
          <Route
            path="/CategoryPageAnimals"
            element={<CategoryPageAnimals />}
          />
          <Route path="/CategoryPageQuote" element={<CategoryPageQuote />} />
          <Route path="/CategoryPagePlants" element={<CategoryPagePlants />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
