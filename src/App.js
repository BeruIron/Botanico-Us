
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./index.css";
import Story from "./pages/StoryPage/Story";
import BeerFinder from "./pages/BeerFinder/BeerFinder";
import Taproom from "./pages/TapRoom/TapRoom";
import Restaurant from "./pages/ServicePage/Restaurant";
import Event from "./pages/ServicePage/Event";
import TestingBeer from "./pages/ServicePage/Testing";
import Blog from "./pages/Blog/Blog";
import OurBeer from "./pages/OurBeer/OurBeer";
import Detail from "./pages/OurBeer/Detail";
import Service from "./pages/ServicePage/Service"
import ContactForm from "./pages/Contact/Contact"
import Menu from "./pages/TapRoom/Menu";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/ourBeer" element={<OurBeer />} />
        <Route path="/ourBeer/detail" element={<Detail />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/beerFinder" element={<BeerFinder />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/event" element={<Event />} />
        <Route path="/testing" element={<TestingBeer />} />
        <Route path="/taproom" element={<Taproom />} />

        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/menu" element={<Menu />} />

      </Routes>
    </>
  );
};

export default App;
