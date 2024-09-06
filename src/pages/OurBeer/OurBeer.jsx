import React from "react";
import ProductCard from "../../Components/ProductCard";
import Navbar from "../../Components/Navbar";
import BackgroundSection from "../../Components/Background-img";
import Footer from "../../Components/Footer";


function OurBeer() {

  return (
    <>
    
      <BackgroundSection
        backgroundImage="https://lh3.googleusercontent.com/pw/AP1GczObCs2Ocqkf7SGQuEsyjdQXY_Jv2L_WIqt9wEDoIovnwUJnRpn51cwIN_LvNo4NCqEwpT5_47vLfyOHxFmfZqY7m3qQSp94s9zlmMjPTFUdcYDJkctWHceiNOeLpOoYNdRlhElcltm-laJTwzjDQ8Sy=w1449-h966-s-no-gm?authuser=0"
        className="relative h-screen"
      >
     
         <Navbar/>
        <div className="bg-black bg-opacity-40 p-4 text-center mt-[600px] w-[400px] mx-auto">
          <h1 className="text-white text-7xl font-[Dangrek] font-regular">
            Our Beers
          </h1>
        </div>
        
      </BackgroundSection>
    
      <div className="min-w-full min-h-full">
        <div className="w-full text-center">
          <h1 className="text-[#124734] mt-[100px] font-bold font-[Montserrat] text-4xl">
            Core Beers
          </h1>
        </div>
        <div className="container mx-auto px-4 mt-[85px]">
          <div className="grid grid-cols-2 gap-8">
         
            <div className="flex justify-center p-4">
              <ProductCard
                title1="CENTURION"
                title2="AMERICAN PALE ALE"
                image1="https://web.telegram.org/26c25562-1cd2-4e85-ba77-275e6a7b793d"
                image2="blob:https://web.telegram.org/94873140-da34-42bd-a02f-c7c05cad5a22"
                titlestyle="font-bold text-3xl text-[#E15050]"
              />
            </div>
            <div className="flex justify-center p-4">
              {" "}
              {/* Added p-4 padding */}
              <ProductCard
                title1="SPLASH"
                title2="JUICY IPA"
                image1="blob:https://web.telegram.org/25be6671-f967-45c7-bf18-978be7bf91d1"
                image2="blob:https://web.telegram.org/94873140-da34-42bd-a02f-c7c05cad5a22"
                titlestyle="font-bold text-3xl text-[#1FABAB]"
              />
            </div>
            <div className="flex justify-center p-4">
              <ProductCard
                title1="KHMER HONEY"
                title2="BLONDE ALE"
                image1="blob:https://web.telegram.org/25be6671-f967-45c7-bf18-978be7bf91d1"
                image2="blob:https://web.telegram.org/94873140-da34-42bd-a02f-c7c05cad5a22"
                titlestyle="font-bold text-3xl text-[#ED9454]"
              />
            </div>
            <div className="flex justify-center p-4">
              <ProductCard
                title1="CHAMTIK"
                title2="HELLES LAGER"
                image1="blob:https://web.telegram.org/25be6671-f967-45c7-bf18-978be7bf91d1"
                image2="blob:https://web.telegram.org/94873140-da34-42bd-a02f-c7c05cad5a22"
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
            <h1 className="text-[#124734] mt-3 font-bold font-[Montserrat] text-4xl">
              Other Beer We Brewed
            </h1>
          </div>
          <div className="font-[Montserrat] font-regular flex justify-center space-x-[350px] mt-[50px]">
            <div className="space-y-3">
              <p>Cambodian Amber Ale / w palm sugar</p>
              <p>Reahoo Wheat Beer</p>
              <p>Princeps Imperial IPA</p>
              <p>French Kiss Biere de Garde</p>
              <p>Coffee Milk Stout</p>
            </div>
            <div className="space-y-3">
              <p>Bassac Hoppy Lager</p>
              <p>Tropical Mango Ale</p>
              <p>Sundown Dark Lager</p>
              <p>Dark Star Porter</p>
              <p>Jasmine Gold Blonde Ale</p>
            </div>
          </div>
        </div>
 
            <Footer/>
    
      </div>
    </>
  );
}

export default OurBeer;
