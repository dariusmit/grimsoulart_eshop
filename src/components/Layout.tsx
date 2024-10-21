import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-[1024px]:h-screen">
        <Header />
        <div className="mt-44">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
