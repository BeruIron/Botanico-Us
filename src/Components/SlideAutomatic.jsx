"use client";

import img1 from '../image/Botanico4.jpg'; // Adjust paths as necessary
import img2 from '../image/Botanico5.jpg'; // Renamed to avoid spaces
import img3 from '../image/Botanico7.jpg'; // Renamed to avoid spaces
import img4 from '../image/Botanico8.jpg';
import img5 from '../image/Botanico9.jpg'; // Renamed to avoid spaces

import { useState, useEffect, useCallback } from "react";
import { useTranslation } from 'react-i18next'; // <-- Import useTranslation

function Sa() {
    const { t } = useTranslation(); // Get the t function for translations

    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { url: img1 },
        { url: img2 },
        { url: img3 },
        { url: img4 },
        { url: img5 },
    ];

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    }, [slides.length]);

    useEffect(() => {
        const autoplay = setInterval(nextSlide, 3000);
        return () => clearInterval(autoplay);
    }, [nextSlide]);

    return (
        <div className="w-full h-[70vh] m-auto relative">
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className="w-full h-full bg-cover bg-center transition duration-500"
            ></div>

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                <div className="text-center px-4 md:px-8 lg:px-16">
                    <h1 className="text-white text-[30px] font-abc font-bold max-sm:text-[20px] mb-4">
                        Botanico Brewing Company
                    </h1>
                    <button className="w-[150px] h-[50px] text-[15px] max-sm:w-[80px] max-sm:h-[35px] max-sm:text-[7px] font-abc font-bold text-white bg-slate-400 my-1 hover:bg-gray-600">
                        {t("viewproduct")} {/* Translated text */}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sa;
