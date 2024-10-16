import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import ProductPage from "./pages/ProductPage";
import CommissionsPage from "./pages/Commissions";
import { useState } from "react";
import Checkout from "./pages/Checkout";
import ConfirmationPage from "./pages/Confirmation";

function App() {
  let [fullProductsList, UpdateFullProductsList] = useState([]);
  let [quantities, setQuantities] = useState<number[]>([]);
  let [cartModal, updateCartModal] = useState(false);
  const isPaid = true;
  let firstName: string = "";
  let lastName: string = "";
  let email: string = "";
  let total: number = 0;

  function addToCart(id: number) {
    if (!quantities.includes(id)) {
      setQuantities((oldArray) => [...oldArray, id]);
    }
  }

  function deleteItem(id: number) {
    setQuantities(quantities.filter((item) => item !== id));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              quantities={quantities}
              fullProductsList={fullProductsList}
              total={total}
              deleteItem={deleteItem}
              cartModal={cartModal}
              updateCartModal={updateCartModal}
            />
          }
        >
          <Route
            index
            element={
              <Home
                fullProductsList={fullProductsList}
                UpdateFullProductsList={UpdateFullProductsList}
                addToCart={addToCart}
                quantities={quantities}
              />
            }
          />
          <Route path="commissions" element={<CommissionsPage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="product/:productSlug"
            element={
              <ProductPage addToCart={addToCart} quantities={quantities} />
            }
          />
          <Route
            path="checkout"
            element={
              <Checkout
                quantities={quantities}
                fullProductsList={fullProductsList}
                total={total}
                deleteItem={deleteItem}
                updateCartModal={updateCartModal}
                firstName=""
                lastName=""
                email=""
              />
            }
          />
          <Route
            path="confirmation"
            element={
              <ConfirmationPage
                firstName={firstName}
                lastName={lastName}
                email={email}
                isPaid={isPaid}
              />
            }
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
