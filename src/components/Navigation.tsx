import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

  return (
    <>
      <Link
        className={
          "border-b border-black hover:border-white hover:border-b pb-[1px] " +
          homeLink
        }
        to={"/?p=1"}
        onClick={() => disableMobileMenu(true)}
      >
        Art for Sale
      </Link>
      <Link
        className={
          "border-b border-black hover:border-white hover:border-b pb-[1px] " +
          commissionsLink
        }
        to="/commissions"
        onClick={() => disableMobileMenu(true)}
      >
        Commissions
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
          "border-b border-black hover:border-white pb-[1px] !mr-0" +
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
