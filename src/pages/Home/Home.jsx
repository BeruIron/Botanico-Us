import React from "react";
import Navbar  from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Bg from "../../Components/Bg";
import Button from "../../Components/Button";
import Title from "../../Components/Tittle";
import img from "../../image/beer (34).jpg";
import { useTranslation } from 'react-i18next';

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

      <Title titleText="BOTANICO" />

      <div className="w-[70%] h-[700px] mx-auto max-sm:w-[80%]">
        <div className="flex justify-between mt-16 max-sm:space-x-6">
          <div>
            <img
              className="w-[700px] h-[500px] object-cover max-sm:h-[350px]"
              src={img}
              alt="example"
            />
          </div>

          <div className="max-sm:w-[100%]">
            <h1 className="text-[30px] font-montserrat font-semibold max-sm:text-[15px]">
              Botanico Brewing Co.
            </h1>

            <p className="text-[20px] my-8 font-light max-sm:text-[10px] max-sm:my-2">
              {t("homeone")}
            </p>

            <p className="text-[20px] font-light max-sm:text-[10px]">
              {t("hometwo")}
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