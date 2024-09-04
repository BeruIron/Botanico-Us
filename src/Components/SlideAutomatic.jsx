"use client";
import { useState, useEffect } from "react";
function Sa () {
    const [currentIndex, setCurrentindex] =
    useState(0)
    const slides = [
        {
            url: "https://staticg.sportskeeda.com/editor/2022/08/812fc-16598097467269.png",
        },
        {
            url: "https://wallpapercrafter.com/desktop1/567704-anime-cool-back-red-bleach-final-getsuga-widescreen.jpg",
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
        return () => clearInterval(autoplay)
    }, [currentIndex]);

    const preSlide = () => {
        setCurrentindex((preIndex) => (preIndex === 0 ? slides.length - 1: preIndex - 1))
    }
    const nextSlide = () => {
        setCurrentindex((preIndex) => (preIndex === slides.length -1 ? 0: preIndex + 1))
    }
    return(
        <div className="max-w-[1800px] h-[980px] w-full m-auto relative group">
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full bg-cover duration-500"></div>
        </div>

    )

}
export default Sa;