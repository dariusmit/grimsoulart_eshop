import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import ProductPage from "./pages/ProductPage";
import CommissionsPage from "./pages/Commissions";
import Checkout from "./pages/Checkout";
import ConfirmationPage from "./pages/Confirmation";
import { Context } from "./context/storeContext";
import useFunctions from "./hooks/useFunctions";

function App() {
  const {
    fullProductsList,
    UpdateFullProductsList,
    quantities,
    setQuantities,
    cartModal,
    updateCartModal,
    isPaid,
    orderData,
    updateOrderData,
    total,
    addToCart,
    deleteItem,
    saveProductList,
    saveQuantities,
    getProductList,
    getQuantities,
  } = useFunctions();

  return (
    <Context.Provider
      value={{
        fullProductsList,
        UpdateFullProductsList,
        quantities,
        setQuantities,
        cartModal,
        updateCartModal,
        isPaid,
        orderData,
        updateOrderData,
        total,
        addToCart,
        deleteItem,
        saveProductList,
        saveQuantities,
        getProductList,
        getQuantities,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="commissions" element={<CommissionsPage />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product/:productSlug" element={<ProductPage />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="confirmation" element={<ConfirmationPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
