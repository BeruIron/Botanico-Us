import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Bg from "../../Components/Bg";
import Button from "../../Components/Button";
import Title from "../../Components/Tittle";
import img from "../../image/DSC01542.jpg"


function Home() {
  return (
    <div className="relative ">
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

          <div className="max-sm:w-[150%]">
            <h1 className="text-[30px] font-abc font-bold max-sm:text-[15px]">
              Botanico Brewing Co.
            </h1>

            <p className="text-[20px]  my-8  font-abc max-sm:text-[10px] max-sm:my-0 max-sm:tet">
              In 2013, a few like-minded imbibers from the West joined <br />  
              our brew-master in a common goal: to find a craft beer,<br /> 
              microbrewery, or libation in Phnom Penh that was <br /> 
              reminiscent of home.
            </p>

            <p className="text-[20px]  font-abc max-sm:text-[10px]">
              You, too, may have experienced a similar day with limited <br /> 
              results. It was because of this that we took matters into our{" "}<br /> 
              <br/>
              own hands and began crafting full-bodied beers with <br /> 
              iconic aromatics and a pleasing finish.
            </p>

            <div className="flex justify-center mt-[30px] max-sm:mt-2">
              <Button name="Learn More" color="Button-black" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
