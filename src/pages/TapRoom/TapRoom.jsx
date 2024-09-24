import React from "react";
import Navbar from "../../Components/Navbar";
import { useState, useEffect } from "react";
import SlideTap from "../../Components/SlideTap";
import Footer from "../../Components/Footer";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";

function Taproom() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      url: "https://staticg.sportskeeda.com/editor/2022/08/812fc-16598097467269.png",
    },
    {
      url: "https://wallpapercrafter.com/desktop1/567704-anime-cool-back-red-bleach-final-getsuga-widescreen.jpg",
    },
    {
      url: "https://img.goodfon.com/original/1680x1050/2/cd/naruto-akatsuki-konan-payne.jpg",
    },
    {
      url: "https://i.pinimg.com/originals/19/2b/dc/192bdc10828a0d90a456d1f562b58950.jpg",
    },
    {
      url: "https://images4.alphacoders.com/135/1357584.png",
    },
    {
      url: "https://staticg.sportskeeda.com/editor/2024/02/e19d7-17067790349227-1920.jpg",
    },
  ];

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(autoplay);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="bg-black">
        <Navbar></Navbar>
      </div>

      <div className="relative w-full h-[600px] md:h-[800px] lg:h-[900px] xl:h-[1000px]">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-cover bg-center transition-all duration-500"
        ></div>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <div className="text-center px-4 md:px-8 lg:px-16">
            <h1 className="text-white text-[30px] max-sm:text-[20px] font-abc font-bold mb-4">
              Botanico Brewing Company
            </h1>
          </div>
        </div>
      </div>

      <div className=" w-[80%] max-sm:w-[90%] mx-auto  py-20 max-sm:py-10">
        <div className=" flex flex-col justify-between items-center">
          <h1 className="text-center max-sm:w-[300px]  text-[30px] max-sm:text-[20px]  font-abc font-bold">
            BOTANICO CRAFT BEER GARDEN & RESTAURANT
          </h1>
          <p className="text-center text-[20px] max-sm:text-[10px] font-abc leading-8 max-sm:leading-4 pt-5">
            Botanico Craft Beer Garden & Restaurant is our home! It is located
            right next to our brewery, on the same property. The garden is a
            beautiful, hidden gem with lots of plants and tranquility. It is the
            perfect getaway from the hustle & bustle of the city! We always have
            between 6 and 10 beers on tap that we brewed ourselves.
          </p>
        </div>
      </div>

      <SlideTap />

      <div className="w-[80%] max-sm:w-[90%] mx-auto flex flex-col items-center py-20">
        <div className="flex flex-col w-full h-[600px] md:flex-row max-sm:space-x-2 space-x-10 justify-center max-w-[1700px] border-dashed border-2 border-black">
          <div className=" w-full">
            <img
              className="w-[100%] h-[300px] md:h-[600px] object-cover"
              src="https://lh3.googleusercontent.com/RUg9YJuY2cPjh5znR5ZLqLJIBrm1CM2JuwCS1XP6g31ZDPa_NR--jR0JAum5qDbl2g5UKgBwM4SHSuyiWqjyd7VhBUI=s1280-w1280-h800"
              alt="Taproom"
            />
          </div>
          
          <div className="space-y-6 max-sm:space-y-2 w-full ">
            <h3 className="text-[30px] md:text-3xl max-sm:text-[20px] font-bold ">
              OPENING HOURS
            </h3>
            <p className=" text-[20px]  max-sm:text-[10px]">
              Sunday – Wednesday | 11.30am – 12am
            </p>
            <p className=" text-[20px]  max-sm:text-[10px]">
              Thursday – Saturday | 11.30am – 1am
            </p>
            <hr className="border-t-4 max-sm:border-t-2 border-yellow-600 w-1/4 " />
            <p className="text-[25px]  max-sm:text-[20px] font-bold">
              MONDAY - SUNDAY*, UNTIL 7PM
            </p>

            <h3 className="text-[30px] max-sm:text-[20px] font-bold">
              HAPPY HOUR
            </h3>
            <p className="text-[20px]  max-sm:text-[10px]  ">
              20% off selected Lion Brewery Co pints and selected wines by the
              glass.
            </p>
            <p className="text-gray-500 text-[20px]  max-sm:text-[10px]">
              *excluding public holidays. <br />
              Offer may not be used in conjunction with any other promotions.
            </p>
          </div>
        </div>
      </div>

        <div className="flex flex-row w-[80%] max-sm:flex-col max-sm:w-[90%] mx-auto space-x-10 max-sm:space-x-0">
          <div className=" space-y-5 font-abc w-[100%]">
            <h2 className="text-[30px]  max-sm:[20px] font-extrabold  ">
              Near & Dear and Far & Wide
            </h2>
            <h3 className="text-[20px] md:text-2xl font-bold  max-sm:text-[10px]">
              Global Fusion: Khmer Flavors Meet International Dishes in Garden
              Atmosphere
            </h3>
            <p className="  text-[20px]  max-sm:text-[10px] leading-10 max-sm:leading-4">
              The food is a mix of Khmer and international dishes, created by
              our executive Chef, Rith. He is a Khmer-German who learned to
              become a master chef in Germany and is now focusing on bringing
              high-quality and locally sourced ingredients, perfectly combined
              to your plates!
            </p>

            <Button
              onClick={() => navigate("/menu")}
              color="Button-black"
              name="Menu"
            />
          </div>

          <div className="w-full max-sm: mt-[20px]">
            <img
              src="https://img.goodfon.com/original/1680x1050/2/cd/naruto-akatsuki-konan-payne.jpg"
              alt="Food image"
              className="w-[100%] h-[300px] md:h-[600px] object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-sm:w-[80%] flex h-[150px] max-sm:h-[80px] items-center">
          <p className="text-center font-abc text-[20px] max-sm:text-[10px]">
            If you wish to make a reservation, or want to hold an event at
            Botanico, please click <span className="text-red-600">here </span>to contact us.
          </p>
        </div>
        <div className="justify-center flex h-[100px] max-sm:h-[50px]">
          <button className="w-[120px] h-[40px] text-white bg-black my-1  hover:bg-gray-600 max-sm:w-[60px] max-sm:h-[20px] max-sm:text-[7px]">
            Contact Us
          </button>
        </div>
    
      <Footer></Footer>
    </>
  );
}

export default Taproom;

