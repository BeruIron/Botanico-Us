import React from "react";
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';


function Footer() {
  return (
    <div className="bg-black h-[500px] text-2xl">
      <div className="flex justify-between p-8">
        <div className="flex justify-between space-x-52">
          <img
            className="w-[100px] h-[100px] mb-4"
            src="https://i.pinimg.com/originals/d5/ea/70/d5ea7077bc2c1775edfda58a8d50ae26.png"
            alt="logo"
          />
          <div className="text-gray-200 space-y-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <FaFacebook size={30} color="#1877F2" />
              <h5>Join Our Facebook Page</h5>
            </a>
<br />
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <FaInstagram size={30} color="#E4405F" />
              <h5>Join Our Instagram</h5>
            </a>
<br />
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <FaMapMarkerAlt size={30} color="#FF0000" />
              <h5>Find Our Location</h5>
            </a>
          </div>
        </div>

        <div className="flex text-gray-200 space-x-52">
          <div className="flex flex-col space-y-2">
            <h5 className="font-semibold">PRODUCTS</h5>
            <ul className="space-y-2">
              <li>CENTURION </li>
              <li>SPLASH</li>
              <li>KHMER HONEY</li>
              <li>CHAMTIK</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-2">
            <h5 className="font-semibold">MENU</h5>
            <ul className="space-y-2">
              <li>HOME</li>
              <li>STORY</li>
              <li>OUR BEER</li>
              <li>BEER FINDER</li>
              <li>TAP ROOM</li>
              <li>SERVICES</li>
              <li>CONTACT</li>
              <li>BLOG</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-gray-200 text-center">
        #9B St. 29 (Near St. 294) Tonle Bassac Chamkarmon Phnom Penh
      </p>
    </div>
  );
}

export default Footer;
