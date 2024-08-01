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
      <Header />
      <div>
        {toTopVisibility ? (
          <button
            className="fixed bottom-0 hover:scale-105 transition ease-in-out duration-300 opacity-40 scroll-smooth right-0 pr-12 pb-40"
            onClick={scrollToTop}
          >
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-[50px] h-auto mr-[4px]"
                src="../../images/scroll_top.svg"
              />
              <b className="text-xl">Scroll Top</b>
            </div>
          </button>
        ) : null}
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
