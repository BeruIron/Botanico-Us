import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './index.css'
import Story from './pages/StoryPage/Story';
import BeerFinder from './pages/BeerFinder/BeerFinder';
import Beerfinder from './Components/BeerFinder';
import OurBeer from './pages/OurBeer/OurBeer';
import Detail from './pages/OurBeer/Detail';

const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/ourBeer" element={<OurBeer />} />
            <Route path="/ourBeer/detail" element={<Detail />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/beerFinder" element={<BeerFinder/>} />
            <Route path="/story" element={<Story />} />
            <Route path="/beer-finder" element={<Beerfinder />} />

         </Routes>
      </>
   );
};
 
export default App;