import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product/raven_and_candles" element={<ProductPage />} />
          <Route path="product/stone_devil" element={<ProductPage />} />
          <Route path="product/wolf_skull" element={<ProductPage />} />
          <Route path="product/eating_scene" element={<ProductPage />} />
          <Route path="product/weird_skull" element={<ProductPage />} />
          <Route path="product/woman_and_bones" element={<ProductPage />} />
          <Route path="product/skull_eating_bat" element={<ProductPage />} />
          <Route path="product/mexican_skull" element={<ProductPage />} />
          <Route path="product/zombie" element={<ProductPage />} />
          <Route path="product/jungle_statues" element={<ProductPage />} />
          <Route path="product/filth" element={<ProductPage />} />
          <Route path="product/satan_horns" element={<ProductPage />} />
          <Route path="product/rotten_skull" element={<ProductPage />} />
          <Route path="product/angler_fish" element={<ProductPage />} />
          <Route path="product/spider_skull" element={<ProductPage />} />
          <Route path="product/tank_skull" element={<ProductPage />} />
          <Route
            path="product/spirit_of_lonely_places"
            element={<ProductPage />}
          />
          <Route path="product/tribe_skull_2" element={<ProductPage />} />
          <Route path="product/evil_totem" element={<ProductPage />} />
          <Route path="product/tribe_skull_1" element={<ProductPage />} />
          <Route path="product/octopus_skull" element={<ProductPage />} />
          <Route path="product/win_or_die" element={<ProductPage />} />
          <Route path="product/skull_wineglass" element={<ProductPage />} />
          <Route path="product/satan_in_hell" element={<ProductPage />} />
          <Route path="product/dying_space" element={<ProductPage />} />
          <Route path="product/graveyard_gate" element={<ProductPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
