import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './index.css'
import Story from './pages/StoryPage/Story';
import Taproom from './pages/TapRoom/TapRoom';
import BeerFinder from './pages/BeerFinder/BeerFinder';

import Beerfinder from './Components/BeerFinder';

 
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Story" element={<Story />} />
            <Route path="/BeerFinder" element={<BeerFinder/>} />
            <Route path="/story" element={<Story />} />
            <Route path="/beer-finder" element={<Beerfinder />} />
            <Route path="/Taproom" element={<Taproom />} />

         </Routes>
      </>
   );
};
 
export default App;