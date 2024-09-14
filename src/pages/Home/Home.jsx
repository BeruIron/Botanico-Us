import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Bg from "../../Components/Bg";
import Button from "../../Components/Button";
import Title from "../../Components/Tittle";

function Home() {
  return (
    <div className="relative">
      <div  className="bg-black text-white">
      <Navbar />
      </div>
       <div className="relative">
      <Bg />
      {/* <div className="absolute top-0 left-0 w-full">  </div> */}
    </div>
     <Title
     titleText="BOTANICO"/>

   
      <div className="relative z-10">
        <div className="flex items-center w-full">
          <div className="w-[45%] h-[700px]  p-8">
            <img
              className="w-[680px] h-[606px] ml-[100px]"
              src="https://lh3.googleusercontent.com/pw/AP1GczMKbawwEISRFEdhIkfqhlIUi_RMZ6h2Ol0ts5K88GhQsyae9JYGafUWOooPOfeVBcjuaXkEwejeiH9h5JWZE2wavZP6vUSE7tO8JTBVEXokJLG__1_zwvxmuQMXBjKvTBLldo4xAFyNTrKuzTUiRpji=w1452-h968-s-no?authuser=0"
              alt="example"
            />
          </div>
          
          <div className="w-[55%] h-[700px]  p-[25px]">
            <h1 className="text-[48px] font-montserrat font-semibold ml-[150px]">
              Botanico Brewing Co.
            </h1>
            <p className="text-3xl my-8 ml-[80px] font-light">
              In 2013, a few like-minded imbibers from the West joined <br /> our
              brew-master in a common goal: to find a craft beer, <br />
              microbrewery, or libation in Phnom Penh that was <br /> reminiscent
              of home.
            </p>
            <p className="text-3xl ml-[80px] font-light">
              You, too, may have experienced a similar day with limited <br />
              results. It was because of this that we took matters into our <br />
              own hands and began crafting full-bodied beers with <br />
              iconic aromatics and a pleasing finish.
            </p>
            <div  className="flex justify-center items-center mt-[50px]">
            <Button
            name="LearnMore"
            color="Button-black"/>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
