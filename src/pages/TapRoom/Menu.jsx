import BackgroundSection from "../../Components/Background-img";
import img from "../../image/DSC01542.jpg";
import React from "react";
import Navbar from "../../Components/Navbar";
import Image from "../../image/Botanico_BBox_logo-01.png";
import Menu1 from "../../image/menu1.png";
import Menu2 from "../../image/menu2.png";
import Menu3 from "../../image/Menu3.png";
import Menu4 from "../../image/Menu4.png";
import Menu5 from "../../image/Menu5.png";
import Menu6 from "../../image/Menu6.png";
import Menu7 from "../../image/Menu7.png";
import Menu8 from "../../image/Menu8.png";
import Menu9 from "../../image/Menu9.png";
import Menu10 from "../../image/Menu10.png";
import Menu11 from "../../image/Menu11.png";
import Menu12 from "../../image/Menu12.png";
import Menu13 from "../../image/Menu13.png";
import Footer from "../../Components/Footer";

const Menu = () => {
  return (
    <>
      <BackgroundSection backgroundImage={img}>
        <Navbar></Navbar>
      </BackgroundSection>
      <div className="border-4 border-gray-100">
        <div className="flex justify-between items-center bg-white h-[100px] w-[90%] mx-auto ">
          <h1 className=" -mb-[10px] text-[30px] font-abc font-extrabold max-sm:text-[20px] max-sm:ml-[30px]">
            BOTANICO MENU{" "}
          </h1>
          <img
            className="w-[80px] mr-[50px] max-sm:w-[50px] max-sm:mr-[30px]"
            src={Image}
            alt="logo"
          />
        </div>
      </div>

      <div className="flex items-center justify-center flex-col">
        <img src={Menu1} alt="" />
        <img src={Menu2} alt="" />
        <img src={Menu3} alt="" />
        <img src={Menu4} alt="" />
        <img src={Menu5} alt="" />
        <img src={Menu6} alt="" />
        <img src={Menu7} alt="" />
        <img src={Menu8} alt="" />
        <img src={Menu9} alt="" />
        <img src={Menu10} alt="" />
        <img src={Menu11} alt="" />
        <img src={Menu12} alt="" />
        <img src={Menu13} alt="" />
      </div>
      <Footer></Footer>
    </>
  );
};

export default Menu;
