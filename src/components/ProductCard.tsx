import { Link } from "react-router-dom";

interface Props {
  title: string;
  price: number;
  imgUrl: string;
  productUrl: string;
  buyLink?: string;
}

function ProductCard({ title, price, imgUrl, productUrl, buyLink }: Props) {
  const pathname = productUrl;
  const data = {
    title: title,
    amount: price,
    imgUrl: imgUrl,
    buyLink: buyLink,
  };
  return (
    <>
      <div className="w-[360px] h-[360px] mr-[10px] mb-[106px] hover:scale-[104%] transition ease-in-out duration-300">
        <Link to={pathname} state={data}>
          <div className="w-full h-full">
            <img
              className="object-cover blur-[0.6px] w-full h-full"
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
