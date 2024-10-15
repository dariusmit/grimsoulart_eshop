import ProductList from "./ProductList";

interface Props {
  fullProductsList: any;
  UpdateFullProductsList: React.Dispatch<React.SetStateAction<never[]>>;
  addToCart: (id: number) => void;
  quantities: number[];
}

const Home = ({ UpdateFullProductsList, addToCart, quantities }: Props) => {
  return (
    <>
      <div
        className="w-full mt-8 mb-16 px-4
            min-[1024px]:mx-auto min-[1024px]:justify-between
            min-[1440px]:max-w-[1110px]"
      >
        <ProductList
          UpdateFullProductsList={UpdateFullProductsList}
          addToCart={addToCart}
          quantities={quantities}
        />
      </div>
    </>
  );
};

export default Home;
