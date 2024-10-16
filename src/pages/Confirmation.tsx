import NoPage from "./NoPage";
import orderData from "../types/orderData";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Props {
  isPaid: boolean;
  orderData: orderData;
  updateOrderData: React.Dispatch<React.SetStateAction<orderData>>;
  quantities: number[];
  setQuantities: React.Dispatch<React.SetStateAction<number[]>>;
  fullProductsList: any;
  total: number;
}

function Confirmation({
  isPaid,
  orderData,
  updateOrderData,
  quantities,
  setQuantities,
  fullProductsList,
  total,
}: Props) {
  const navigate = useNavigate();
  let [itemsOrdered, updateItemsOrdered] = useState<number[]>([]);

  //Code runs one time when component is mounted
  useEffect(() => {
    updateItemsOrdered(quantities);
    setQuantities([]);
  }, []);

  //This trick runs code when the page is left, in other words component is unmounted
  useEffect(() => {
    return () => {
      navigate("/");
      updateOrderData({ firstName: "", lastName: "", email: "" });
    };
  }, []);

  useEffect(() => {
    window.onbeforeunload = function () {
      return true;
    };
  }, []);

  return (
    <>
      {isPaid ? (
        <div
          className="flex flex-col w-full min-h-[611px]
            min-[1024px]:mx-auto min-[1024px]:items-center
            min-[1440px]:max-w-[1110px]"
        >
          <p className="text-xl mt-8 mb-4">
            Thank you for your order {orderData.firstName} {orderData.lastName}!
          </p>
          <p className="pb-4">Items ordered:</p>
          <div className="flex flex-col w-[300px] max-h-[250px] overflow-y-auto">
            {fullProductsList.map((product: any) => {
              if (itemsOrdered.includes(product.id)) {
                total += Number(product.acf.price);
                return (
                  <div key={product.id}>
                    <div className="flex mb-4">
                      <img
                        className="w-[50px] h-[50px] mr-4 object-cover"
                        src={product.acf.thumb}
                      />
                      <div className="flex flex-col mr-4">
                        <p>{product.title.rendered}</p>
                        <p>{product.acf.price} EUR</p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <p className="mb-8 mt-4">Oder Total: {total} EUR</p>
          <p className="mb-8">
            Download link was sent to your email: {orderData.email}
          </p>
          <button
            onClick={() => {
              navigate("/");
              updateOrderData({ firstName: "", lastName: "", email: "" });
            }}
            className="p-4 bg-black text-white border-2 border-black hover:bg-white hover:text-black"
          >
            Start a new order
          </button>
        </div>
      ) : (
        <NoPage />
      )}
    </>
  );
}

export default Confirmation;
