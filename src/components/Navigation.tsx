import { Link } from "react-router-dom";

interface Props {
  homeLink: string;
  commissionsLink: string;
  aboutLink: string;
  contactLink: string;
  disableMobileMenu: (status: boolean) => void;
}

function Navigation({
  homeLink,
  commissionsLink,
  aboutLink,
  contactLink,
  disableMobileMenu,
}: Props) {
  return (
    <>
      <Link
        className={
          "border-b border-black hover:border-white hover:border-b pb-1 " +
          homeLink
        }
        to={"/?p=1"}
        onClick={() => disableMobileMenu(true)}
      >
        Art for Sale
      </Link>
      <Link
        className={
          "border-b border-black hover:border-white hover:border-b pb-1 " +
          commissionsLink
        }
        to="/commissions"
        onClick={() => disableMobileMenu(true)}
      >
        Commissions
      </Link>
      <Link
        className={
          "border-b border-black hover:border-white pb-1" + " " + aboutLink
        }
        to="/about"
        onClick={() => disableMobileMenu(true)}
      >
        About
      </Link>
      <Link
        className={
          "border-b border-black hover:border-white pb-1 !mr-0" +
          " " +
          contactLink
        }
        to="/contact"
        onClick={() => disableMobileMenu(true)}
      >
        Contact
      </Link>
    </>
  );
}

export default Navigation;
