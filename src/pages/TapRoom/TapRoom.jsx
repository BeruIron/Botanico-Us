// import React, { useState, useEffect } from "react";
// import Navbar from "../../Components/Navbar";
// import SlideTap from "../../Components/SlideTap";
// import Footer from "../../Components/Footer";
// import Button from "../../Components/Button";
// import { Link, useNavigate } from 'react-router-dom';

// // Update these paths to the correct location of your images
// import img1 from '../../image/Botanico5.jpg'; // Adjust paths as necessary
// import img2 from '../../image/Botanico4.jpg';  // Adjust paths as necessary
// import img3 from '../../image/Botanico7.jpg';    // Adjust paths as necessary
// import img4 from '../../image/Botanico8.jpg';     // Adjust paths as necessary
// import img5 from '../../image/sli.png';   
// import img6 from '../../image/Steak_for_taproom.jpg';
// import img7 from '../../image/tep2.png';

// function Taproom() {
//   const navigate = useNavigate();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slides = [
//     { url: img1 },
//     { url: img2 },
//     { url: img3 },
//     { url: img4 },
//     { url: img5 },
//   ];

//   useEffect(() => {
//     const autoplay = setInterval(() => {
//       nextSlide();
//     }, 3000);
//     return () => clearInterval(autoplay);
//   }, [currentIndex]);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <>
//       <div className="bg-black">
//         <Navbar />
//       </div>

//       <div className="relative w-full h-[600px] md:h-[800px] lg:h-[900px] xl:h-[1000px]">
//         <div
//           style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
//           className="w-full h-full bg-cover bg-center transition-all duration-500"
//         ></div>

//         <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
//           <div className="text-center px-4 md:px-8 lg:px-16">
//             <h1 className="text-white text-[50px] max-sm:text-[20px] font-abc font-bold mb-4">
//               Botanico Brewing Company
//             </h1>
//             <Link to="/ourBeer">
//             <button className="w-[150px] h-[50px] text-[15px] max-sm:w-[80px] max-sm:h-[35px] max-sm:text-[7px] font-abc font-bold text-white bg-slate-400 my-1 hover:bg-gray-600">
//               View Products
//             </button>
//           </Link>
//           </div>
//         </div>
//       </div>

//       <div className="w-[80%] max-sm:w-[90%] mx-auto py-20 max-sm:py-10">
//         <div className="flex flex-col justify-between items-center">
//           <h1 className="text-center max-sm:w-[300px] text-[30px] max-sm:text-[20px] font-abc font-bold">
//             BOTANICO CRAFT BEER GARDEN & RESTAURANT
//           </h1>
//           <p className="text-center text-[20px] max-sm:text-[12px] font-abc leading-8 max-sm:leading-4 pt-5">
//             Botanico Craft Beer Garden & Restaurant is our home! It is located
//             right next to our brewery, on the same property. The garden is a
//             beautiful, hidden gem with lots of plants and tranquility. It is the
//             perfect getaway from the hustle & bustle of the city! We always have
//             between 6 and 10 beers on tap that we brewed ourselves.
//           </p>
//         </div>
//       </div>

//       <SlideTap />

//       <div className="w-[80%] max-sm:w-[90%] mx-auto flex flex-col items-center py-20">
//         <div className="flex flex-col w-full h-[600px] md:flex-row max-sm:space-x-2 space-x-10 justify-center max-w-[1700px] border-dashed border-2 border-black">
//           <div className="w-full">
//             <img
//               className="w-full h-[300px] md:h-[596px] object-cover"
//               src={img7}
//               alt="Taproom"
//             />
//           </div>
          
//           <div className="space-y-6 max-sm:space-y-2 w-full pt-10">
//             <h3 className="text-[30px] md:text-3xl max-sm:text-[20px] font-bold">
//               OPENING HOURS
//             </h3>

