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
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Header />
      <div>
        {toTopVisibility ? (
          <button
            className="fixed bottom-0 right-0 pr-28 pb-48"
            onClick={scrollToTop}
          >
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-[40px] h-auto mb-4 mr-[4px]"
                src="../../images/scroll_top.png"
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
