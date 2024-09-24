import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./index.css";
import Story from "./pages/StoryPage/Story";

import BeerFinder from "./pages/BeerFinder/BeerFinder";
import Taproom from "./pages/TapRoom/TapRoom";
import Restaurant from "./pages/ServicePage/Restaurent";
import Servicepage from "../src/pages/ServicePage/Service";

import Event from "./pages/ServicePage/Event";
import TestingBeer from "./pages/ServicePage/Testing";

import OurBeer from "./pages/OurBeer/OurBeer";
import Detail from "./pages/OurBeer/Detail";
import React from "react";
// import { useTranslation } from "react-i18next";

const App = () => {
 
  return (

    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/story" element={<Story />} />
        <Route path="/ourBeer" element={<OurBeer />} />
        <Route path="/details" element={<OurBeer />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/beerFinder" element={<BeerFinder />} />
        <Route path="/story" element={<Story />} />
        <Route path="/event" element={<Event />} />
        <Route path="/testing" element={<TestingBeer />} />
        <Route path="/taproom" element={<Taproom />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/service" element={<Servicepage />} />
      </Routes>
    </>
  );
};
export default App;