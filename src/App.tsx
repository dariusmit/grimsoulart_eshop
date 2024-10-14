import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";
import ProductPage from "./components/ProductPage";
import CommissionsPage from "./components/CommissionsPage";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";
import Checkout from "./components/Checkout";
import ConfirmationPage from "./components/ConfirmationPage";

function App() {
  let [fullProductsList, UpdateFullProductsList] = useState([]);
  let [quantities, setQuantities] = useState<number[]>([]);
  const isPaid = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home
                quantities={quantities}
                setQuantities={setQuantities}
                fullProductsList={fullProductsList}
                UpdateFullProductsList={UpdateFullProductsList}
              />
            }
          />
          <Route path="commissions" element={<CommissionsPage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product/:productSlug" element={<ProductPage />} />
          <Route
            path="cart"
            element={
              <ShoppingCart
                quantities={quantities}
                setQuantities={setQuantities}
                fullProductsList={fullProductsList}
              />
            }
          />
          <Route
            path="checkout"
            element={
              <Checkout
                quantities={quantities}
                setQuantities={setQuantities}
                fullProductsList={fullProductsList}
              />
            }
          />
          <Route
            path="confirmation"
            element={<ConfirmationPage isPaid={isPaid} />}
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
