import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <nav>

            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg">
                    <Link to="/">
                        <img src="path/to/your/logo.png" alt="BOTANICO Logo" className="h-10" />
                    </Link>
                </div>
                <div className="flex gap-6 text-center">
                    <Link to="/" className="text-white hover:text-white">HOME</Link>
                    <Link to="/Story" className="text-white hover:text-white">STORY</Link>
                    <Link to="/OurBeer" className="text-white hover:text-white">OUR BEER</Link>
                    <div className="relative group">
                        <button className="text-white hover:text-white focus:outline-none">
                            SERVICE
                        </button>
                        <div className="absolute left-0 mt-2 w-48 bg-gray-700 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Link to="/service1" className="block px-4 py-2 hover:bg-gray-600">Service 1</Link>
                            <Link to="/service2" className="block px-4 py-2 hover:bg-gray-600">Service 2</Link>
                        </div>
                    </div>
                    <Link to="/BeerFinder" className="text-white hover:text-white">BEER FINDER</Link>
                    <Link to="/tap-room" className="text-white hover:text-white">TAP ROOM</Link>
                    <Link to="/contact" className="text-white hover:text-white">CONTACT</Link>
                    <Link to="/blog" className="text-white hover:text-white">BLOG</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
