import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {
  let [homeLink, setHomeLink] = useState("");
  let [aboutLink, setAboutLink] = useState("");
  let [contactLink, setContactLink] = useState("");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/") {
      setHomeLink("border-white");
      setAboutLink("");
      setContactLink("");
    } else if (location.pathname == "/about") {
      setHomeLink("");
      setAboutLink("border-white");
      setContactLink("");
    } else if (location.pathname == "/contact") {
      setHomeLink("");
      setAboutLink("");
      setContactLink("border-white");
    } else if (location.pathname.startsWith("/product")) {
      setHomeLink("border-white");
      setAboutLink("");
      setContactLink("");
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
        className="flex flex-col-reverse text-white items-center justify-center w-full bg-[black]
        min-[1024px]:p-[30px] min-[1024px]:flex-col min-[1024px]:mb-0"
      >
        <Link to="/">
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
          <div className="bg-black fixed z-[99] [&>a]:py-8 [&>a]:px-14 [&>a]:min-[1440px]:p-0 top-0 pt-4 pb-12 [&>a]:border-none [&>a]:pb-0 left-0 flex flex-col">
            <Navigation
              homeLink={homeLink}
              aboutLink={aboutLink}
              contactLink={contactLink}
              disableMobileMenu={disableMobileMenu}
            />
            <div className="fixed top-0 left-0 w-full h-screen z-[-99] bg-black opacity-75"></div>
          </div>
        ) : null}
        <div className="hidden min-[1024px]:flex min-[1024px]:[&>a]:mr-[20px]">
          <Navigation
            homeLink={homeLink}
            aboutLink={aboutLink}
            contactLink={contactLink}
            disableMobileMenu={disableMobileMenu}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
