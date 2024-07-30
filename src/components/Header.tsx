import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex flex-col text-white items-center fixed top-0 left-0 justify-center w-full bg-[black] p-[30px]">
        <Link to="/">
          <img
            className="mb-6 w-[250px] h-auto"
            src="../../images/logo.png"
          ></img>
        </Link>
        <div className="flex [&>a]:mr-[20px]">
          <Link
            className="border-b border-black hover:border-white pb-[1px]"
            to="/"
          >
            Art for Sale
          </Link>
          <Link
            className="border-b border-black hover:border-white pb-[1px]"
            to="/about"
          >
            About
          </Link>
          <Link
            className="border-b border-black hover:border-white pb-[1px]"
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
