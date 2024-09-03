import React from 'react';
function Navbar () {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-red-500 text-lg">
                    BOTANICO
                </div>
                <div className="flex gap-6"> 
                    <a href="#home" className="text-gray-300 hover:text-white">Home</a>
                    <a href="#about" className="text-gray-300 hover:text-white">About</a>
                    <a href="#services" className="text-gray-300 hover:text-white">Services</a>
                    <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
