import CartItems from "../components/CartItems";
import CheckoutForm from "../components/CheckoutForm";
import { useNavigate } from "react-router-dom";
import orderData from "../types/orderData";
import { useEffect } from "react";

interface Props {
  quantities: number[];
  fullProductsList: any;
  total: number;
  deleteItem: (id: number) => void;
  updateCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  orderData: orderData;
  updateOrderData: React.Dispatch<React.SetStateAction<orderData>>;
}

function Checkout({
  quantities,
  fullProductsList,
  total,
  deleteItem,
  updateCartModal,
  orderData,
  updateOrderData,
}: Props) {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="flex flex-col w-full mt-8 mb-16 px-4
            min-[1024px]:mx-auto min-[1024px]:items-center min-[1024px]:min-h-[515px]
            min-[1440px]:max-w-[1110px]"
      >
        <div className="flex flex-col-reverse min-[1024px]:flex-row">
          <div className="p-4 min-[1024px]:p-0 min-[1024px]:mr-8">
            <p className="text-xl mb-6">Contact info:</p>
            <CheckoutForm
              orderData={orderData}
              updateOrderData={updateOrderData}
            />
          </div>
          <div className="min-[1024px]:pr-8 min-w-[300px]">
            <CartItems
              quantities={quantities}
              fullProductsList={fullProductsList}
              total={total}
              deleteItem={deleteItem}
              updateCartModal={updateCartModal}
            />
          </div>
        </div>
      </div>
      {quantities.length === 0 ? navigate("/") : null}
    </>
  );
}
export default Checkout;
