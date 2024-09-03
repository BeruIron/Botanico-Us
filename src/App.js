import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './index.css'
import Story from './pages/StoryPage/Story';
import BeerFinder from './pages/BeerFinder/BeerFinder';
 
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Story" element={<Story />} />
            <Route path="/BeerFinder" element={<BeerFinder/>} />
         </Routes>
      </>
   );
};
 
export default App;