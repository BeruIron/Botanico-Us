import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../image/BotanicoCBG_Logo_wbox-01.png'
import {FaLanguage } from 'react-icons/fa';

function Navbar() {
    return (

        <nav>

            <div className="container  flex justify-between ml-[40px] items-center">
                <div className="">
                    <Link to="/">
                        <img src={Image} alt="BOTANICO Logo" className="h-50 w-[180px]" />
                    </Link>
                </div>
                <div className="flex gap-6 text-center text-white">
                    <Link to="/" className=" hover:text-white">HOME</Link>
                    <Link to="/Story" className=" hover:text-white">STORY</Link>
                    <div className="relative group">
                        <Link to="/service" className=" hover:text-white focus:outline-none">
                            SERVICE
                        </Link>
                        <div className="absolute left-0 mt-2 w-48 bg-gray-700 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Link to="/restaurent" className="block px-4 py-2 hover:bg-gray-600">Restaurent/Bar</Link>
                            <Link to="/service2" className="block px-4 py-2 hover:bg-gray-600">Service 2</Link>
                        </div>
                    </div>
                    <Link to="/BeerFinder" className=" hover:text-white">BEER FINDER</Link>
                    <Link to="/tap-room" className=" hover:text-white">TAP ROOM</Link>
                    <Link to="/contact" className=" hover:text-white">CONTACT</Link>
                    <Link to="/blog" className=" hover:text-white">BLOG</Link>
                </div>
                <FaLanguage className="text-white text-5xl" />
            </div>
        </nav>
    );
}

export default Navbar;

