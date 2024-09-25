import React from "react";
import Navbar from "../../Components/Navbar";
import QuestionComponent from "../../Components/Question";
import img1 from "../../image/servise.png";
import img2 from "../../image/beer (53).jpg";
import img3 from "../../image/beer (37).jpg";
import img from "../../image/beer (40).jpg";
import Button from "../../Components/Button";
import Footer from "../../Components/Footer";
import { useTranslation } from "react-i18next";

function TestingBeer() {
  const { t } = useTranslation();
  return (
    <div className="bg-slate-100 overflow-hidden">
      <div className="bg-black text-white ">
        <Navbar />
      </div>
      <div className="h-[550px] max-sm:h-[300px]">
        <QuestionComponent textquestion={t("tastbeer-t")} />
        <div className="flex justify-center overflow-hidden ">
          <img
            className="w-[250px] h-[330px] object-cover bg-orange-400 max-sm:w-[100px] max-sm:h-[150px] flex"
            src={img1}
            alt="Beer 1"
          />
          <img
            className="w-[250px] h-[330px] object-cover bg-amber-900 mx-[10px] max-sm:w-[100px] max-sm:h-[150px] flex"
            src={img2}
            alt="Beer 2"
          />
          <img
            className="w-[250px] h-[330px] object-cover bg-teal-900 max-sm:w-[100px] max-sm:h-[150px]   flex"
            src={img3}
            alt="Beer 3"
          />
        </div>
      </div>


      <div className="flex justify-center  ">
        <div className="h-[70vh] w-full max-w-[1200px] bg-white p-6 max-sm:w-full max-sm:h-[570px] ">
          <p className=" mb-4 font-abc text-[20px] text-center  max-sm:text-[10px]   ">
          {t("tastbeer-p")}
          </p>
          <div className="flex justify-between gap-6 mt-[5%] max-sm:flex-col  ">
            <div>
              <img
                className="w-[400px] h-[480px] object-cover max-sm:h-[300px] "
                src={img}
                alt=""
              />
            </div>
            <div className="text-[20px]  space-y-5 ">
              <p className=" leading-[50px] font-abc  max-sm:text-[10px] max-sm:leading-4  flex ">
                {t("tastbeer-p1")} <br />
                {t("tastbeer-p2")} <br />
                {t("tastbeer-p3")} <br />
                {t("tastbeer-p4")} <br />
                {t("tastbeer-p5")} <br />
                {t("tastbeer-p6")}
              </p>
              <p className="space-y-5 leading-[50px] max-sm:text-[10px] max-sm:leading-4 flex">
              {t("tastbeer-p7")} <br />
              {t("tastbeer-p8")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100px] flex justify-center items-center max-sm:h-[60px]">
        <Button color="Button-black" name={t("event-contact")} />
      </div>
      <Footer />
    </div>
  );
}

export default TestingBeer;
