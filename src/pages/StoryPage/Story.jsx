import React from "react";
import Navbar from "../../Components/Navbar";
import Sa from "../../Components/SlideAutomatic";
import Button from "../../Components/Button";
import Footer from "../../Components/Footer";
import Title from "../../Components/Tittle";

import image from '../../image/Botanico10.jpg'
import image1 from '../../image/DSC01542.jpg'


import { useTranslation } from 'react-i18next';


import { Link } from 'react-router-dom';




function Story() {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-black">
        <Navbar />
      </div>

      <Sa />

      <Title titleText={t("wearebotanico")}></Title>
      <div className=" w-[70%] max-sm:w-[90%] mx-auto">

        <p className="text-[20px]  font-light leading-10 h-[130px] max-sm:leading-7 items-center max-sm:text-[12px] max-sm:h-[150px] flex">
          {t("wearebotanico-p1")} 
          {t("wearebotanico-p2")} 
          {t("wearebotanico-p3")} 

        </p>
      </div>
      <Title titleText={t("ourstory")}></Title>
      <div className="w-[70%] max-sm:w-[90%] mx-auto">
        <div className="flex max-sm:flex-col flex-row mt-[50px]  mx-auto max-sm:space-x-0 space-x-10">
         
          <img
            src={image1}
            alt="Brewery"
            className="w-[500px] h-[400px] object-cover"
          />

          
          <div className="max-sm:mt-[20px]">


            <p className="text-[20px] font-light leading-10 h-[170px] max-sm:leading-7 max-sm:text-[12px] max-sm:h-[120px] flex">
             {t("ourstory-p")}
             {t("ourstory-p1")}
             {t("ourstory-p2")}
             {t("ourstory-p3")}
             {t("ourstory-p4")}
             {t("ourstory-p5")}

            </p>
            <p className="text-[20px] pt-16 font-light leading-10 max-sm:leading-7 max-sm:h-[170px] max-sm:text-[12px] h-[100px]">
            {t("ourstory-h")}
            {t("ourstory-h1")}
            {t("ourstory-h2")}
            {t("ourstory-h3")}

            </p>
          </div>
        </div>
        <div>

           <p className="text-[20px] leading-10 max-sm:leading-7 font-light max-sm:text-[12px] items-center flex h-[200px]">
           {t("ourstory-a")}
             {t("ourstory-a1")}
             {t("ourstory-a2")}
             {t("ourstory-a3")}
             {t("ourstory-a4")}
             {t("ourstory-a5")}

        </p>

        <p className="font-abc font-bold  text-[30px] max-sm:mt-[10px] max-sm:text-[20px]"> Real Cambodian Craft Beer</p>

        </div>



       
        <div className=" mt-[50px] ">
          <img
            src={image}
            alt="Brewery"
            className=" w-full h-[700px] max-sm:h-[400px] object-cover"
          />
        </div>

        <div className="flex justify-center items-center font-abc h-[150px] max-sm:h-[50px] max-sm:mt-[14px] max-sm:mb-4">

           <Link to="/ourBeer">
             <Button name="View Products" color="Button-black" />
           </Link>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Story;