import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "./Button";
import LoadingAnimatedItem from "./LoadingAnimatedItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../context/storeContext";

function ProductList() {
  const {
    quantities,
    fullProductsList,
    UpdateFullProductsList,
    addToCart,
    saveProductList,
  } = useContext(Context);

  const [searchParams, setSearchParams] = useSearchParams();
  let [pagesCount, setPagesCount] = useState<number>(0);
  let [itemsCount, setItemsCount] = useState<number>(0);
  let [paginatedProducts, UpdatePaginatedProducts] = useState([]);
  let [isLoading, UpdateLoadingStatus] = useState(true);
  const currentPage = Number(searchParams.get("p")) || getCurrentPage();
  const [search, setSearch] = useState<string>("");
  const [soldFilter, setSoldFilter] = useState(false);

  //Fetch products for current page
  useEffect(() => {
    window.scrollTo(0, 0);
    if (currentPage === 1) {
      setSearchParams({ p: `1` });
    }
    getData(currentPage);
    calcPagesAndItemsCount();
    saveCurrentPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    //Debounce function to trigger API fetch only once per user input. Waits 2 seconds after last call of itself.
    const delayDebounceFn = setTimeout(() => {
      getData(currentPage);
      calcPagesAndItemsCount();
    }, 2000);
    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  function prevPage(): void {
    if (currentPage !== 1) {
      setSearchParams({ p: `${currentPage - 1}` });
    }
  }

  function nextPage(): void {
    if (currentPage !== pagesCount) {
      setSearchParams({ p: `${currentPage + 1}` });
    }
  }

  function saveCurrentPage(currentPage: number): void {
    sessionStorage.setItem("current page", String(currentPage));
  }

  function getCurrentPage(): number {
    return Number(sessionStorage.getItem("current page") || 1);
  }

  async function calcPagesAndItemsCount(): Promise<void> {
    const api_url = `https://www.admin.dariusmolotokas.lt/wp-json/wp/v2/products?acf_format=standard&_fields=id,title,acf&per_page=99&search=${search}`;
    const req = await fetch(api_url);
    const products = await req.json();
    UpdateFullProductsList(products);
    saveProductList(products);
    setItemsCount(products.length);
    setPagesCount(Math.ceil(products.length / 9));
  }

  async function getData(currentPage: number): Promise<void> {
    UpdateLoadingStatus(true);
    const api_url = `https://www.admin.dariusmolotokas.lt/wp-json/wp/v2/products?acf_format=standard&_fields=id,title,acf&per_page=9&page=${currentPage}&search=${search}`;
    const req = await fetch(api_url);
    const products = await req.json();
    if (products.length !== 0) {
      UpdatePaginatedProducts(products);
    } else {
      setSearch("");
      toast.error("Product was not found. Try a different search term!");
    }
    UpdateLoadingStatus(false);
  }

  let filteredProducts;

  useEffect(() => {
    if (fullProductsList) {
      filteredProducts = fullProductsList.filter((product: any) => {
        return product.acf.sold_status === soldFilter;
      });
      UpdatePaginatedProducts(filteredProducts);
      console.log(filteredProducts);
    }
  }, [soldFilter]);

  return (
    <>
      {paginatedProducts && paginatedProducts.length > 0 ? (
        <>
          <div className="flex min-[1024px]:flex-row w-full mb-4">
            <div className="flex flex-col mr-4">
              <label htmlFor="search" className="mb-2">
                Search product:
              </label>
              <input
                id="search"
                name={search}
                onChange={(e) => {
                  const upperCaseSearch =
                    e.target.value.charAt(0).toUpperCase() +
                    e.target.value.slice(1);
                  setSearch(upperCaseSearch);
                }}
                placeholder="Enter product name..."
                type="text"
                className="p-2 border-2 rounded-md"
              />
            </div>
            <div className="flex flex-col mr-4">
              <label htmlFor="filter" className="mb-2">
                Select a filter:
              </label>
              <select
                name="filter"
                onChange={(e) => setSoldFilter(Boolean(e.target.value))}
                id="filter"
                className="p-2"
              >
                <option label="Not sold">{0}</option>
                <option label="Sold">{1}</option>
              </select>
            </div>
            {JSON.stringify(soldFilter)}
          </div>
          <div className="flex flex-col min-[1024px]:flex-row w-full justify-between items-center mb-4">
            <div className="flex">
              <div className="px-4 pb-4 min-[1024px]:p-0 min-[1024px]:mr-3">
                <Button onClick={prevPage} condition={currentPage === 1}>
                  Prev page
                </Button>
              </div>
              <div className="px-4 pb-4 min-[1024px]:p-0">
                <Button
                  onClick={nextPage}
                  condition={currentPage === pagesCount}
                >
                  Next page
                </Button>
              </div>
            </div>
            <p className="pb-1">
              {itemsCount} artworks, {pagesCount} pages | Current page{" "}
              {currentPage}
            </p>
          </div>
          <div className="min-[1024px]:grid min-[1024px]:grid-cols-3 min-[1024px]:gap-4">
            {paginatedProducts.map((product: any) => {
              if (product.acf.sold_status === false) {
              }
              return (
                <div
                  key={product.id}
                  className="w-full h-full pb-4 min-[1024px]:h-auto
            min-[1024px]:p-0"
                >
                  <Link to={product.acf.slug}>
                    <div
                      className="relative
                  min-[1024px]:h-[31vw]
                  min-[1440px]:max-h-[360px]"
                    >
                      <img
                        className={
                          product.acf.sold_status === false
                            ? "object-cover w-full h-[95.73vw] min-[1024px]:blur-[0.6px] min-[1024px]:h-full"
                            : "object-cover w-full opacity-60 h-[95.73vw] min-[1024px]:blur-[0.6px] min-[1024px]:h-full"
                        }
                        src={product.acf.image}
                      ></img>
                      {product.acf.sold_status === true ? (
                        <>
                          <div className="absolute top-0 left-0 w-full h-full bg-gray-400 opacity-50"></div>
                          <p className="flex text-white font-bold text-4xl absolute top-0 left-0 w-full h-full justify-center items-center">
                            SOLD
                          </p>
                        </>
                      ) : null}
                    </div>
                  </Link>
                  <div className="text-gray-800 bg-gray-100 flex p-6 items-center justify-between">
                    <div className="flex flex-col">
                      <p>{product.title.rendered}</p>
                      <p>{product.acf.price} EUR</p>
                    </div>
                    {product.acf.sold_status === false ? (
                      <>
                        <button
                          className="bg-black p-2 border-black border-2 text-white hover:bg-white hover:text-black"
                          onClick={() => {
                            addToCart(product.id);
                            if (!quantities.includes(product.id)) {
                              toast.success("Item added to cart!");
                            } else {
                              toast.warn("Item already in the cart!");
                            }
                          }}
                        >
                          Add to cart
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col min-[1024px]:flex-row w-full justify-between items-center mt-4">
            <div className="flex">
              <div className="px-4 pb-4 min-[1024px]:p-0 min-[1024px]:mr-3">
                <Button onClick={prevPage} condition={currentPage === 1}>
                  Prev page
                </Button>
              </div>
              <div className="px-4 pb-4 min-[1024px]:p-0">
                <Button
                  onClick={nextPage}
                  condition={currentPage === pagesCount}
                >
                  Next page
                </Button>
              </div>
            </div>
            <p className="pb-1">
              {itemsCount} artworks, {pagesCount} pages | Current page{" "}
              {currentPage}
            </p>
          </div>
        </>
      ) : (
        <div className="w-full flex flex-col justify-center items-center p-8">
          {isLoading ? (
            <LoadingAnimatedItem />
          ) : (
            <>
              <p className="text-2xl">Page not found.</p>
              <Link
                className="bg-black text-center text-white min-[1024px]:hover:scale-105 w-full min-[1024px]:transition
            min-[1024px]:ease-in-out min-[1024px]:duration-300 px-4 py-2 mt-4 min-[1024px]:w-[226px]"
                to="/?p=1"
              >
                Go back to 1st page
              </Link>
            </>
          )}
        </div>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default ProductList;
