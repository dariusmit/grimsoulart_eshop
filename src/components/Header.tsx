import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";

interface Props {
  quantities: number[];
  fullProductsList: any;
  total: number;
  deleteItem: (id: number) => void;
}

function Header({ quantities, fullProductsList, total, deleteItem }: Props) {
  let [homeLink, setHomeLink] = useState("");
  let [commissionsLink, setCommissionsLink] = useState("");
  let [aboutLink, setAboutLink] = useState("");
  let [contactLink, setContactLink] = useState("");
  let [cartModal, updateCartModal] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/") {
      setHomeLink("border-white");
      setAboutLink("");
      setCommissionsLink("");
      setContactLink("");
    } else if (location.pathname == "/about") {
      setHomeLink("");
      setCommissionsLink("");
      setAboutLink("border-white");
      setContactLink("");
    } else if (location.pathname == "/contact") {
      setHomeLink("");
      setAboutLink("");
      setCommissionsLink("");
      setContactLink("border-white");
    } else if (location.pathname == "/commissions") {
      setHomeLink("");
      setCommissionsLink("border-white");
      setAboutLink("");
      setContactLink("");
    } else if (location.pathname.startsWith("/product")) {
      setHomeLink("border-white");
      setAboutLink("");
      setContactLink("");
      setCommissionsLink("");
    }
  }, [location.pathname]);

  let [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);
  let [mobileMenuPosition, setMobileMenuPosition] = useState("absolute");

  function revealMobileMenu() {
    if (mobileMenuVisibility == false) {
      setMobileMenuVisibility(true);
      setMobileMenuPosition("fixed");
    } else {
      setMobileMenuVisibility(false);
      setMobileMenuPosition("absolute");
    }
  }

  function disableMobileMenu(status: boolean) {
    if (status == true) {
      setMobileMenuVisibility(false);
      setMobileMenuPosition("absolute");
    }
  }

  return (
    <>
      <div
        className="fixed z-[99] top-0 left-0 flex flex-col-reverse text-white items-center justify-center w-full bg-[black]
        min-[1024px]:p-[30px] min-[1024px]:flex-col min-[1024px]:mb-0"
      >
        <Link to={"/?p=1"}>
          <img
            className="my-10 w-[250px] h-auto min-[1024px]:hover:scale-[104%] min-[1024px]:transition  min-[1024px]:ease-in-out min-[1024px]:duration-300 min-[1024px]:mb-6 min-[1024px]:mt-0"
            src="../../images/logo.png"
          ></img>
        </Link>
        <div
          className={
            "w-[20px] h-auto z-[100] top-0 left-0 m-4 " + mobileMenuPosition
          }
        >
          <button
            onClick={revealMobileMenu}
            className="hover:pointer min-[1024px]:hidden"
          >
            <img src="../../images/hamburger_menu.svg" />
          </button>
        </div>
        {mobileMenuVisibility ? (
          <div className="bg-black fixed text-xl w-full z-[99] [&>a]:py-10 [&>a]:px-16 [&>a]:min-[1440px]:p-0 top-0 pt-4 pb-12 [&>a]:border-none [&>a]:pb-0 left-0 flex flex-col">
            <Navigation
              homeLink={homeLink}
              commissionsLink={commissionsLink}
              aboutLink={aboutLink}
              contactLink={contactLink}
              disableMobileMenu={disableMobileMenu}
            />
            <div
              onClick={() => {
                setMobileMenuVisibility(false);
                setMobileMenuPosition("absolute");
              }}
              className="fixed top-0 left-0 w-full h-screen z-[-99] bg-black opacity-75"
            ></div>
          </div>
        ) : null}
        <div className="hidden min-[1024px]:flex min-[1024px]:[&>a]:mr-[20px]">
          <Navigation
            homeLink={homeLink}
            commissionsLink={commissionsLink}
            aboutLink={aboutLink}
            contactLink={contactLink}
            disableMobileMenu={disableMobileMenu}
          />
        </div>
        <button
          onClick={() => {
            if (cartModal) {
              updateCartModal(false);
            } else {
              updateCartModal(true);
            }
          }}
          className="w-[50px] flex h-auto absolute z-9 right-0 my-auto mr-28"
        >
          <img className="w-[30px]" src="../../images/cart.svg" />
          <p className="flex items-center justify-center absolute z-99 ml-[15px] mt-[20px] bg-white text-black rounded-full w-[20px] h-[20px]">
            {quantities.length}
          </p>
        </button>
        {cartModal ? (
          <div className="absolute z-20 w-auto h-auto top-[170px] right-0 min-w-[350px] min-h-[200px] bg-black px-8 pb-8 pt-4">
            <div className="w-full flex justify-end text-xl">
              <button onClick={() => updateCartModal(false)}>x</button>
            </div>
            {quantities.length !== 0 ? (
              <div className="flex px-4 pb-4 justify-between">
                <h1 className="text-xl">Items in cart:</h1>
              </div>
            ) : null}

            {fullProductsList.map((product: any) => {
              if (quantities.includes(product.id)) {
                total += Number(product.acf.price);
                return (
                  <>
                    <div
                      className="flex items-center p-4 justify-between"
                      key={product.id}
                    >
                      <div className="flex">
                        <img
                          className="w-[50px] h-[50px] mr-4 object-cover"
                          src={product.acf.thumb}
                        />
                        <div className="flex flex-col mr-4">
                          <p>{product.title.rendered}</p>
                          <p>{product.acf.price} EUR</p>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteItem(product.id)}
                        className="text-red-400"
                      >
                        remove
                      </button>
                    </div>
                  </>
                );
              }
            })}
            {quantities.length !== 0 ? (
              <p className="text-xl mb-8 mt-4 ml-4">Total: {total} EUR</p>
            ) : null}
            {quantities.length !== 0 ? (
              <Link
                to="/checkout"
                onClick={() => updateCartModal(false)}
                className="bg-white text-black mx-4 mb-4 mt-6 p-2 block text-center"
              >
                Go to Checkout
              </Link>
            ) : (
              <p className="flex justify-center mt-8 items-center text-xl">
                Cart is empty...
              </p>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Header;
