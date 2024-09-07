import React from "react";
import Navbar from "../../Components/Navbar";
import { useState, useEffect } from "react";
import SlideTap from "../../Components/SlideTap";


function Taproom() {
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
            <Navbar />
      </div>
        <div className="w-screen h-screen m-auto relative">
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className="w-full h-full bg-cover bg-center duration-500"
            ></div>

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                <div className="text-center pt-56">
                    <h1 className="text-white text-[64px] font-bold mb-4">Botanico Brewing Company</h1>
                </div>
            </div>
        </div>

        <div className="relative w-full">
             <div className="flex justify-between items-start px-10 py-5">
        {/* Main Title and Description */}
             <div className="pt-12 text-center w-full">
                 <h1 className="text-[40px] font-bold">BOTANICO CRAFT BEER GARDEN & RESTAURANT</h1>
                 <p className="text-[20px] font-light text-center px-80 leading-9 pt-5">Botanico Craft Beer Garden & Restaurant is our home! It is located right next to our brewery,
                     on the same property. The garden is a beautiful, hidden gem with lots of plants and tranquility. 
                     It is the perfect getaway from the hustle & bustle of the city! We always have between 6 and 10 beers 
                      on tap that we brewed ourselves.</p>
             </div>

        {/* Logo */}
             <div className="absolute top-0 right-0 mr-10 mt-5">
                 <img className="w-[150px] " src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/918px-NASA_logo.svg.pngBotanico_BBox_logo-01.png" alt="logo" />
             </div>

            </div>
            
    </div>
             <SlideTap></SlideTap>
    <div className="w-full flex flex-col items-center py-10">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-10">OUR BOTANICO BREWERY CO TAPROOM</h2>
      
      {/* Main content container */}
      <div className="flex justify-center items-start max-w-7xl border-dashed border-2 border-black">
        
        {/* Left: Image */}
        <div className="w-1/2">
          <img 
            className="w-full h-[600px]" 
            src="https://lh3.googleusercontent.com/RUg9YJuY2cPjh5znR5ZLqLJIBrm1CM2JuwCS1XP6g31ZDPa_NR--jR0JAum5qDbl2g5UKgBwM4SHSuyiWqjyd7VhBUI=s1280-w1280-h800" // Replace with your image path
            alt="Taproom" 
          />
        </div>
        
        {/* Right: Opening Hours & Happy Hour */}
        <div className="w-1/2 p-10">
          {/* Opening Hours Section */}
          <div>
            <h3 className="text-[38px] font-bold mb-4">OPENING HOURS</h3>
            <p className="text-[20px] text-bold ">Sunday – Wednesday | 11.30am – 12am</p>
            <p className="pb-4 text-[20px] text-bold">Thursday – Saturday | 11.30am – 1am</p>
            <hr className=" border-t-4 border-yellow-600 w-1/4 mb-4" />
            <p className="font-bold mb-6">MONDAY - SUNDAY*, UNTIL 7PM</p>
          </div>
          
          {/* Happy Hour Section */}
          <div>
            <h3 className="text-[38px] font-bold mb-4">HAPPY HOUR</h3>
            <p className="pb-10 text-[25px] text-bold">20% off selected Lion Brewery Co pints and selected wines by the glass.</p>
            <p className="text-[20px] text-gray-500">
              *excluding public holidays.<br />
              Offer may not be used in conjunction with any other promotions.
            </p>
          </div>
        </div>
      </div>
    </div>


    <div className="w-full max-w-screen-xl	 mx-auto py-10 px-5">
      {/* Section title and description */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        
        {/* Left: Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Near & Dear and Far & Wide</h2>
          <h3 className="text-xl font-semibold mb-4">
            Global Fusion: Khmer Flavors Meet International Dishes in Garden Atmosphere
          </h3>
          <p className="mb-6">
            The food is a mix of Khmer and international dishes, created by our executive Chef, Rith. He is a Khmer-German who learned to become a master chef in Germany and is now focusing on bringing high quality and locally sourced ingredients, perfectly combined to your plates!
          </p>
          <button className="bg-black text-white px-6 py-2">View Our Menu</button>
        </div>
        
        {/* Right: Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10">
          <img
            src="https://lh3.googleusercontent.com/RUg9YJuY2cPjh5znR5ZLqLJIBrm1CM2JuwCS1XP6g31ZDPa_NR--jR0JAum5qDbl2g5UKgBwM4SHSuyiWqjyd7VhBUI=s1280-w1280-h800" // Replace with your image path
            alt="Dish Image"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Reservation Section */}
      <div className="text-center py-10">
        <p className="mb-6 text-lg">
          If you wish to make a reservation, or want to hold an event at Botanico, please click here to contact us.
        </p>
        <div className="flex justify-center">
          <button className="bg-black text-white px-6 py-2 flex items-center">
            Contact Us
          </button>
        </div>
      </div>
    </div>

       


        </>);
}

export default Taproom;
