import ProductList from "./ProductList";

interface Props {
  quantities: number[];
  setQuantities: React.Dispatch<React.SetStateAction<number[]>>;
  fullProductsList: any;
  UpdateFullProductsList: React.Dispatch<React.SetStateAction<never[]>>;
}

const Home = ({ quantities, setQuantities, UpdateFullProductsList }: Props) => {
  function addToCart(id: number) {
    if (!quantities.includes(id)) {
      setQuantities((oldArray) => [...oldArray, id]);
    }
  }

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
        />
      </div>
    </>
  );
};

export default Home;
