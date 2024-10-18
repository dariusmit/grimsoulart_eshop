import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import CartItems from "./CartItems";

interface Props {
  quantities: number[];
  fullProductsList: any;
  total: number;
  deleteItem: (id: number) => void;
  cartModal: boolean;
  updateCartModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({
  quantities,
  fullProductsList,
  total,
  deleteItem,
  cartModal,
  updateCartModal,
}: Props) {
  let [homeLink, setHomeLink] = useState("");
  let [commissionsLink, setCommissionsLink] = useState("");
  let [aboutLink, setAboutLink] = useState("");
  let [contactLink, setContactLink] = useState("");

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

  function revealMobileMenu(): void {
    if (mobileMenuVisibility == false) {
      setMobileMenuVisibility(true);
      setMobileMenuPosition("fixed");
    } else {
      setMobileMenuVisibility(false);
      setMobileMenuPosition("absolute");
    }
  }

  function disableMobileMenu(status: boolean): void {
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
            className="my-10 w-[250px] h-auto min-[1024px]:mb-6 min-[1024px]:mt-0"
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
          <div className="absolute z-20 w-auto h-auto top-[173px] right-4 min-w-[370px] min-h-[200px] bg-black px-8 pb-8 pt-4">
            <CartItems
              quantities={quantities}
              fullProductsList={fullProductsList}
              total={total}
              deleteItem={deleteItem}
              updateCartModal={updateCartModal}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Header;
