import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import Image from "../image/Botanico_BBox_logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-black h-[350px] max-sm:h-[160px]">
      <div className="flex justify-between mx-auto w-[90%] max-sm:space-y-4 max-sm:text-[7px]">
        <div className="mt-2">
          <img
            className="w-[180px] h-[180px] max-sm:w-[70px] max-sm:h-[70px]"
            src={Image}
            alt="logo"
          />
        </div>
        <div className="flex mt-7 flex-col space-y-7 font-abc font-bold text-gray-200 max-sm:space-y-2">
          <a
            href="mailto:info@botanicobrewing.com"
            className="flex items-center gap-2"
          >
            <FaEnvelope
              className="text-[30px] max-sm:text-[10px]"
              color="#1877F2"
            />
            <h5>Email</h5>
          </a>

          <a href="tel:+88570513499" className="flex items-center gap-2">
            <MdPhone
              className="text-[30px] max-sm:text-[10px]"
              color="#1877F2"
            />
            <h5>+885 05 661 866</h5>
          </a>

          <a
            href="https://www.tiktok.com/@botanico.garden.brewery?_t=8pBhduEtZo1&_r=1"
            className="flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok
              className="text-[30px] max-sm:text-[10px]"
              color="#1877F2"
            />
            <h5>TikTok</h5>
          </a>
        </div>
        <div className="flex mt-7 flex-col space-y-7 font-abc font-bold text-gray-200 max-sm:space-y-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaFacebook
              className="text-[30px] max-sm:text-[10px]"
              color="#1877F2"
            />
            <h5>Join Our Facebook</h5>
          </a>
          <a
            href="https://www.instagram.com/botanicobrewing?igsh=MXBpOGtzZjYwZ3dwNA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaInstagram
              className="text-[30px] max-sm:text-[10px]"
              color="#E4405F"
            />
            <h5>Join Our Instagram</h5>
          </a>
          <a
            href="https://maps.app.goo.gl/2JjevYQ5ZhdJtAy16"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaMapMarkerAlt
              className="text-[30px] max-sm:text-[10px]"
              color="#FF0000"
            />
            <h5>Our Location</h5>
          </a>
        </div>
        <div className="flex flex-col space-y-4 text-white mt-7">
          <h5 className="font-semibold text-[25px]">PRODUCT</h5>
          <ul className="space-y-2 font-bold">
            <li>Splash</li>
            <li>Blonde Ale</li>
            <li>Helles Lager</li>
            <li>Centurion</li>
          </ul>
        </div>
      </div>
      <p className="text-gray-200 font-abc text-center max-sm:text-[7px] mt-[50px] max-sm:mt-2">
        #9B St. 29 (Near St. 294) Tonle Bassac Chamkarmon Phnom Penh
      </p>
    </div>
  );
}

export default Footer;
