import { Link } from "react-router-dom";

interface Props {
  title: string;
  price: number;
  imgUrl: string;
  fullImgUrl: string;
  buyLink?: string;
}

function ProductCard({ title, price, imgUrl, fullImgUrl, buyLink }: Props) {
  const pathname = "/product";
  const data = {
    title: title,
    amount: price,
    fullImgUrl: fullImgUrl,
    buyLink: buyLink,
  };
  return (
    <>
      <div className="w-[360px] h-auto mr-[10px] mb-[10px]">
        <Link to={pathname} state={data}>
          <div>
            <img className="w-[100%] h-[auto]" src={imgUrl}></img>
          </div>
          <div className="text-[black] bg-slate-100 p-4">
            <p>{title}</p>
            <p>{price} EUR</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
