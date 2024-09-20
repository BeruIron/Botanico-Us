import React from "react";
import Navbar from "../../Components/Navbar";
import { useState, useEffect } from "react";
import SlideTap from "../../Components/SlideTap";
import Footer from "../../Components/Footer";
import image from "../../image/beer (52).jpg"
function Taproom() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        {
            url: "https://trinkreif.de/wp-content/uploads/perfektes-steak-richtig-braten.jpg",
        },
        {
            url: "https://pro2-bar-s3-cdn-cf1.myportfolio.com/54415d07-2ce9-4b86-9af4-178f849b3c28/90c44997-5b96-423e-ab98-ce644aa36e6e_rw_3840.jpg?h=8b35ff220ce42786125dc49e22286f1f",
        },
        {
            url: "https://pro2-bar-s3-cdn-cf3.myportfolio.com/54415d07-2ce9-4b86-9af4-178f849b3c28/e9b80264-62a7-4004-b424-258cc156c60f_rw_3840.jpg?h=86ba44a4033b99b8046b78491cedc081",
        },
        {
            url: "https://i.pinimg.com/originals/19/2b/dc/192bdc10828a0d90a456d1f562b58950.jpg",
        },
        {
            url: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_1726/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/u0eo1qkqlw860f84zfwg/LateAfternoonBeerTourinPhnomPenh.jpg",
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
        <>
            <div className="bg-black">
               <Navbar></Navbar>
            </div>

           
            <div className="relative w-full h-[600px] md:h-[800px] lg:h-[900px] xl:h-[1000px]">
                <div
                     style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                     className="w-full h-full bg-cover bg-center transition-all duration-500"
                ></div>

                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                     <div className="text-center px-4 md:px-8 lg:px-16">
                         <h1 className="text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
                              Botanico Brewing Company
                         </h1>
                     </div>
                </div>
            </div>


            <div className="relative w-full px-4 md:px-10 py-20">
                <div className=" flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:w-3/4 md:text-left m-auto">
                        <h1 className="text-center text-3xl md:text-5xl font-bold">
                            BOTANICO CRAFT BEER GARDEN & RESTAURANT
                        </h1>
                        <p className="text-center text-lg md:text-xl font-light leading-8 pt-5">
                            Botanico Craft Beer Garden & Restaurant is our home! It is located right
                            next to our brewery, on the same property. The garden is a beautiful, hidden gem
                            with lots of plants and tranquility. It is the perfect getaway from the hustle &
                            bustle of the city! We always have between 6 and 10 beers on tap that we brewed ourselves.
                        </p>
                    </div>

                    <div className="mt-5 md:mt-0 md:absolute md:top-0 md:right-0 mr-0 md:mr-10 py-4">
                        <img
                            className="w-[100px] md:w-[150px]"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/918px-NASA_logo.svg.pngBotanico_BBox_logo-01.png"
                            alt="logo"
                        />
                    </div>
                </div>
            </div>

            <SlideTap />

            <div className="w-full flex flex-col items-center py-20 px-4">

                <div className="flex flex-col md:flex-row justify-center items-start max-w-[1700px] border-dashed border-2 border-black">
                    <div className="w-full md:w-1/2">
                        <img
                            className="w-full h-[300px] md:h-[600px] object-cover"
                            src="https://lionbreweryco.com/wp-content/uploads/2024/03/Lion-Brewery-taproom-table-outdoor.webp"
                            alt="Taproom"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-4 md:p-10 pt-10">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">OPENING HOURS</h3>
                            <p className="text-lg md:text-xl">Monday - Thursday: 8:00 AM - 10:00 PM</p>
                            <p className="pb-4 text-lg md:text-xl">Friday - Sunday: 8:00 AM - 11:00 PM</p>
                            <hr className="border-t-4 border-yellow-600 w-1/4 mb-4" />
                            <p className="font-bold mb-6">Moday - Friday: 3:00 PM - 6:00 PM</p>
                        </div>

                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">HAPPY HOUR</h3>
                            <p className="pb-10 text-lg md:text-xl">
                                30% discount on all craft beers
                            </p>
                            <p className="text-gray-500 text-sm md:text-base">
                                *excluding public holidays. <br />
                                Offer may not be used in conjunction with any other promotions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1800px] mx-auto p-8">
                <div className="flex flex-col lg:flex-row items-start">
                  
                    <div className="lg:w-1/2 p-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Near & Dear and Far & Wide</h2>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">
                            Global Fusion: Khmer Flavors Meet International Dishes in Garden Atmosphere
                        </h3>
                        <p className="mb-6 text-base md:text-xl font-light leading-8">
                            The food is a mix of Khmer and international dishes, created by our executive Chef, Rith.
                            He is a Khmer-German who learned to become a master chef in Germany and is now focusing
                            on bringing high-quality and locally sourced ingredients, perfectly combined to your plates!
                        </p>
                        <button className="bg-black text-white px-6 md:px-10 py-3 md:py-4 hover:bg-gray-800">
                            View Our Menu
                        </button>
                    </div>

                    <div className="lg:w-1/2 p-4">
                        <img
                            src="https://trinkreif.de/wp-content/uploads/perfektes-steak-richtig-braten.jpg"
                            alt="Food image"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                <div className="text-center mt-10 text-lg md:text-xl font-light">
                    <p className="px-10 pb-10">
                        If you wish to make a reservation, or want to hold an event at Botanico, please click here to contact us.
                    </p>
                    <button className="mt-4 bg-black text-white px-6 md:px-10 py-3 md:py-4 hover:bg-gray-800">
                        Contact Us
                    </button>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Taproom;

