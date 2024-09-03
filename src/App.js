import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './index.css'
import Story from './pages/StoryPage/Story';
import Beerfinder from './Components/BeerFinder';
 
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/beer-finder" element={<Beerfinder />} />
         </Routes>
      </>
   );
};
 
export default App;