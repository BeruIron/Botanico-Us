"use client";
import { useState, useEffect } from "react";

function SlideTap() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        {
            url: "https://trinkreif.de/wp-content/uploads/perfektes-steak-richtig-braten.jpg",
        },
        {
            url: "https://lh3.googleusercontent.com/pw/AP1GczMDfT4mWzYgw9s3eMski4HYzipLsz_okHm4z8T3YYXIFedMR8eKRpq_J955OBhb_RsnfjpqjSe0VEm9hUyEPrTCGcYA_IcJMDLYfmXXmsDOhkWaR4IhZIqNVJz7Fw-3qqfCnB8qhsgM66B5K95pmhav=w1449-h967-s-no?authuser=2",
        },
        {
            url: "https://img.goodfon.com/original/1680x1050/2/cd/naruto-akatsuki-konan-payne.jpg",
        },
        {
            url: "https://i.pinimg.com/originals/19/2b/dc/192bdc10828a0d90a456d1f562b58950.jpg",
        },
        {
            url: "https://images4.alphacoders.com/135/1357584.png",
        },
        {
            url: "https://staticg.sportskeeda.com/editor/2024/02/e19d7-17067790349227-1920.jpg",
        },
    ];

    useEffect(() => {
        const autoplay = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(autoplay);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[75vh] xl:h-[80vh] px-12">
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className=" w-full h-full m-auto bg-cover bg-center transition-all duration-500"
            ></div>

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                {/* { Add any overlay or navigation controls here */} 
            </div>
        </div>
    );
}

export default SlideTap;

