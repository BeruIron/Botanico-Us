import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Our_Story from "./Components/Our_Story";
import Contact from "./Components/Contact";
import NoPage from "./Components/NoPage";
import BeerFinder from "./Components/BeerFinder";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
         
          <Route index element={<Home />} />
          <Route path="our story"element={<Our_Story/>} />
          
          <Route path="contact" element={<Contact />} />
          
          <Route path="*" element={<NoPage />} />
          <Route path="beer finder" element={<BeerFinder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

