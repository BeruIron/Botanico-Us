import React from "react";
import Navbar from "../../Components/Navbar";
import Sa from "../../Components/SlideAutomatic";

import Footer from "../../Components/Footer";
import img1 from "../../image/servise.png";
import img2 from "../../image/beer (53).jpg";
import img3 from "../../image/beer (37).jpg";
import img4 from "../../image/beer (47).jpg";
import img5 from "../../image/restaurant.png";
import img6 from "../../image/beer (60).jpg";
import { Link } from 'react-router-dom';



function Service() {
  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>

      <Sa />
 
      <div>
        <div className="flex items-center h-[400px] max-sm:h-[250px] bg-gray-100  justify-center gap-4 p-8">
          <img
            src={img1}
            alt="Service 1"
            className="h-[330px] w-[250px] max-sm:w-[100px] max-sm:h-[150px] object-cover"
          />
          <img
            src={img2}
            alt="Service 2"
            className="h-[330px] w-[250px] max-sm:w-[100px] max-sm:h-[150px] object-cover "
          />
          <img
            src={img3}
            alt="Service 3"
            className="h-[330px] w-[250px]  max-sm:w-[100px] max-sm:h-[150px] object-cover "
          />
        </div>

        <div className="text-center mt-[40px]">
          <h2 className="text-[30px] font-abc font-bold max-sm:text-[20px]">
            BOTANICO SERVICES
          </h2>
          <div className="flex justify-center flex-wrap gap-10 mt-[40px] max-sm:gap-5">
          <div className="h-[400px] bg-gray-100 max-sm:h-[250px]">
  <Link to="/restaurant" className="flex flex-col items-center h-full">
    <img
      src={img5}
      alt="Restaurant/Bar"
      className="h-[300px] w-[300px] object-cover max-sm:h-[200px] max-sm:w-[250px]"
    />
    <p className="mt-9 max-sm:mt-[17px] font-abc font-bold text-[20px] max-sm:text-[15px] text-center">
      Restaurant/Bar
    </p>
  </Link>
</div>


<div className="h-[400px] bg-gray-100 max-sm:h-[250px]">
  <Link to="/event" className="flex flex-col items-center h-full">
    <img
      src={img6}
      alt="Event"
      className="h-[300px] w-[300px] object-cover max-sm:h-[200px] max-sm:w-[250px]"
    />
    <p className="mt-9 font-abc max-sm:mt-[17px] font-bold text-[20px] max-sm:text-[15px] text-center">
      Event
    </p>
  </Link>
</div>

<div className="h-[400px] bg-gray-100 max-sm:h-[250px]">
  <Link to="/tasting" className="flex flex-col items-center h-full">
    <img
      src={img4}
      alt="Tours/Tastings"
      className="h-[300px] w-[300px] object-cover max-sm:h-[200px] max-sm:w-[250px]"
    />
    <p className="mt-9 font-abc max-sm:mt-[17px] font-bold text-[20px] max-sm:text-[15px] text-center">
      Tours/Tastings
    </p>
  </Link>
</div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>

    </div>
  );
}

export default Service;