//             <p className="text-[20px] max-sm:text-[10px]">
//             Monday - Thursday: 8:00 AM - 10:00 PM
//             </p>
//             <p className="text-[20px] max-sm:text-[10px]">
//             Friday - Sunday: 8:00 AM - 11:00 PM

//             </p>
//             <hr className="border-t-4 max-sm:border-t-2 border-yellow-600 w-1/4" />
//             <p className="text-[25px] max-sm:text-[20px] font-bold">
//             Moday - Friday: 3:00 PM - 6:00 PM
//             </p>

//             <h3 className="text-[30px] max-sm:text-[20px] font-bold">
//               HAPPY HOUR
//             </h3>

//             <p className="text-[20px] max-sm:text-[10px]">
//             30% discount on all craft beers

//             </p>
//             <p className="text-gray-500 text-[20px] max-sm:text-[12px]">
//               *excluding public holidays. <br />
//               Offer may not be used in conjunction with any other promotions.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-row w-[80%] max-sm:flex-col max-sm:w-[90%] mx-auto space-x-10 max-sm:space-x-0">
//         <div className="space-y-5 font-abc w-full">
//           <h2 className="text-[30px] max-sm:text-[20px] font-extrabold">
//             Near & Dear and Far & Wide
//           </h2>
//           <h3 className="text-[20px] md:text-2xl font-bold max-sm:text-[12px]">
//             Global Fusion: Khmer Flavors Meet International Dishes in Garden
//             Atmosphere
//           </h3>
//           <p className="text-[20px] max-sm:text-[12px] leading-10 max-sm:leading-4">
//             The food is a mix of Khmer and international dishes, created by
//             our executive Chef, Rith. He is a Khmer-German who learned to
//             become a master chef in Germany and is now focusing on bringing
//             high-quality and locally sourced ingredients, perfectly combined
//             to your plates!
//           </p>


//           <Link to="/menu">
//           <Button
//             onClick={() => navigate("/menu")}
//             color="Button-black"
//             name="Menu"
//           /></Link>
//         </div>

//         <div className="w-full max-sm:mt-[20px]">
//           <img
//             src={img6}
//             alt="Food image"
//             className="w-full h-[300px] md:h-[600px] object-cover"
//           />
//         </div>
//       </div>


//       <div className="mx-auto max-sm:w-[80%] flex h-[150px] max-sm:h-[80px] justify-center items-center">
//         <p className="text-center font-abc text-[20px] max-sm:text-[12px]">

//           If you wish to make a reservation, or want to hold an event at
//           Botanico, please click <Link className="text-red-600" to="/contact">
//           here
//         </Link>
//         </p>
//       </div>

//       <div className="justify-center flex h-[100px] max-sm:h-[50px]">
//       <Link to="/contact">
//       <button className="w-[120px] h-[40px] text-white bg-black my-1 hover:bg-gray-600 max-sm:w-[60px] max-sm:h-[20px] max-sm:text-[7px]">
//         Contact Us
//       </button>
//     </Link>
//       </div>
    
//       <Footer />
//     </>
//   );
// }

// export default Taproom;
import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import SlideTap from "../../Components/SlideTap";
import Footer from "../../Components/Footer";
import Button from "../../Components/Button";
import { Link } from 'react-router-dom';

import { useTranslation } from "react-i18next";

import img1 from '../../image/Botanico5.jpg';
import img2 from '../../image/Botanico4.jpg'; 
import img3 from '../../image/Botanico7.jpg';    
import img4 from '../../image/Botanico8.jpg'; 
import img5 from '../../image/sli.png';   
import img6 from '../../image/Steak_for_taproom.jpg';
import img7 from '../../image/tep2.png';

