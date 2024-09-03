import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './index.css'
import Story from './pages/StoryPage/Story';
 
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
         </Routes>
      </>
   );
};
 
export default App;