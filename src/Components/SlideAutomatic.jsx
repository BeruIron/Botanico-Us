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
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLocgAwiXv21uj-x2T5qfGk8ECL2rqkg1kJN8ineE0we536qYn2QTQm_XZcDhmgYwijI&usqp=CAU",
        },
        {
            url: "https://staticg.sportskeeda.com/editor/2024/03/79292-17111972560082-1920.jpg",
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTKeIm1bngF2mNrLE6_WA8wM8ozBHstVgiBp3EsP8vtRhyWbXLEk9gbiq5DL8rHEyn_1E&usqp=CAU",
        },
        {
            url: "https://wallpapers-clan.com/wp-content/uploads/2024/05/obito-scary-eyes-naruto-desktop-wallpaper-cover.jpg",
        },
        {
            url: "https://staticg.sportskeeda.com/editor/2024/02/e19d7-17067790349227-1920.jpg",
        },
    ];
    return(
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full bg-cover duration-500"></div>
        </div>

    )

}
export default Sa;