"use client";
import { useState, useEffect } from "react";
import img1 from '../image/slider.png'; // Adjust paths as necessary
import img2 from '../image/slide.png';  // Adjust paths as necessary
import img3 from '../image/sld.png';    // Adjust paths as necessary
import img4 from '../image/sd.png';     // Adjust paths as necessary
import img5 from '../image/sli.png';    // Adjust paths as necessary

function SlideTap() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { url: img1 },
        { url: img2 },
        { url: img3 },
        { url: img4 },
        { url: img5 },
    ];

    useEffect(() => {
        const autoplay = setInterval(nextSlide, 3000);
        return () => clearInterval(autoplay);
    }, [currentIndex]); // Removed from dependency as it can cause unnecessary re-renders

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-[80%] max-sm:w-[90%] mx-auto h-[50vh] md:h-[60vh] lg:h-[75vh] xl:h-[80vh]">
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className="w-full h-full m-auto bg-cover bg-center transition-all duration-500"
            ></div>

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                {/* You can add additional content here if needed */}
            </div>
        </div>
    );
}

export default SlideTap;
