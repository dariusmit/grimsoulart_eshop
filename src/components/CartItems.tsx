import { Link } from "react-router-dom";
import { Context } from "../context/storeContext";
import { useContext } from "react";

function CartItems() {
  let { total, deleteItem, updateCartModal, fullProductsList, quantities } =
    useContext(Context);

  return (
    <>
      {location.pathname !== "/checkout" ? (
        <div className="w-full flex justify-end text-xl">
          <button onClick={() => updateCartModal(false)}>x</button>
        </div>
      ) : null}
      {quantities.length !== 0 ? (
        <div className="flex px-4 pb-4 justify-between">
          <h1 className="text-xl">Items in cart:</h1>
        </div>
      ) : null}
      <div className="overflow-y-auto max-h-[250px] min-[1024px]:max-h-[420px] max-w-[315px] pr-6">
        {fullProductsList.map((product: any) => {
          if (quantities.includes(product.id)) {
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
                <button
                  onClick={() => deleteItem(product.id)}
                  className="text-red-400"
                >
                  remove
                </button>
              </div>
            );
          }
        })}
      </div>
      {quantities.length !== 0 ? (
        <p className="text-xl mb-8 mt-4 ml-4">Total: {total} EUR</p>
      ) : null}
      {quantities.length !== 0 ? (
        location.pathname !== "/checkout" ? (
          <Link
            to="/checkout"
            onClick={() => updateCartModal(false)}
            className="bg-white text-black border-2 border-black mx-4 mb-4 mt-6 p-2 block text-center hover:text-white hover:bg-black hover:border-white"
          >
            Go to Checkout
          </Link>
        ) : null
      ) : (
        <p className="flex justify-center mt-8 items-center text-xl">
          Cart is empty...
        </p>
      )}
    </>
  );
}

export default CartItems;
