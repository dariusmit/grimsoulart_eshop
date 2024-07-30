import ProductCard from "./ProductCard";

const Home = () => {
  //Here we could actually use if statement or for loop, but not in return statement.

  return (
    <>
      <div className="flex flex-wrap w-[1110px] h-auto mt-[220px] mx-auto">
        <ProductCard
          title="Raven and Candles"
          price={200}
          imgUrl="../images/raven_and_candles.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Stone Devil"
          price={200}
          imgUrl="../images/stone_devil.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Wolf Skull"
          price={100}
          imgUrl="../images/wolf_skull.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Eating Scene"
          price={250}
          imgUrl="../images/eating_scene.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Weird Skull"
          price={200}
          imgUrl="../images/weird_skull.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Woman and Bones"
          price={300}
          imgUrl="../images/woman_and_bones.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Skull Eating Bat"
          price={250}
          imgUrl="../images/skull_eating_bat.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Mexican Skull"
          price={200}
          imgUrl="../images/mexican_skull.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Zombie"
          price={200}
          imgUrl="../images/zombie.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Ancient jungle statues"
          price={200}
          imgUrl="../images/jungle_statues.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Filth"
          price={150}
          imgUrl="../images/filth.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Satan Horns"
          price={150}
          imgUrl="../images/satan_horns.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Rotten Skull"
          price={200}
          imgUrl="../images/rotten_skull.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Zombie"
          price={200}
          imgUrl="../images/zombie.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Angler Skull Fish"
          price={150}
          imgUrl="../images/angler_fish.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Spider Skull"
          price={150}
          imgUrl="../images/spider_skull.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Tank Skull"
          price={200}
          imgUrl="../images/tank_skull.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Spirit of Lonely Places"
          price={250}
          imgUrl="../images/spirit_of_lonely_places.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Tribe Skull 2"
          price={250}
          imgUrl="../images/tribe_skull_2.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Evil Totem"
          price={200}
          imgUrl="../images/evil_totem.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Tribe Skull"
          price={250}
          imgUrl="../images/tribe_skull_1.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Octopus Skull"
          price={250}
          imgUrl="../images/octopus_skull.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Win or Die"
          price={250}
          imgUrl="../images/win_or_die.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Skull Wineglass"
          price={250}
          imgUrl="../images/skull_wineglass.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Satan in Hell"
          price={100}
          imgUrl="../images/satan_beheaded.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Dying Space"
          price={100}
          imgUrl="../images/dying_space.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
        <ProductCard
          title="Graveyard Gate"
          price={150}
          imgUrl="../images/graveyard_gate.jpg"
          buyLink="https://buy.stripe.com/test_eVaaFJ0sidKg0LKcMM"
        ></ProductCard>
      </div>
    </>
  );
};

export default Home;
