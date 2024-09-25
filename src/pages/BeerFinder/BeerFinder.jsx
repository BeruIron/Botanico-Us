import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import img1 from "../../image/Botanico4.jpg"; // Adjust this path if necessary
import img2 from "../../image/Botanico5.jpg";   // Adjust this path if necessary
import img3 from "../../image/Botanico7.jpg";     // Adjust this path if necessary
import img4 from "../../image/Botanico8.jpg";      // Adjust this path if necessary
import img5 from "../../image/Botanico9.jpg";     // Adjust this path if necessary

const BeerFinder = () => {
  const [location, setLocation] = useState("Botanico, Cambodia");
  const [locationName, setLocationName] = useState("Botanico Craft Beer Garden");

  const locations = [
    { name: "Botanico Craft Beer Garden", place: "Botanico, Cambodia" },
    { name: "Craft", place: "Craft Phnom Penh, Cambodia" },
    { name: "AeroCoffebar", place: "AeroCoffebar Phnom Penh, Cambodia" },
    { name: "Farm to Table", place: "Farm to Table Phnom Penh, Cambodia" },
    { name: "Hyatt Regency", place: "Hyatt Regency Phnom Penh, Cambodia" },
    { name: "Sofitel", place: "Sofitel Phnom Penh, Cambodia" },
    { name: "Tribe Hotel", place: "Tribe Hotel Phnom Penh, Cambodia" },
    { name: "Le Manolis", place: "Le Manolis Phnom Penh, Cambodia" },
    { name: "Luxcity Hotel", place: "Luxcity Hotel Phnom Penh, Cambodia" },
    { name: "PPYC", place: "PPYC Phnom Penh, Cambodia" },
    { name: "Captain's Sport Bar", place: "Captain's Sport Bar Phnom Penh, Cambodia" },
    { name: "Metro Rahu", place: "Metro Rahu Phnom Penh, Cambodia" },
    { name: "Metro Azura", place: "Metro Azura Phnom Penh, Cambodia" },
    { name: "23 Bistro Kampot", place: "23 Bistro Kampot, Cambodia" },
    { name: "The Fringe Battambong", place: "The Fringe Battambong, Cambodia" },
    { name: "The Box Office", place: "The Box Office Phnom Penh, Cambodia" },
    { name: "Embargo Phnom Penh", place: "Embargo Phnom Penh, Cambodia" },
    { name: "Embargo Siem Reap", place: "Embargo Siem Reap, Cambodia" },
    { name: "Paparazzi", place: "Paparazzi Phnom Penh, Cambodia" },
    { name: "Toss it!", place: "Toss it! Phnom Penh, Cambodia" },
    { name: "LB Taphouse BKK1", place: "LB Taphouse BKK1 Phnom Penh, Cambodia" },
    { name: "Malevich", place: "Malevich Phnom Penh, Cambodia" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
    { url: img5 },
  ];

  useEffect(() => {
    const autoplay = setInterval(nextSlide, 3000);
    return () => clearInterval(autoplay);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleLocationChange = (location) => {
    setLocation(location.place);
    setLocationName(location.name);
  };

  return (
    <>
      <div className="bg-black">
        <Navbar />
      </div>

      <div className="relative w-full h-[600px] md:h-[800px] lg:h-[900px] xl:h-[1000px]">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-cover bg-center transition-all duration-500"
        ></div>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <div className="text-center px-4 md:px-8 lg:px-16">
            <h1 className="text-white text-[50px] max-sm:text-[20px] font-abc font-bold mb-4">
              Botanico Brewing Company
            </h1>
            <Link to="/ourBeer">
            <button className="w-[150px] h-[50px] text-[15px] max-sm:w-[80px] max-sm:h-[35px] max-sm:text-[7px] font-abc font-bold text-white bg-slate-400 my-1 hover:bg-gray-600">
                {("View Products")} 
            </button>
            </Link>
            
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 pb-16">
        <div className="relative w-full px-4 md:px-10 py-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="text-center md:w-2/3 md:text-left">
              <h1 className="text-center md:text-[30px] font-abc font-bold">
                Check Out the Map to Find Our Beer
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 pt-14">
          <div className="md:w-1/3 h-[900px] overflow-y-auto">
            <ul className="space-y-4">
              {locations.map((loc, index) => (
                <li key={index} className="border-b border-gray-300 pb-2">
                  <span className="block font-bold font-abc text-[20px]">
                    {loc.name}
                  </span>
                  <button
                    className="text-blue-600 font-abc hover:underline"
                    onClick={() => handleLocationChange(loc)}
                  >
                    Direct to Map
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-2/3 relative rounded-lg shadow-md overflow-hidden">
            <iframe
              src={`https://maps.google.com/maps?q=${location}&output=embed`}
              width="100%"
              height="700px"
              frameBorder="0"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
            ></iframe>

            <div className="absolute bottom-4 right-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white text-[20px] font-bold py-2 px-4 rounded"
                onClick={() => {
                  window.open(`https://maps.google.com/maps?q=${location}`, "_blank");
                }}
              >
                Direct to {locationName} on Map
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BeerFinder;
