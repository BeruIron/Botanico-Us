import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../image/BotanicoCBG_Logo_wbox-01.png";
import { FaLanguage } from "react-icons/fa";
import { RiMenu3Fill, RiArrowDownSFill } from "react-icons/ri";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const content = (
    <ul className="flex gap-6 text-center font-abc font-bold text-[15px] text-white ">
      <li>
        <Link to="/" className="hover:text-gray-400">
          HOME
        </Link>
      </li>
      <li>
        <Link to="/Story" className="hover:text-gray-400">
          STORY
        </Link>
      </li>
      <li>
              <Link to="/ourbeer" className="hover:text-gray-400">
                OUR BEER
              </Link>
            </li>
      <li className="relative group">
        <Link to="/service" className="flex items-center hover:text-gray-400 focus:outline-none">
          <span>SERVICE</span>
          <RiArrowDownSFill className="ml-2" />
        </Link>


        <ul className="absolute left-0 mt-2 w-48 bg-gray-700 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <li>
            <Link to="/event" className="block px-4 py-2 hover:bg-gray-600">
              Event
            </Link>
          </li>
          <li>
            <Link to="/testing" className="block px-4 py-2 hover:bg-gray-600">
              Testing Beer
            </Link>
          </li>
          <li>
            <Link
              to="/restaurant"
              className="block px-4 py-2 hover:bg-gray-500"
            >
              Restaurant
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/BeerFinder" className="hover:text-gray-400">
          BEER FINDER
        </Link>
      </li>
      <li>
        <Link to="/taproom" className="hover:text-gray-400">
          TAP ROOM
        </Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-gray-400">
          CONTACT
        </Link>
      </li>
      <li>
        <Link to="/blog" className="hover:text-gray-400">
          BLOG
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="relative font-abc font-bold text-[15px]">
      <div className=" flex justify-between  w-[95%] mx-auto items-center px-4 py-4">
        <div className="overflow-hidden ">
          <Link to="/">
            <img
              src={Image}
              alt="BOTANICO Logo"
              className=" h-[100px] w-[180px] max-sm:h-[60px] max-sm:w-[130px] "
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center">{content}</div>

        <div className="md:hidden flex items-center">
          <RiMenu3Fill
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        <FaLanguage className="hidden md:block text-white text-5xl mr-[50px]" />
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 text-white">
          <ul className="flex flex-col items-center gap-6 py-4">
            <li>
              <Link to="/" className="hover:text-gray-400">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/Story" className="hover:text-gray-400">
                STORY
              </Link>
            </li>
            <li>
              <Link to="/ourbeer" className="hover:text-gray-400">
                OUR BEER
              </Link>
            </li>
            <li className="relative">
              <Link to="/service" className="flex items-center hover:text-gray-400 focus:outline-none">
                <span>SERVICE</span>
                <RiArrowDownSFill className="ml-2" />
              </Link>
              <ul className="bg-gray-600 mt-2">
                <li>
                  <Link
                    to="/event"
                    className="block px-4 py-2 hover:bg-gray-500"
                  >
                    Event
                  </Link>
                </li>
                <li>
                  <Link
                    to="/testing"
                    className="block px-4 py-2 hover:bg-gray-500"
                  >
                    Testing Beer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/restaurant"
                    className="block px-4 py-2 hover:bg-gray-500"
                  >
                    Restaurant
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/BeerFinder" className="hover:text-gray-400">
                BEER FINDER
              </Link>
            </li>
            <li>
              <Link to="/taproom" className="hover:text-gray-400">
                TAP ROOM
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">
                CONTACT
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gray-400">
                BLOG
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
