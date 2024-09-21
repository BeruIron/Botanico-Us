import React from "react";
import Navbar from "../../Components/Navbar";
import Sa from "../../Components/SlideAutomatic";
import Button from "../../Components/Button";
import Footer from "../../Components/Footer";
import Title from "../../Components/Tittle";

function Story() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
      </div>

      <Sa />

      <Title titleText="WE ARE BOTANICO"></Title>
      <div className=" w-[70%] max-sm:w-[90%] mx-auto">
        <p className="text-[20px]  font-abc leading-10 h-[130px] max-sm:leading-7 items-center max-sm:text-[10px] max-sm:h-[150px] flex">
          beer and breweries feel inclusive, not intimidating. In a world full
          of craft beer options, we want to bring our Khmer community together
          by fostering genuine connections through our shared passion for
          crafting amazing beers and creating unforgettable experiences.
        </p>
      </div>

      <Title titleText="Our Story"></Title>
      <div className="w-[70%] max-sm:w-[90%] mx-auto">
        <div className="flex max-sm:flex-col flex-row mt-[50px]  mx-auto max-sm:space-x-0 space-x-10">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9fe6e40d-eed9-4621-8dd9-341ebdb9e66a/de8xn0z-c6f24994-712d-4295-bf6e-0f49afe31f7f.png/v1/fill/w_1280,h_1353,q_80,strp/bleach_aduniis_x_jiraiya_art_by_jiraiyaart_de8xn0z-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM1MyIsInBhdGgiOiJcL2ZcLzlmZTZlNDBkLWVlZDktNDYyMS04ZGQ5LTM0MWViZGI5ZTY2YVwvZGU4eG4wei1jNmYyNDk5NC03MTJkLTQyOTUtYmY2ZS0wZjQ5YWZlMzFmN2YucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Q47e6254V6SFFC4eZdz0qrrZjhf91o6O822fJRz2MM8"
            alt="Brewery"
            className="w-[500px] h-[400px] object-cover"
          />

          <div>
            <p className="text-[20px]  font-abc leading-10 h-[170px] max-sm:leading-7 max-sm:text-[10px] max-sm:h-[170px] flex">
              In 2013, a few like-minded people from the West joined our brew
              master in a common goal: to find craft beer in Phnom Penh that was
              reminiscent of home. You, too, may have experienced a similar day
              with limited results. It was because of this that we took matters
              into our own hands and began crafting full-bodied beers with
              iconic aromatics and a pleasing finish.
            </p>
            <p className="text-[20px] font-abc leading-10 max-sm:leading-7 max-sm:h-[150px] max-sm:text-[10px] h-[100px]">
              Fast forward more than 10 years, and the craft brewery is well
              established beyond the borders of Phnom Penh. Botanico Brewing
              Company (formerly known as Cerevisia Craft Brewery) has given
              craft beer a Cambodian identity.
            </p>
          </div>
        </div>
        <div>
           <p className="text-[20px] leading-10 max-sm:leading-7 font-abc max-sm:text-[10px] items-center flex h-[200px]">
          We are on a mission to share our passion and knowledge with the
          community, using locally grown ingredients as much as possible and
          giving a platform to young creatives. Botanico Brewing Co. stands for
          Quality, Consistency, Inclusiveness, and Innovation. “We want to turn
          the Cambodian beer market upside down and change the people’s behavior
          of drinking to a more sophisticated and responsible way,” says Marco
          Günther, the CEO and brew master of Botanico Brewing Co.
        </p>
        <p className="font-abc font-extrabold  text-[30px] max-sm:mt-[50px] max-sm:text-[20px]"> The Real Cambodian Craft Beer</p>

        </div>


       
        <div className=" mt-[50px] ">
          <img
            src="https://www.si.com/.image/t_share/MTk0OTgwOTMzNzgxMTY5ODkw/usatsi_19691020.jpg"
            alt="Brewery"
            className=" w-full h-[700px] max-sm:h-[400px] object-cover"
          />
        </div>

        <div className="flex justify-center items-center h-[150px] max-sm:h-[50px]">
          <Button name="LearnMore" color="Button-black" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Story;

