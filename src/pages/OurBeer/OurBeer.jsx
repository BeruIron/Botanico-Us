import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import BackgroundSection from "../../Components/Background-img";
import Footer from "../../Components/Footer";
import B from "../../image/Botanico_BBox_logo-01.png";

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
        className="relative h-screen max-sm:w-full max-sm:h-[500px]"
      >
        <Navbar />
        <div className="bg-black bg-opacity-40 p-4 text-center mt-[35%] w-[400px] mx-auto max-sm:w-[250px] max-sm:mt-[250px]">
          <h1 className="text-white text-7xl font-bold  font-montserrat  max-sm:text-3xl">
            Our Beers
          </h1>
        </div>
      </BackgroundSection>

      <div className="min-w-full min-h-full">
        <div className="flex justify-center items-center w-full text-center mt-[95px] max-sm:h-[5px]">
          <img
            className="w-[4%] absolute right-0 mb-[90px] mr-7 max-sm:mb-[200px] max-sm:mt-[30%]"
            src={B}
            alt="Botanico Logo"
          />
          <h1 className="text-[#124734] font-bold font-montserrat text-4xl max-sm:text-[20px] mb-[107px] max-sm:mt-3">
            Core Beers
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-8  container mx-auto px-4 mt-[-0.5%] max-sm:grid-cols-1 max-sm:gap-1 max-sm:h-[1800px]">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex justify-center "
              onClick={() => handleCardClick(product.id)}
            >
              <div className=" shadow-xl hover:shadow-lg transition w-[630px] h-[750px]  max-sm:h-[80%] mb-[90px] max-sm:w-full">
                <div className="flex justify-between items-center gap-1 h-[70%]">
                  <div className="w-full h-full bg-slate-400">
                    <img
                      src={product.image1}
                      alt={`${product.title1} Image 1`}
                      className="w-fu h-full object-cover"
                    />
                  </div>

                  <div className="w-full h-full bg-slate-300">
                    <img
                      src={product.image2}
                      alt={`${product.title1} Image 2`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-4 text-center flex justify-center items-center flex-col  h-[225px] max-sm:h-[50px] max-sm:mt-[28px]">
                  <h2 className="font-bold text-3xl max-sm:text-[20px]">
                    {product.title1}
                  </h2>
                  <h2
                    className=" font-bold text-3xl max-sm:text-[20px]"
                    style={{ color: product.color }}
                  >
                    {product.title2}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <hr className="w-[759px] h-0.5 mx-auto mt-[10px] border-black border-2 my-1 max-sm:w-[250px]" />
          <div className="text-center">
            <h1 className="text-[#124734] mt-[80px] max-sm:mt-[40px] font-bold font-montserrat text-4xl max-sm:text-[20px] ">
              Other Beers We Brewed
            </h1>
          </div>
          <div className=" font-montserrat font-regular mx-auto container flex  mt-[40px] text-[10px] max-sm:ml-[15px] max-sm:mt-[30px]">
            <div className=" flex-1 flex justify-center items-center">
              <div className="text-left space-y-2 text-[24px]  max-sm:text-[10px] max-sm:mb-[36px]">
                <p>Cambodian Amber Ale / w palm sugar</p>
                <p>Reahoo Wheat Beer</p>
                <p>Princeps Imperial IPA</p>
                <p>French Kiss Biere de Garde</p>
                <p>Coffee Milk Stout</p>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="text-left space-y-2 text-[24px]  max-sm:text-[10px] max-sm:mb-[53px]">
                <p>Bassac Hoppy Lager</p>
                <p>Tropical Mango Ale</p>
                <p>Sundown Dark Lager</p>
                <p>Dark Star Porter</p>
                <p>Jasmine Gold Blonde Ale</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default OurBeer;
