import React from "react";
import ProductCard from "../../Components/ProductCard";
import Navbar from "../../Components/Navbar";
import BackgroundSection from "../../Components/Background-img";
import Footer from "../../Components/Footer";
import logo1 from "../../image/logo1.png";
import logo2 from "../../image/logo2.png";
import logo3 from "../../image/logo3.png";
import logo4 from "../../image/logo4.png";
import beer1 from "../../image/beer1.png";
import beer2 from "../../image/beer2.png";
import beer3 from "../../image/beer3.png";
import beer4 from "../../image/beer4.png";
import B from "../../image/Botanico_BBox_logo-01.png";

function OurBeer() {
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
        <div className="flex justify-center items-center w-full text-center h-[200px]">
          <img className="w-[5%] absolute right-0 mb-14 mr-5" src={B} alt="" />

          <h1 className="text-[#124734] font-bold font-montserrat text-4xl">
            Core Beers
          </h1>
        </div>
        <div className="container mx-auto px-4 mt-[-1.8%] ">
          <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
            <div className="flex justify-center p-4">
              <ProductCard
                title1="CENTURION"
                title2="AMERICAN PALE ALE"
                image1={logo1}
                image2={beer1}
                titlestyle="font-bold text-3xl text-[#E15050]"
              />
            </div>
            <div className="flex justify-center p-4">
              {" "}
              {/* Added p-4 padding */}
              <ProductCard
                title1="SPLASH"
                title2="JUICY IPA"
                image1={logo2}
                image2={beer2}
                titlestyle="font-bold text-3xl text-[#1FABAB]"
              />
            </div>
            <div className="flex justify-center p-4">
              <ProductCard
                title1="KHMER HONEY"
                title2="BLONDE ALE"
                image1={logo3}
                image2={beer3}
                titlestyle="font-bold text-3xl text-[#ED9454]"
              />
            </div>
            <div className="flex justify-center p-4">
              <ProductCard
                title1="CHAMTIK"
                title2="HELLES LAGER"
                image1={logo4}
                image2={beer4}
                titlestyle="font-bold text-3xl text-[#3B6DC8]"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-[759px] h-0.5 mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700"></hr>
          </div>
          <div className="text-center">
            <h1 className="text-[#124734] mt-3 font-bold font-montserrat text-4xl">
              Other Beer We Brewed
            </h1>
          </div>
          <div className="font-montserrat font-regular mx-auto container flex max-sm:flex-col mt-[50px]">
            <div className="flex-1 flex justify-center items-center">
              <div className="text-left space-y-2 text-[24px]">
                <p>Cambodian Amber Ale / w palm sugar</p>
                <p>Reahoo Wheat Beer</p>
                <p>Princeps Imperial IPA</p>
                <p>French Kiss Biere de Garde</p>
                <p>Coffee Milk Stout</p>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="text-left space-y-2 text-[24px] max-sm:mr-[120px]">
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