function Taproom() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
    { url: img5 },
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
        <Navbar />
      </div>

      <div className="relative w-full h-[600px] md:h-[800px] lg:h-[900px] xl:h-[1000px]">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-cover bg-center transition-all duration-500"
        ></div>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <div className="text-center px-4 md:px-8 lg:px-16">
            <h1 className="text-white text-[50px] max-sm:text-[20px] font-abc font-bold mb-4">
              Botanico Brewing Company
            </h1>
          </div>
        </div>
      </div>

      <div className="w-[80%] max-sm:w-[90%] mx-auto py-20 max-sm:py-10">
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-center max-sm:w-[300px] text-[30px] max-sm:text-[20px] font-abc font-bold">
           {t("taproom-t")}
          </h1>
          <p className="text-center text-[20px] max-sm:text-[10px] font-abc leading-8 max-sm:leading-4 pt-5">
            {t("taproom-p1")} <br />
            {t("taproom-p2")} <br />
            {t("taproom-p3")}
          </p>
        </div>
      </div>

      <SlideTap />

      <div className="w-[80%] max-sm:w-[90%] mx-auto flex flex-col items-center py-20">
        <div className="flex flex-col w-full h-[600px] md:flex-row max-sm:space-x-2 space-x-10 justify-center max-w-[1700px] border-dashed border-2 border-black">
          <div className="w-full">
            <img
              className="w-full h-[300px] md:h-[600px] object-cover"
              src={img7}
              alt="Taproom"
            />
          </div>
          
          <div className="space-y-6 max-sm:space-y-2 w-full pt-6">
            <h3 className="text-[30px] md:text-3xl max-sm:text-[20px] font-bold">
             {t("taproom-time1")}
            </h3>
            <p className="text-[20px] max-sm:text-[10px]">
            {t("taproom-time2")}
            </p>
            <p className="text-[20px] max-sm:text-[10px]">
              {t("taproom-time3")}
            </p>
            <hr className="border-t-4 max-sm:border-t-2 border-yellow-600 w-1/4" />
            <p className="text-[25px] max-sm:text-[20px] font-bold">
            {t("taproom-time4")}
            </p>

            <h3 className="text-[30px] max-sm:text-[20px] font-bold">
            {t("taproom-time5")}
            </h3>
            <p className="text-[20px] max-sm:text-[10px]">
            {t("taproom-time6")}
            </p>
            <p className="text-gray-500 text-[20px] max-sm:text-[10px]">
            {t("taproom-time7")} <br />
            {t("taproom-time8")} </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-[80%] max-sm:flex-col max-sm:w-[80%] mx-auto space-x-10 max-sm:space-x-0">
        <div className="space-y-5 font-abc w-full">
          <h2 className="text-[30px] max-sm:text-[20px] font-extrabold">
          {t("taproom-time9")}
          </h2>
          <h3 className="text-[20px] md:text-2xl font-bold max-sm:text-[10px]">
          {t("taproom-time10")} <br />
          {t("taproom-time11")}
          </h3>
          <p className="text-[20px] max-sm:text-[10px] leading-10 max-sm:leading-4">
          {t("taproom-time12")} <br />
          {t("taproom-time13")} <br />
          {t("taproom-time14")} <br />
          {t("taproom-time15")} <br />
          </p>
          <Link to='/menu'>
  <Button
    color="Button-black"
    name={t("taproom-time16")}
  />
</Link>
        
        </div>

        <div className="w-full max-sm:mt-[20px]">
          <img
            src={img6}
            alt="Food image"
            className="w-full h-[300px] md:h-[600px] object-cover"
          />
        </div>
      </div>

      <div className="justify-center max-sm: mx-auto max-sm:w-[80%] flex h-[150px] max-sm:h-[80px] items-center">
        <p className="text-center font-abc text-[20px] max-sm:text-[10px]">
        {t("taproom-time17")}  <span className="text-red-600">{t("taproom-time18")}</span>{t("taproom-time19")}
        </p>
      </div>
      <Link to="/contact">
         <div className="justify-center  flex h-[100px] max-sm:h-[50px]">
           <Button 
           color={"Button-black"}
           name={t("taproom-time20")}/>
         </div>
      </Link>
      <Footer />
    </>
  );
}

export default Taproom;