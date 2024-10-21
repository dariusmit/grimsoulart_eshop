import { useState, useEffect } from "react";
import orderData from "../types/orderData";

function useFunctions() {
  let [fullProductsList, UpdateFullProductsList] = useState(getProductList());
  let [quantities, setQuantities] = useState<number[]>(getQuantities());
  let [cartModal, updateCartModal] = useState(false);
  const isPaid = true;
  let [orderData, updateOrderData] = useState<orderData>({
    firstName: "",
    lastName: "",
    email: "",
  });
  let total: number = 0;

  useEffect(() => {
    saveQuantities(quantities);
  }, [quantities]);

  function addToCart(id: number): void {
    if (!quantities.includes(id)) {
      setQuantities((oldArray) => [...oldArray, id]);
    }
  }

  function deleteItem(id: number): void {
    setQuantities(quantities.filter((item) => item !== id));
  }

  function saveProductList(products: any): void {
    localStorage.setItem("product list", JSON.stringify(products));
  }

  function saveQuantities(quantities: any): void {
    localStorage.setItem("cart items", JSON.stringify(quantities));
  }

  function getProductList() {
    return JSON.parse(localStorage.getItem("product list") || "{}");
  }

  function getQuantities() {
    return JSON.parse(localStorage.getItem("cart items") || "[]");
  }

  return {
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
  };
}

export default useFunctions;
