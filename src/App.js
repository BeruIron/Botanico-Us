
import BeerFinder from './pages/BeerFinder/BeerFinder';
import Taproom from './pages/TapRoom/TapRoom';
import Event from './pages/ServicePage/Event';
import TestingBeer from './pages/ServicePage/Testing';
import {Routes, Route } from 'react-router-dom';
import OurBeer from './pages/OurBeer/OurBeer';
import Detail from './pages/OurBeer/Detail';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Restaurant from './pages/ServicePage/Restaurant';
import Story from './pages/StoryPage/Story';



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/story" element={<Story />} />
            <Route path="/ourBeer" element={<OurBeer />} />
            <Route path="/ourBeer/detail" element={<Detail />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/beerFinder" element={<BeerFinder/>} />
            <Route path="/story" element={<Story />} />
            <Route path="/event" element={<Event />} />
            <Route path="/testing" element={<TestingBeer />} />
            <Route path="/taproom" element={<Taproom />} />
            <Route path="/contact" element={<Contact />} />
           
            

            


         </Routes>
      </>
   );

};

export default App;
