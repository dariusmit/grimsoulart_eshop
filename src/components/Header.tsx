import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[black] p-[30px] mb-8">
        <Link to="/">
          <img
            className="mb-6 w-[250px] h-auto"
            src="../../images/logo.png"
          ></img>
        </Link>
        <div className="flex [&>a]:mr-[20px]">
          <Link to="/">Art for Sale</Link>
          <Link to="/about">About</Link>
          <Link className="!mr-0" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
