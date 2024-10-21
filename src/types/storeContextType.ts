import orderData from "./orderData";

interface StoreContextType {
  fullProductsList: never[];
  UpdateFullProductsList: React.Dispatch<React.SetStateAction<never[]>>;
  quantities: number[];
  setQuantities: React.Dispatch<React.SetStateAction<number[]>>;
  cartModal: boolean;
  updateCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  isPaid: boolean;
  orderData: orderData;
  updateOrderData: React.Dispatch<React.SetStateAction<orderData>>;
  total: number;
  addToCart: (id: number) => void;
  deleteItem: (id: number) => void;
  saveProductList: (products: any) => void;
  saveQuantities: (quantities: any) => void;
  getProductList: () => any;
  getQuantities: () => any;
}

export default StoreContextType;
