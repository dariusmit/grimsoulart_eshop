import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

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

  return (
    <>
      <div className="flex flex-col text-white items-center justify-center w-full bg-[black] p-[30px]">
        <Link to="/">
          <img
            className="mb-6 w-[250px] h-auto hover:scale-[104%] transition ease-in-out duration-300"
            src="../../images/logo.png"
          ></img>
        </Link>
        <div className="flex absolute top-[30px] right-[406px]">
          <a
            className="hover:scale-110 transition ease-in-out duration-300"
            href="https://www.instagram.com/grimsoulart/"
            target="_blank"
          >
            <img
              className="w-[20px] h-auto mr-6"
              src="../../images/instagram-icon.svg"
            />
          </a>
          <a
            className="hover:scale-110 transition ease-in-out duration-300"
            href="https://www.pinterest.com/grimsoulart/"
            target="_blank"
          >
            <img
              className="w-[20px] h-auto"
              src="../../images/pinterest-icon.svg"
            />
          </a>
        </div>

        <div className="flex [&>a]:mr-[20px]">
          <Link
            className={
              "border-b border-black hover:border-white hover:border-b pb-[1px] " +
              homeLink
            }
            to="/"
          >
            Art for Sale
          </Link>
          <Link
            className={
              "border-b border-black hover:border-white pb-[1px]" +
              " " +
              aboutLink
            }
            to="/about"
          >
            About
          </Link>
          <Link
            className={
              "border-b border-black hover:border-white pb-[1px]" +
              " " +
              contactLink
            }
            to="/contact"
          >
            Contact
          </Link>
          <a
            className="!mr-0 hover:border-b pb-[1px]"
            href="https://www.etsy.com/shop/GrimsoulArt"
            target="_blank"
          >
            T-Shirts on Etsy
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
