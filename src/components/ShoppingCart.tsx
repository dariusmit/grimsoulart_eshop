import { Link } from "react-router-dom";

interface Props {
  quantities: number[];
  setQuantities: React.Dispatch<React.SetStateAction<number[]>>;
  fullProductsList: any;
}

function ShoppingCart({ quantities, setQuantities, fullProductsList }: Props) {
  let total: number = 0;

  function deleteItem(id: number) {
    setQuantities(quantities.filter((item) => item !== id));
  }

  return (
    <>
      <h1 className="text-2xl">Your cart items:</h1>
      {fullProductsList.map((product: any) => {
        if (quantities.includes(product.id)) {
          total += Number(product.acf.price);
          return (
            <div key={product.id}>
              <img
                className="w-[100px] h-[100px] object-cover"
                src={product.acf.image}
              />
              {product.title.rendered}
              {product.acf.price}
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
      <p className="text-red-500 text-2xl mb-8">Total: {total}</p>
      {location.pathname !== "/checkout" ? (
        <Link to="/checkout" className="bg-orange-500 p-4">
          Go to Checkout
        </Link>
      ) : null}
    </>
  );
}

export default ShoppingCart;
