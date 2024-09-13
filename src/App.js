import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './index.css'
import Story from './pages/StoryPage/Story';

import BeerFinder from './pages/BeerFinder/BeerFinder';
import Taproom from './pages/TapRoom/TapRoom';



import Event from './pages/ServicePage/Event';
import TestingBeer from './pages/ServicePage/Testing';

import OurBeer from './pages/OurBeer/OurBeer';
import Detail from './pages/OurBeer/Detail';

const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/story" element={<Story />} />
            <Route path="/ourBeer" element={<OurBeer />} />
            <Route path="/details" element={<OurBeer />} />
            <Route path="/details/:id" element={<Detail />} />
            <Route path="/beerFinder" element={<BeerFinder/>} />
            <Route path="/story" element={<Story />} />
            <Route path="/event" element={<Event />} />
            <Route path="/testing" element={<TestingBeer />} />
            


         </Routes>
      </>
   );
};
 
export default App;