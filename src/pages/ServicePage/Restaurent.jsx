import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Button from "../../Components/Button";
import img4 from "../../image/beer (37).jpg";
import img2 from "../../image/beer (37).jpg";
import img3 from "../../image/beer (37).jpg";
import imgbody1 from "../../image/beer (35).jpg";
import imgbody2 from "../../image/beer (43) (1).jpg";
import QuestionComponent from "../../Components/Question";
import { useTranslation } from "react-i18next";

function Restaurant() {
const { t } = useTranslation();

  return (
    <div>
      <div className="bg-black text-white ">
        <Navbar />
      </div>
    
      <div className="bg-gray-100 h-[550px] max-sm:h-[300px]">
        <div className="h-[550px] max-sm:h-[300px]">
          <QuestionComponent textquestion={t("restaurant-t")} />
          <div className="flex justify-center overflow-hidden mt-[20px] ">
            <img
              className="w-[250px] h-[330px] object-cover bg-orange-400 max-sm:w-[100px] max-sm:h-[150px] flex"
              src={img2}
              alt="Beer 1"
            />
            <img
              className="w-[250px] h-[330px] object-cover bg-amber-900 mx-[10px] max-sm:w-[100px] max-sm:h-[150px] flex"
              src={img3}
              alt="Beer 2"
            />
            <img
              className="w-[250px] h-[330px] object-cover bg-teal-900 max-sm:w-[100px] max-sm:h-[150px]   flex"
              src={img4}
              alt="Beer 3"
            />
          </div>
        </div>
      </div>

      <div className="space-y-10 max-sm:w-[80%] max-sm:flex-col justify-center mx-auto">
        <div className=" bg-white flex justify-center max-sm:flex-col space-x-10 max-sm:space-x-0">
          <ul className="list-disc pl-5 text-[20px] font-abc leading-[50px] max-sm:flex-col max-sm:text-[10px] max-sm:leading-6 mt-[50px]">
            <h2 className="font-bold font-abc"> {t("restaurant-p")}</h2>
            <li>
            {t("restaurant-p1")}
            </li>
            <li>{t("restaurant-p2")} </li>
            <li>
            {t("restaurant-p3")}
              <br />
              <li>{t("restaurant-p4")} </li>
            </li>
            {t("restaurant-p5")} 
          </ul>

          <div className="mt-[50px]">
            <img
              src={imgbody1}
              alt=""
              className="w-[600px] max-sm:h-[200px] object-cover"
            />
          </div>
        </div>

        <div className=" bg-white flex max-sm:flex-col  max-sm:space-x-0 justify-center space-x-10">
          <div>
            <img
              src={imgbody2}
              alt=""
              className="w-[600px] max-sm:h-[200px]  object-cover"
            />
          </div>

          <ul className="list-disc pl-5 text-[20px] max-sm:flex-col font-abc leading-[50px] max-sm:text-[10px] max-sm:leading-6">
            <h2 className="text-[20px] max-sm:text-[10px] font-bold font-abc  ">
             {t("restaurant-p6")}
            </h2>
            <li> {t("restaurant-p7")} <br /> </li>
            <li>{t("restaurant-p8")}</li>
            <li>{t("restaurant-p9")}</li>
            <li>
            {t("restaurant-p10")}
              <br />
              {t("restaurant-p11")}
            </li>
            <li>{t("restaurant-p12")}
              <br />
              {t("restaurant-p13")}
            </li>
          </ul>
        </div>
      </div>
      
      <div className="w-[50%] max-sm:w-[80%] mx-auto flex h-[200px] max-sm:h-[80px] items-center">
      <p className="text-[20px] font-abc text-center max-sm:text-[10px]">
        {" "}
        {t("restaurant-p14")}
        {t("restaurant-p15")}{" "}
        <span className="text-red-600">{t("restaurant-p16")}</span>
      </p>
      </div>
      
      <div className="bg-gray-100  flex items-center justify-center h-[100px] ">
        <Button name={t("restaurant-p17")} color="Button-black" />
      </div>

      <Footer />
    </div>
  );
}
export default Restaurant;

