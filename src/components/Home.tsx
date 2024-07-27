import ProductCard from "./ProductCard";

const Home = () => {
  //Here we could actually use if statement or for loop, but not in return statement.

  return (
    <>
      <div className="flex flex-wrap w-[1200px] h-screen mx-auto">
        <ProductCard
          title="Stone Devil"
          price={200}
          imgUrl="../images/product1.png"
          fullImgUrl="../images/full/stone_devil_full.png"
          buyLink="https://buy.stripe.com/5kA7w3d5R1WLdMIbII"
        ></ProductCard>
        <ProductCard
          title="Test Payment Product"
          price={200}
          imgUrl="../images/product2.png"
          fullImgUrl="../images/full/raven_full.png"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Wolf Skull"
          price={100}
          imgUrl="../images/product3.png"
          fullImgUrl="../images/full/wolf_skull_full.png"
          buyLink=""
        ></ProductCard>
      </div>
    </>
  );
};

export default Home;
