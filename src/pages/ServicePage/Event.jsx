import React from "react";
import Navbar from "../../Components/Navbar";
import QuestionComponent from "../../Components/Question";
import img from "../../image/beer (51).jpg";
import img1 from "../../image/beer (43).jpg";
import img2 from "../../image/beer (31).jpg";
import img3 from "../../image/beer (35).jpg";
import img4 from "../../image/beer (34).jpg";
import Button from "../../Components/Button";
import Footer from "../../Components/Footer";

function Event() {
  return (
    <div className="bg-slate-100">
      <div className="bg-black">
        <Navbar />
      </div>

      <div className="h-[550px]">
        <QuestionComponent textquestion="Brewery tours/ tastings at Botanico" />
        <div className="flex justify-center">
          <img
            className="w-[250px] h-[330px] object-cover bg-orange-400"
            src={img2}
            alt="Beer 1"
          />
          <img
            className="w-[250px] h-[330px] object-cover bg-amber-900 mx-[10px]"
            src={img3}
            alt="Beer 2"
          />
          <img
            className="w-[250px] h-[330px] object-cover bg-teal-900"
            src={img4}
            alt="Beer 3"
          />
        </div>
      </div>
      <div className="flex justify-between items-center h-[600px] gap-6 bg-white">
        <div>
        <div className="relative">
          <img
            className="w-[350px] h-[300px]  object-cover ml-[50px] "
            src={img}
            alt="Main Beer"
          />
          <img
            className="absolute h-[300px] flex  object-cover ml-[50%] w-[350px]"
            src={img1}
            alt="Beer Event"
          />
        </div>
        </div>
        
        <div className="bg-red-600 py-[10%] px-[5px]"></div>
        <div className="w-[500px]  text-gray-700 text-[20px] ">
          <p className="mb-4 leading-7">
            We have different mobile draft units that we regularly use to cater
            private, as well as company events. You can rent our system with or
            without a bartender and we take care of the installation and removal
            as well as the delivery of the beer.
          </p>
          <p className="leading-7">
            We also offer more unique, custom-made event add-ons, such as craft
            beer tastings and food and beer pairings at your venue, moderated by
            our German brew master Marco.
          </p>
        </div>
      </div>

      <div className="h-[150px] bg-slate-100 flex items-center justify-center">
        <Button color="Button-black" name="Contact Us" />
      </div>

      <Footer />
    </div>
  );
}

export default Event;
