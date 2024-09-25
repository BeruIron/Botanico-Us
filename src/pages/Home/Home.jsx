import React from "react";
import Navbar  from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Bg from "../../Components/Bg";
import Button from "../../Components/Button";
import Title from "../../Components/Tittle";
import { useTranslation } from 'react-i18next';
import img from "../../image/DSC01542.jpg"


function Home() {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <div className="bg-black text-white">
        <Navbar />
      </div>
      <div className="relative">
        <Bg />
      </div>
      <Title 
       titleText="BOTANICO" />

      <div className=" w-[70%] h-[700px] mx-auto max-sm:h-[350px] max-sm:w-[90%]">
        <div className="flex justify-center max-sm:mt-7 mt-16 max-sm:space-x-3 space-x-20">
          <div>
            <img
              className=" w-[600px] h-[500px] object-cover max-sm:h-[300px] max-sm:w-[500px] "
              src={img}
              alt="example"
            />
          </div>

          <div >
            <h1 className="text-[30px]  font-montserrat font-semibold max-sm:text-[15px]">
             
              Botanico Brewing Co.
            </h1>

            <p className="text-[20px]  my-8 font-light max-sm:text-[10px] max-sm:my-2">
            {t("p1")} <br />
            {t("p2")} <br />
            {t("p3")} <br />
            {t("p4")} 
            

            </p>

            <p className="text-[20px]  font-light max-sm:text-[10px]">
            {t("h1")} <br />
            {t("h2")} <br />
            {t("h3")} <br />
            {t("h4")} 
             
            </p>

            <div className="flex justify-center mt-[30px]">
              <Button name={t("learnMore")} color="Button-black" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;