import React from "react";
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import Image from "../image/Botanico_BBox_logo.png";

function Footer() {
  return (
    <div className="bg-black h-[300px]  it text-white max-sm:h-[170px] ">
      <div className=" flex  justify-between  w-[95%]  max-sm:space-y-4 max-sm:text-[7px]">
    
        <div className="flex items-center mb-4 max-sm:justify-center">
          <img
            className="w-[160px] h-[160px] max-sm:w-[70px] max-sm:h-[70px]"
            src={Image}
            alt="logo"
          />
        </div>
        <div className="flex mt-7 flex-col space-y-7 text-gray-200  max-sm:space-y-2 ">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaFacebook size={20} color="#1877F2" />
            <h5>Join to Facebook page</h5>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaInstagram size={20} color="#E4405F" />
            <h5>Join to Instagram page</h5>
          </a>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaMapMarkerAlt size={20} color="#FF0000" />
            <h5>Location Botanico Copany</h5>
          </a>
        </div>
        <div className="flex mt-7  space-x-[400px] max-sm:flex-row relative  ">
          <div className="flex flex-col space-y-2  ">
            <h5 className="font-semibold">PRODUCT</h5>
            <ul className="space-y-2">
              <li>Splash</li>
              <li>Blonde Ale</li>
              <li>Helles Lager</li>
              <li>Centurion</li>
            </ul>
          </div>
          </div>

          <div className="flex mt-7 flex-col space-y-2 ml-[50px] " >
            <h5 className="font-semibold">MENU</h5>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Story</li>
              <li>Beer</li>
              <li>Beer Finder</li>
              <li>Contact</li>
            </ul>
          </div>
       
      </div>
      <p className="text-gray-200 text-center mt-3 max-sm:text-[7px]">
        #9B St. 29 (Near St. 294) Tonle Bassac Chamkarmon Phnom Penh
      </p>
    </div>
  );
}

export default Footer;
