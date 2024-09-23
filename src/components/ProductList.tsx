import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductList() {
  const api_url =
    "https://www.admin.grimsoulart.com/wp-json/wp/v2/products?acf_format=standard&_fields=id,title,acf&per_page=30";

  let [productData, UpdateProductData]: any = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const req = await fetch(api_url);
    const products = await req.json();
    UpdateProductData(products);
  }

  return (
    <>
      {productData.map((product: any) => {
        if (product.acf.sold_status === false) {
        }
        return (
          <div
            key={product.id}
            className="w-full h-full pb-4 min-[1024px]:w-[31vw] min-[1024px]:h-auto min-[1024px]:hover:scale-[104%] min-[1024px]:transition
            min-[1024px]:p-0 min-[1024px]:ease-in-out min-[1024px]:duration-300 min-[1440px]:max-w-[32%]
            min-[1024px]:mx-[0.4rem] min-[1024px]:mb-3"
          >
            <Link to={product.acf.slug}>
              <div
                className="w-full h-full relative
                  min-[1024px]:h-[31vw]
                  min-[1440px]:max-h-[360px]"
              >
                <img
                  className={
                    product.acf.sold_status === false
                      ? "object-cover w-full h-[95.73vw] min-[1024px]:blur-[0.6px] min-[1024px]:h-full"
                      : "object-cover w-full opacity-60 h-[95.73vw] min-[1024px]:blur-[0.6px] min-[1024px]:h-full"
                  }
                  src={product.acf.product_image}
                ></img>
                {product.acf.sold_status === true ? (
                  <>
                    <div className=" absolute top-0 left-0 w-full h-full bg-gray-400 opacity-50"></div>
                    <p className="flex text-white font-bold text-4xl absolute top-0 left-0 w-full h-full justify-center items-center">
                      SOLD
                    </p>
                  </>
                ) : null}
              </div>
              <div className="text-gray-800 bg-gray-100 p-6">
                <p>{product.title.rendered}</p>
                <p>{product.acf.price} EUR</p>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default ProductList;
