import React from "react";
import Navbar from "../../Components/Navbar";
import Sa from "../../Components/SlideAutomatic";
import Button from "../../Components/Button";
import Footer from "../../Components/Footer";
import Title from "../../Components/Tittle";
import { useTranslation } from "react-i18next";

import image from "../../image/story1.png";
import image1 from "../../image/story.png";

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
        <p className="text-[20px]  font-abc leading-10 h-[130px] max-sm:leading-7 items-center max-sm:text-[10px] max-sm:h-[150px] flex">
          {t("wearebotanico-p1")}
          {t("wearebotanico-p2")}
          {t("wearebotanico-p3")}
        </p>
      </div>
      <Title titleText={t("ourstory")}></Title>
      <div className="w-[70%] max-sm:w-[90%] mx-auto">
        <div className="flex max-sm:flex-col flex-row mt-[50px]  mx-auto max-sm:space-x-0 space-x-10">
          <img
            src={image}
            alt="Brewery"
            className="w-[500px] h-[400px] object-cover"
          />
          <div>
            <p className="text-[20px] font-abc leading-10 h-[170px] max-sm:leading-7 max-sm:text-[10px] max-sm:h-[170px] flex">
              {t("ourstory-p")}
              {t("ourstory-p1")}
              {t("ourstory-p2")}
              {t("ourstory-p3")}
              {t("ourstory-p4")}
              {t("ourstory-p5")}
            </p>
            <p className="text-[20px]  font-abc leading-10 max-sm:leading-7 max-sm:h-[150px] max-sm:text-[10px] h-[100px]">
              {t("ourstory-h")}
              {t("ourstory-h1")}
              {t("ourstory-h2")}
              {t("ourstory-h3")}
            </p>
          </div>
        </div>
        <div>
          <p className="text-[20px] leading-10 max-sm:leading-7 font-abc max-sm:text-[10px] items-center flex h-[200px]">
            {t("ourstory-a")}
            {t("ourstory-a1")}
            {t("ourstory-a2")}
            {t("ourstory-a3")}
            {t("ourstory-a4")}
            {t("ourstory-a5")}
          </p>

          <p className="font-abc font-bold  text-[30px] max-sm:mt-[50px] max-sm:text-[20px]">
            {" "}
           {t("ourstory-t")}
          </p>
        </div>

        <div className=" mt-[50px] ">
          <img
            src={image1}
            alt="Brewery"
            className=" w-full h-[700px] max-sm:h-[400px] object-cover"
          />
        </div>

        <div className="flex justify-center items-center font-abc h-[150px] max-sm:h-[50px]">
          <Button name={t("ourstory-butt")} className="Button-black" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Story;
