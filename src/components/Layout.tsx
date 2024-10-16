import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  quantities: number[];
  fullProductsList: any;
  total: number;
  deleteItem: (id: number) => void;
  cartModal: boolean;
  updateCartModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout = ({
  quantities,
  fullProductsList,
  total,
  deleteItem,
  cartModal,
  updateCartModal,
}: Props) => {
  return (
    <>
      <div className="flex flex-col min-[1024px]:h-screen">
        <Header
          quantities={quantities}
          fullProductsList={fullProductsList}
          total={total}
          deleteItem={deleteItem}
          cartModal={cartModal}
          updateCartModal={updateCartModal}
        />
        <div className="mt-44">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
