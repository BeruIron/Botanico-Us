
import { Routes, Route } from 'react-router-dom';
import BeerFinder from './pages/BeerFinder/BeerFinder';

import "./index.css";

import Taproom from './pages/TapRoom/TapRoom';
import Event from './pages/ServicePage/Event';
import TastingBeer from './pages/ServicePage/Tasting';
import OurBeer from './pages/OurBeer/OurBeer';
import Detail from './pages/OurBeer/Detail';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Restaurant from './pages/ServicePage/Restaurent';
import Story from './pages/StoryPage/Story';
import Service from './pages/ServicePage/Service';
import Blog from './pages/Blog/Blog';
import Menu from './pages/TapRoom/Menu';

import OurBeer from "./pages/OurBeer/OurBeer";
import Detail from "./pages/OurBeer/Detail";
import React from "react";
// import { useTranslation } from "react-i18next";

const App = () => {
 
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story" element={<Story />} />
      <Route path="/ourBeer" element={<OurBeer />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/service" element={<Service />} />
      <Route path="/event" element={<Event />} />
      <Route path="/tasting" element={<TastingBeer />} />
      <Route path="/restaurant" element={<Restaurant />} />
      <Route path="/beerFinder" element={<BeerFinder />} />
      <Route path="/taproom" element={<Taproom />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>

  );
};
export default App;