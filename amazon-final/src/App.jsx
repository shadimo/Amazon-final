import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import ShoppingBasket from "./pages/ShoppingBasket";
import { ProductProvider } from "./components/Home/ProductProvider";
import { BasketProvider } from "./components/BasketContext";

const App = () => {
  return (
    <ProductProvider>
      <BasketProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/basket" element={<ShoppingBasket />} />
          </Routes>
        </Router>
      </BasketProvider>
    </ProductProvider>
  );
};

export default App;
