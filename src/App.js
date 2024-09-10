import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './index.css'
import Story from './pages/StoryPage/Story';

import BeerFinder from './pages/BeerFinder/BeerFinder';

import Beerfinder from './Components/BeerFinder';
import Servicepage from './pages/ServicePage/Service';
import Restaurant from './pages/ServicePage/Restaurent';

 
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Story" element={<Story />} />
            <Route path="/BeerFinder" element={<BeerFinder/>} />
            <Route path="/story" element={<Story />} />
            <Route path="/service" element={<Servicepage />} />
            <Route path="/beer-finder" element={<Beerfinder />} />
            <Route path="/restaurent" element={<Restaurant />} />
            <Route path="/Contact" element={<Restaurant/>} />

         </Routes>
      </>
   );
};
 
export default App;