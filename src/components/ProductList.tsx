import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();

  let [pagesCount, setPagesCount] = useState<number>(0);
  let [itemsCount, setItemsCount] = useState<number>(0);
  let [productData, UpdateProductData] = useState([]);

  // Read current page from search params, fallback to storage
  const currentPage = Number(searchParams.get("p")) || getCurrentPage();

  // Fetch data for the current page
  useEffect(() => {
    calcPagesAndItemsCount();
    //Pages count 0. How to get it here
    if (currentPage <= pagesCount) {
      getData(currentPage);
      saveCurrentPage(currentPage);
    } else {
      setSearchParams({ p: `1` });
    }
  }, [currentPage]);

  function prevPage() {
    if (currentPage !== 1) {
      setSearchParams({ p: `${currentPage - 1}` });
    }
  }

  function nextPage() {
    if (currentPage !== pagesCount) {
      setSearchParams({ p: `${currentPage + 1}` });
    }
  }

  function saveCurrentPage(currentPage: number) {
    sessionStorage.setItem("current page", String(currentPage));
  }

  function getCurrentPage(): number {
    return Number(sessionStorage.getItem("current page") || 1);
  }

  async function calcPagesAndItemsCount() {
    const api_url = `https://www.admin.grimsoulart.com/wp-json/wp/v2/products?acf_format=standard&_fields=id,title,acf&per_page=99`;
    const req = await fetch(api_url);
    const products = await req.json();
    setItemsCount(products.length);
    setPagesCount(Math.floor(products.length / 9));
  }

  async function getData(currentPage: number) {
    const api_url = `https://www.admin.grimsoulart.com/wp-json/wp/v2/products?acf_format=standard&_fields=id,title,acf&per_page=9&page=${currentPage}`;
    const req = await fetch(api_url);
    const products = await req.json();
    UpdateProductData(products);
  }

  return (
    <>
      <div className="flex w-full justify-between min-[1024px]:mx-[0.4rem] mb-4">
        <p>
          {itemsCount} artworks, {pagesCount} pages | Current page {currentPage}
        </p>
      </div>
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
      <div className="min-[1024px]:mx-[0.4rem]">
        <button
          className={
            currentPage === 1
              ? "bg-black opacity-40 pointer-events-none text-white min-[1024px]:hover:scale-105 w-full min-[1024px]:transition min-[1024px]:ease-in-out mr-4 min-[1024px]:duration-300 px-4 py-2 mt-4 min-[1024px]:w-[226px]"
              : "bg-black text-white min-[1024px]:hover:scale-105 w-full min-[1024px]:transition min-[1024px]:ease-in-out mr-4 min-[1024px]:duration-300 px-4 py-2 mt-4 min-[1024px]:w-[226px]"
          }
          onClick={prevPage}
        >
          Prev Page
        </button>
        <button
          onClick={nextPage}
          className={
            currentPage === pagesCount
              ? "bg-black opacity-40 pointer-events-none text-white min-[1024px]:hover:scale-105 w-full min-[1024px]:transition min-[1024px]:ease-in-out min-[1024px]:duration-300 px-4 py-2 mt-4 min-[1024px]:w-[226px]"
              : "bg-black text-white min-[1024px]:hover:scale-105 w-full min-[1024px]:transition min-[1024px]:ease-in-out min-[1024px]:duration-300 px-4 py-2 mt-4 min-[1024px]:w-[226px]"
          }
        >
          Next Page
        </button>
      </div>
    </>
  );
}

export default ProductList;
