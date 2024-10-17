import NoPage from "./NoPage";
import orderData from "../types/orderData";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Props {
  isPaid: boolean;
  orderData: orderData;
  quantities: number[];
  setQuantities: React.Dispatch<React.SetStateAction<number[]>>;
  fullProductsList: any;
  total: number;
}

function Confirmation({
  isPaid,
  orderData,
  quantities,
  setQuantities,
  fullProductsList,
  total,
}: Props) {
  const navigate = useNavigate();
  let [itemsOrdered, updateItemsOrdered] = useState<number[]>([]);

  useEffect(() => {
    updateItemsOrdered(quantities);
    setQuantities([]);
  }, []);

  return (
    <>
      {isPaid ? (
        <div
          className="flex flex-col text-xl w-full min-h-[611px]
            min-[1024px]:mx-auto min-[1024px]:items-center min-[1024px]:justify-center
            min-[1440px]:max-w-[1110px]"
        >
          <p className="mb-4">
            Thank you for your order {orderData.firstName} {orderData.lastName}!
          </p>
          <p>Your ordered items:</p>
          {fullProductsList.map((product: any) => {
            if (itemsOrdered.includes(product.id)) {
              total += Number(product.acf.price);
              return (
                <div
                  className="flex items-center p-4 justify-between"
                  key={product.id}
                >
                  <div className="flex">
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
          <p className="text-xl mb-8 mt-4 ml-4">Oder Total: {total} EUR</p>
          <p>Download link was sent to your email: {orderData.email}</p>
          <button
            onClick={() => navigate("/")}
            className="p-4 bg-black text-white"
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
