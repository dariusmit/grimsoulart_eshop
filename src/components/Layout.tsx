import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const Layout = () => {
  let [toTopVisibility, setToTopVisibility] = useState(false);

  window.onscroll = () => {
    console.log("skrolinam");
    if (window.scrollY == 0) {
      console.log("pasiektas virsus");
      setToTopVisibility(false);
    } else {
      setToTopVisibility(true);
    }
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div className="flex flex-col min-[1024px]:h-screen">
        <Header />
        <div>
          {toTopVisibility ? (
            <button
              className="hidden min-[1440px]:block min-[1440px]:fixed min-[1440px]:bottom-0 min-[1440px]:hover:scale-105 min-[1440px]:transition 
            min-[1440px]:ease-in-out min-[1440px]:duration-300 min-[1440px]:opacity-40 min-[1440px]:scroll-smooth min-[1440px]:right-0 min-[1440px]:pr-12 min-[1440px]:pb-40"
              onClick={scrollToTop}
            >
              <div className="min-[1440px]:flex min-[1440px]:flex-col min-[1440px]:items-center min-[1440px]:justify-center">
                <img
                  className="min-[1440px]:w-[50px] min-[1440px]:h-auto min-[1440px]:mr-[4px]"
                  src="../../images/scroll_top.svg"
                />
                <b className="min-[1440px]:text-xl">Scroll Top</b>
              </div>
            </button>
          ) : null}
        </div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
