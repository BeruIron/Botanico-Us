import React from "react";
import Navbar from "../../Components/Navbar";
import QuestionComponent from "../../Components/Question";
import img from "../../image/beer (51).jpg";
import img1 from "../../image/beer (43).jpg";
import img2 from "../../image/beer (31).jpg";
import img3 from "../../image/beer (35).jpg";
import img4 from "../../image/beer (34).jpg";
import Button from "../../Components/Button";
import Footer from "../../Components/Footer";

function Event() {
  return (
    <div className="bg-slate-100">
      <div className="bg-black text-white ">
        <Navbar />
      </div>
      <div className="h-[550px] max-sm:h-[300px]">
        <QuestionComponent textquestion=" Do you want to have Botanico beer at your event?" />
        <div className="flex justify-center overflow-hidden ">
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
<<<<<<< HEAD
=======

>>>>>>> origin
      <div className="h-[750px] bg-white max-sm:h-[650px]">
        <div className="flex justify-between h-[650px] items-center w-[80%] mx-auto  max-sm:items-center space-x-5 max-sm:flex-col">
          <div className="flex flex-col items-center max-sm:items-center max-sm:mt-5">
            <img
              className="w-[500px] h-[300px] object-cover max-sm:h-[150px] max-sm:w-[350px]"
<<<<<<< HEAD
=======

>>>>>>> origin
              src={img}
              alt="Main Beer"
            />
            <img
<<<<<<< HEAD
              className="h-[300px] object-cover ml-[50%] -mt-[10%] w-[500px] max-sm:h-[150px] max-sm:w-[350px] max-sm:ml-0 max-sm:mt-5"
=======

              className="h-[300px] object-cover ml-[50%] -mt-[10%] w-[500px] max-sm:h-[150px] max-sm:w-[350px] max-sm:ml-0 max-sm:mt-5"

>>>>>>> origin
              src={img1}
              alt="Beer Event"
            />
          </div>
<<<<<<< HEAD
=======

>>>>>>> origin
          <div className="justify-between flex space-x-10 max-sm:mb-[10%]">
            <div className="bg-red-600 h-[350px] px-[5px] max-sm:mt-5 max-sm:h-[200px] max-sm:px-[2px] "></div>

            <div className="text-gray-700 text-[20px] flex flex-col justify-center items-center space-y-10 max-sm:text-[10px] max-sm:space-y-3  ">
              <p className="leading-10  max-sm:leading-5">
                We have different mobile draft units that we regularly use to{" "}
                <br />
                cater private, as well as company events. You can rent our
                system with or <br />
                without a bartender and we take care of the installation
                andremoval <br />
                as well as the delivery of the beer.
              </p>
              <p className="leading-10 max-sm:leading-5">
                We also offer more unique, custom-made event add-ons, such as{" "}
                <br />
                craft beer tastings and food and beer pairings at your venue,
                moderated by <br />
                our German brew master Marco.
              </p>
            </div>
<<<<<<< HEAD
=======

>>>>>>> origin
          </div>
        </div>
      </div>

      <div className="h-[100px] flex justify-center items-center max-sm:h-[60px]">
        <Button color="Button-black" name="Contact Us" />
      </div>

      <Footer />
    </div>
  );
}

export default Event;
