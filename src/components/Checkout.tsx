import ShoppingCart from "./ShoppingCart";
import CheckoutForm from "./CheckoutForm";
import { Link } from "react-router-dom";

interface Props {
  quantities: number[];
  setQuantities: React.Dispatch<React.SetStateAction<number[]>>;
  fullProductsList: any;
}

function Checkout({ quantities, setQuantities, fullProductsList }: Props) {
  return (
    <div className="p-4">
      <div>
        <CheckoutForm />
      </div>
      <ShoppingCart
        quantities={quantities}
        setQuantities={setQuantities}
        fullProductsList={fullProductsList}
      />
      <Link to="/confirmation" className="bg-orange-500 p-4">
        Place Order
      </Link>
    </div>
  );
}
export default Checkout;
