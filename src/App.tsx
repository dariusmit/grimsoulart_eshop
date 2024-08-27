import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";
import ProductPage from "./components/ProductPage";
import CommissionsPage from "./components/CommissionsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="commissions" element={<CommissionsPage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="product/raven_and_candles"
            element={<ProductPage id={1} />}
          />
          <Route path="product/stone_devil" element={<ProductPage id={2} />} />
          <Route path="product/wolf_skull" element={<ProductPage id={3} />} />
          <Route path="product/eating_scene" element={<ProductPage id={4} />} />
          <Route path="product/weird_skull" element={<ProductPage id={5} />} />
          <Route
            path="product/woman_and_bones"
            element={<ProductPage id={6} />}
          />
          <Route
            path="product/skull_eating_bat"
            element={<ProductPage id={7} />}
          />
          <Route
            path="product/mexican_skull"
            element={<ProductPage id={8} />}
          />
          <Route path="product/zombie" element={<ProductPage id={9} />} />
          <Route
            path="product/jungle_statues"
            element={<ProductPage id={10} />}
          />
          <Route path="product/filth" element={<ProductPage id={11} />} />
          <Route path="product/satan_horns" element={<ProductPage id={12} />} />
          <Route
            path="product/rotten_skull"
            element={<ProductPage id={13} />}
          />
          <Route path="product/angler_fish" element={<ProductPage id={14} />} />
          <Route
            path="product/spider_skull"
            element={<ProductPage id={15} />}
          />
          <Route path="product/tank_skull" element={<ProductPage id={16} />} />
          <Route
            path="product/spirit_of_lonely_places"
            element={<ProductPage id={17} />}
          />
          <Route
            path="product/tribe_skull_2"
            element={<ProductPage id={18} />}
          />
          <Route path="product/evil_totem" element={<ProductPage id={19} />} />
          <Route
            path="product/tribe_skull_1"
            element={<ProductPage id={20} />}
          />
          <Route
            path="product/octopus_skull"
            element={<ProductPage id={21} />}
          />
          <Route path="product/win_or_die" element={<ProductPage id={22} />} />
          <Route
            path="product/skull_wineglass"
            element={<ProductPage id={23} />}
          />
          <Route
            path="product/satan_in_hell"
            element={<ProductPage id={24} />}
          />
          <Route path="product/dying_space" element={<ProductPage id={25} />} />
          <Route
            path="product/graveyard_gate"
            element={<ProductPage id={26} />}
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
