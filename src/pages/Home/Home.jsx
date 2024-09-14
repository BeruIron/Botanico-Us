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
    </div>     
      <Title
     titleText="BOTANICO"/>


      <div className=" w-[70%] h-[700px] mx-auto max-sm:w-[80%]">
        <div className="flex justify-between  mt-16 max-sm:space-x-6">
  
          <div>

            <img
              className=" w-[600px] h-[500px] object-cover max-sm:h-[350px] "
              src="https://lh3.googleusercontent.com/pw/AP1GczMKbawwEISRFEdhIkfqhlIUi_RMZ6h2Ol0ts5K88GhQsyae9JYGafUWOooPOfeVBcjuaXkEwejeiH9h5JWZE2wavZP6vUSE7tO8JTBVEXokJLG__1_zwvxmuQMXBjKvTBLldo4xAFyNTrKuzTUiRpji=w1452-h968-s-no?authuser=0"
              alt="example"
            />
          </div>

          


        
          <div className="max-sm:w-[100%]">
            <h1 className="text-[30px]  font-montserrat font-semibold max-sm:text-[15px]">

              Botanico Brewing Co.
            </h1> 

            
            <p className="text-[20px]  my-8 font-light max-sm:text-[10px] max-sm:my-2">
              In 2013, a few like-minded imbibers from the West joined <br />
              our brew-master in a common goal: to find a craft beer, <br />
              microbrewery, or libation in Phnom Penh that was <br />
              reminiscent of home.
            </p>

        
            <p className="text-[20px]  font-light max-sm:text-[10px]">
              You, too, may have experienced a similar day with limited <br />
              results. It was because of this that we took matters into our{" "}
              <br />
              own hands and began crafting full-bodied beers with <br />
              iconic aromatics and a pleasing finish.
            </p>

        
            <div className="flex justify-center mt-[30px]">
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
