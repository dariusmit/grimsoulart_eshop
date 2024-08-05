import { Link } from "react-router-dom";

interface Props {
  title: string;
  price: number;
  imgUrl: string;
  productUrl: string;
  buyLink?: string;
  marginValues?: string;
}

function ProductCard({
  title,
  price,
  imgUrl,
  productUrl,
  buyLink,
  marginValues,
}: Props) {
  const pathname = productUrl;
  const data = {
    title: title,
    amount: price,
    imgUrl: imgUrl,
    buyLink: buyLink,
  };
  return (
    <>
      <div
        className={
          "w-full h-full pb-4 " +
          "min-[1024px]:w-[31vw] min-[1024px]:h-auto " +
          "min-[1024px]:hover:scale-[104%] min-[1024px]:transition min-[1024px]:p-0 min-[1024px]:ease-in-out min-[1024px]:duration-300 " +
          "min-[1440px]:max-w-[32%] " +
          marginValues
        }
      >
        <Link to={pathname} state={data}>
          <div
            className="w-full h-full
          min-[1024px]:h-[31vw]
          min-[1440px]:max-h-[360px]"
          >
            <img
              className="object-cover blur-[0.3px] w-full h-[95.73vw] min-[1024px]:blur-[0.6px] min-[1024px]:h-full"
              src={imgUrl}
            ></img>
          </div>
          <div className="text-gray-800 bg-gray-100 p-6">
            <p>{title}</p>
            <p>{price} EUR</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
