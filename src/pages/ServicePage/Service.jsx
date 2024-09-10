import React from "react";
import Navbar from "../../Components/Navbar";
import BackgroundSection from "../../Components/Background-img";
import Footer from "../../Components/Footer";

function Servicepage() {
  return (
    <div>
      <div className="relative">
        <BackgroundSection
          backgroundImage="https://lh3.googleusercontent.com/pw/AP1GczObCs2Ocqkf7SGQuEsyjdQXY_Jv2L_WIqt9wEDoIovnwUJnRpn51cwIN_LvNo4NCqEwpT5_47vLfyOHxFmfZqY7m3qQSp94s9zlmMjPTFUdcYDJkctWHceiNOeLpOoYNdRlhElcltm-laJTwzjDQ8Sy=w1449-h966-s-no-gm?authuser=0"
          className="h-[500px] relative"
        >
          <Navbar />
        </BackgroundSection>

        <div className="w-[100%] h-[330px] flex justify-center absolute bottom-0 left-0 right-0 translate-y-[50%]">
          <div>
            <img
              className="w-[250px] h-[350px]"
              src="https://i.pinimg.com/736x/a6/94/4e/a6944e49c09650131d2a2037433bad8e.jpg"
              alt=""
            />
          </div>

          <div className=" mx-[10px]">
            <img
              className="w-[250px] h-[350px]"
              src="https://i.pinimg.com/736x/a6/94/4e/a6944e49c09650131d2a2037433bad8e.jpg"
              alt=""
            />
          </div>

          <div>
            <img
              className="w-[250px] h-[350px]"
              src="https://i.pinimg.com/564x/9c/7e/a2/9c7ea2faf9faa1204f5284bade8f3a44.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[720px] bg-white flex items-center justify-center">
      <div className="w-full h-[100px] flex justify-center items-center mb-[60px]">
  <h1 className="text-4xl">
    BOTANICO SERVICES
  </h1>
</div>

      </div>
      <div className="w-[100%] h-[320px] bg-[#D9D9D9]">
      </div>

      <div className="w-[100%] h-[440px] flex justify-center absolute bottom-0 left-0 right-0 translate-y-[98%]">
        <div className="w-[396px] h-[400px]">
          <div className="w-[396px] h-[253px]">
          <img className="w-[396px] h-[260px]  object-cover"
         src="https://i.pinimg.com/736x/a6/94/4e/a6944e49c09650131d2a2037433bad8e.jpg" 
         alt="" />
          </div>
          <div className="w-[396px] h-[147px] bg-white flex justify-center items-center">
          <h1 className="whitespace-nowrap">Restaurant/bar</h1>
          </div>
        </div>

        <div className="w-[396px] h-[400px] mx-[150px]">
          <div className="w-[396px] h-[253px]">
          <img className="w-[396px] h-[260px]  object-cover"
         src="https://i.pinimg.com/736x/a6/94/4e/a6944e49c09650131d2a2037433bad8e.jpg" 
         alt="" />
          </div>
          <div className="w-[396px] h-[147px] bg-white flex justify-center items-center">
          <h1 className="whitespace-nowrap">Event</h1>
          </div>
        </div>


        <div className="w-[396px] h-[400px]">
          <div className="w-[396px] h-[253px]">
          <img className="w-[396px] h-[260px] object-cover"
         src="https://i.pinimg.com/736x/a6/94/4e/a6944e49c09650131d2a2037433bad8e.jpg" 
         alt="" />
          </div>
          <div className="w-[396px] h-[147px] bg-white flex justify-center items-center ">
          <h1 className="whitespace-nowrap">Tours/Tastings</h1>
          </div>    
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Servicepage;
