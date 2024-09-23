import ProductList from "./ProductList";

const Home = () => {
  return (
    <>
      <div
        className="w-full mt-8 mb-16 px-4
            min-[1024px]:flex min-[1024px]:flex-wrap min-[1024px]:mx-auto 
            min-[1440px]:max-w-[1110px]"
      >
        <ProductList />
      </div>
    </>
  );
};

export default Home;
