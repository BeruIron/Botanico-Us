import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import BackgroundSection from "../../Components/Background-img";
import Footer from "../../Components/Footer";
import B from "../../image/Botanico_BBox_logo-01.png";
import Button from "../../Components/Button";

function OurBeer() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleCardClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <BackgroundSection
        backgroundImage="https://lh3.googleusercontent.com/pw/AP1GczObCs2Ocqkf7SGQuEsyjdQXY_Jv2L_WIqt9wEDoIovnwUJnRpn51cwIN_LvNo4NCqEwpT5_47vLfyOHxFmfZqY7m3qQSp94s9zlmMjPTFUdcYDJkctWHceiNOeLpOoYNdRlhElcltm-laJTwzjDQ8Sy=w1449-h966-s-no-gm?authuser=0"
        className="relative h-screen max-sm:w-[100%]"
      >
        <Navbar />
        <div className="bg-black bg-opacity-40 p-4 text-center mt-[35%] w-[400px] mx-auto">
          <h1 className="text-white text-7xl font-dangrek font-bold">
            Our Beers
          </h1>
        </div>
      </BackgroundSection>

      <div className="min-w-full min-h-full">
        <div className="flex justify-center items-center w-full text-center h-[200px] mt-[95px]">
          <img
            className="w-[4%] absolute right-0 mb-[90px] mr-7 max-sm:mb-[100px] "
            src={B}
            alt="Botanico Logo"
          />
          <h1 className="text-[#124734] font-bold font-montserrat text-4xl max-sm:text-[20px] mb-[95px]">
            Core Beers
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-8 container mx-auto px-4 mt-[-1.8%] max-sm:grid-cols-1 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex justify-center p-4 "
              onClick={() => handleCardClick(product.id)}
            >
              {/* Card container with fixed size */}
              <div className="p-4 shadow-md hover:shadow-lg transition w-[500px] h-[600px]  max-sm:h-[90%] mb-[90px]">
                {/* Image container */}
                <div className="flex justify-between items-center gap-1 h-[70%]">
                  {/* Image 1 - Left */}
                  <div className="w-full h-full bg-slate-400">
                    <img
                      src={product.image1}
                      alt={`${product.title1} Image 1`}
                      className="w-fu h-full object-cover"
                    />
                  </div>

                  {/* Image 2 - Right */}
                  <div className="w-full h-full bg-slate-300">
                    <img
                      src={product.image2}
                      alt={`${product.title1} Image 2`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Titles */}
                <div className="p-4 text-centerp-4 text-center  flex justify-center items-center flex-col  h-[155px] max-sm:h-[100px]">
                  <h2 className="font-bold text-2xl">{product.title1}</h2>
                  <h2 className=" font-bold text-2xl max-sm:text-[20px]" style={{ color: product.color }}>
                    {product.title2}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <hr className="w-[759px] h-0.5  mx-auto bg-black border-0 my-1 max-sm:w-[250px]" />
          <div className="text-center">
            <h1 className="text-[#124734] mt-[80px] font-bold font-montserrat text-4xl max-sm:text-[20px]">
              Other Beers We Brewed
            </h1>
          </div>
          <div className=" font-montserrat font-regular mx-auto container flex  mt-[40px] text-[10px] max-sm:ml-[15px]">
            <div className=" flex-1 flex justify-center items-center">
              <div className="text-left space-y-2 text-[24px]  max-sm:text-[10px] ">
                <p>Cambodian Amber Ale / w palm sugar</p>
                <p>Reahoo Wheat Beer</p>
                <p>Princeps Imperial IPA</p>
                <p>French Kiss Biere de Garde</p>
                <p>Coffee Milk Stout</p>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="text-left space-y-2 text-[24px]  max-sm:text-[10px]">
                <p>Bassac Hoppy Lager</p>
                <p>Tropical Mango Ale</p>
                <p>Sundown Dark Lager</p>
                <p>Dark Star Porter</p>
                <p>Jasmine Gold Blonde Ale</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default OurBeer;
