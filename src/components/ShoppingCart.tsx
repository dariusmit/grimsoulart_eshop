import { Link } from "react-router-dom";

interface Props {
  quantities: number[];
  setQuantities: React.Dispatch<React.SetStateAction<number[]>>;
  fullProductsList: any;
  total: number;
  deleteItem: (id: number) => void;
}

function ShoppingCart({
  quantities,
  fullProductsList,
  total,
  deleteItem,
}: Props) {
  return (
    <div
      className="w-full mt-8 mb-16 px-4 h-screen
            min-[1024px]:mx-auto min-[1024px]:justify-between
            min-[1440px]:max-w-[1110px]"
    >
      <h1 className="text-2xl">Your cart items:</h1>
      {fullProductsList.map((product: any) => {
        if (quantities.includes(product.id)) {
          total += Number(product.acf.price);
          return (
            <div className="flex items-center p-4" key={product.id}>
              <img
                className="w-[75px] h-[75px] object-cover"
                src={product.acf.thumb}
              />
              <div className="flex flex-col text-xl">
                <p>{product.title.rendered}</p>
                <p>{product.acf.price} EUR</p>
              </div>
              <button
                onClick={() => deleteItem(product.id)}
                className="text-red-400 text-2xl"
              >
                Delete
              </button>
            </div>
          );
        }
      })}
      <p className="text-red-500 text-2xl mb-8">Total: {total} EUR</p>
      {location.pathname !== "/checkout" ? (
        <>
          <Link to="/" className="bg-gray-700 text-white p-4 mr-4">
            Continue Shopping
          </Link>
          <Link to="/checkout" className="bg-black text-white p-4">
            Go to Checkout
          </Link>
        </>
      ) : null}
    </div>
  );
}

export default ShoppingCart;
