import { Link } from "react-router-dom";

interface Props {
  quantities: number[];
  fullProductsList: any;
  total: number;
  deleteItem: (id: number) => void;
  updateCartModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function CartItems({
  quantities,
  fullProductsList,
  total,
  deleteItem,
  updateCartModal,
}: Props) {
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
      {quantities.length !== 0 ? (
        <p className="text-xl mb-8 mt-4 ml-4">Total: {total} EUR</p>
      ) : null}
      {quantities.length !== 0 ? (
        location.pathname !== "/checkout" ? (
          <Link
            to="/checkout"
            onClick={() => updateCartModal(false)}
            className="bg-white text-black mx-4 mb-4 mt-6 p-2 block text-center"
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
