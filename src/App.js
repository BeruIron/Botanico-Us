
import BeerFinder from "./pages/BeerFinder/BeerFinder";
import Taproom from "./pages/TapRoom/TapRoom";
import Restaurant from "./pages/ServicePage/Restaurant";
import Event from "./pages/ServicePage/Event";
import TestingBeer from "./pages/ServicePage/Testing";
import Blog from './pages/Blog/Blog';
import OurBeer from "./pages/OurBeer/OurBeer";
import Detail from "./pages/OurBeer/Detail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/story" element={<Story />} />
        <Route path="/ourBeer" element={<OurBeer />} />
        <Route path="/ourBeer/detail" element={<Detail />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/beerFinder" element={<BeerFinder />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/story" element={<Story />} />
        <Route path="/event" element={<Event />} />
        <Route path="/testing" element={<TestingBeer />} />
        <Route path="/taproom" element={<Taproom />} />
          <Route path="/blog" element={<Blog/>} />
      </Routes>
    </>
  );

};

export default App;
