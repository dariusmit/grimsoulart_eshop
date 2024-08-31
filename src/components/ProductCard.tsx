import { Link } from "react-router-dom";
import productList from "../data/productList";

interface Props {
  id: number;
}

function ProductCard({ id }: Props) {
  const data = {
    id: id,
  };

  const specificProduct = productList.find((product) => product.id === id);

  return (
    <>
      <div
        className={
          "w-full h-full pb-4 " +
          "min-[1024px]:w-[31vw] min-[1024px]:h-auto " +
          "min-[1024px]:hover:scale-[104%] min-[1024px]:transition min-[1024px]:p-0 min-[1024px]:ease-in-out min-[1024px]:duration-300 " +
          "min-[1440px]:max-w-[32%] " +
          specificProduct!!.marginValues
        }
      >
        <Link to={specificProduct!!.productUrl} state={data}>
          <div
            className="w-full h-full
          min-[1024px]:h-[31vw]
          min-[1440px]:max-h-[360px]"
          >
            <img
              className="object-cover w-full h-[95.73vw] min-[1024px]:blur-[0.6px] min-[1024px]:h-full"
              src={specificProduct!!.imgUrl}
            ></img>
          </div>
          <div className="text-gray-800 bg-gray-100 p-6">
            <p>{specificProduct!!.title}</p>
            <p>{specificProduct!!.price} EUR</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
