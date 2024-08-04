import { Link } from "react-router-dom";

interface Props {
  homeLink: string;
  aboutLink: string;
  contactLink: string;
  disableMobileMenu: (status: boolean) => void;
}

function Navigation({
  homeLink,
  aboutLink,
  contactLink,
  disableMobileMenu,
}: Props) {
  return (
    <>
      <Link
        className={
          "border-b border-black hover:border-white hover:border-b pb-[1px] " +
          homeLink
        }
        to="/"
        onClick={() => disableMobileMenu(true)}
      >
        Art for Sale
      </Link>
      <Link
        className={
          "border-b border-black hover:border-white pb-[1px]" + " " + aboutLink
        }
        to="/about"
        onClick={() => disableMobileMenu(true)}
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
        onClick={() => disableMobileMenu(true)}
      >
        Contact
      </Link>
      <a
        className="!mr-0 hover:border-b pb-[1px]"
        href="https://www.etsy.com/shop/GrimsoulArt"
        target="_blank"
        onClick={() => disableMobileMenu(true)}
      >
        T-Shirts on Etsy
      </a>
    </>
  );
}

export default Navigation;
