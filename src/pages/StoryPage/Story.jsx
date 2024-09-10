import React from "react";
import Navbar from "../../Components/Navbar";
import Sa from "../../Components/SlideAutomatic";
import Button from "../../Components/Button";
import SmallHeader from "../../Components/SmallHeader";
import Footer from "../../Components/Footer";
function Story() {
  return (
    <>
    <div className="bg-black">
            <Navbar />
      </div>
      
      <Sa />
      <SmallHeader headerText="WE ARE BOTANICO" />
      <div>
        <p className="px-20 py-5 text-2xl leading-9 font-light">
        Our Mission is all about breaking down those  barriers and making craft beer and breweries feel inclusive, not  intimidating. In world full of craft beer options. We want to bring our Khmer community together by fostering genuine connections through our shared passion for crafting amazing beers and creating unforgettable experiences.
        </p>
      </div>
      <SmallHeader headerText="Our Story" />

      <div className="flex px-20 py-10 gap-5 ">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9fe6e40d-eed9-4621-8dd9-341ebdb9e66a/de8xn0z-c6f24994-712d-4295-bf6e-0f49afe31f7f.png/v1/fill/w_1280,h_1353,q_80,strp/bleach_aduniis_x_jiraiya_art_by_jiraiyaart_de8xn0z-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM1MyIsInBhdGgiOiJcL2ZcLzlmZTZlNDBkLWVlZDktNDYyMS04ZGQ5LTM0MWViZGI5ZTY2YVwvZGU4eG4wei1jNmYyNDk5NC03MTJkLTQyOTUtYmY2ZS0wZjQ5YWZlMzFmN2YucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Q47e6254V6SFFC4eZdz0qrrZjhf91o6O822fJRz2MM8"
          alt="Brewery"
          className="w-[490px] d:w-1/2 h-[440px] mb-6 md:mb-0 md:mr-8"
        />
        
        <div>
          <p className="pt-10 md:text-left font-light text-2xl leading-9">
            In 2013, a few like minded people from the West joined our brew
            master in a common goal: to find craft beer in Phnom Penh that was
            reminiscent of home. You, too may have experienced a similar day
            with limited results. It was because of this that we took matters
            into our own hands and began crafting full-bodied beers with iconic
            aromatics and a pleasing finish.
          </p>
          <p className="pt-10 md:text-left font-light text-2xl leading-9">
            Fast forward more than 10 years and the craft brewery is well
            established beyond the borders of Phnom Penh. Botanico Brewing
            Company (formerly known as Cerevisia Craft Brewery) has given craft
            beer a Cambodian identity.
          </p>
        </div>
      </div>

      <div className="px-28 text-2xl leading-9 font-light">
        <p>
          We are on a mission to share our passion and knowledge with the
          community, using locally grown ingredients as much as possible and
          giving platform to young creatives.Botanico Brewing Co. stands for
          Quality, Consistency, Inclusiveness and Innovation.“We want to turn
          the Cambodian beer market upside down and change the people’s behavior
          of drinking to a more sophisticated and responsible way”, says Marco
          Günther, the CEO and brew master of Botanico Brewing Co.
        </p>
        <h1 className="pt-10 font-bold ">The Real Cambodian Craft Beer</h1>
      </div>

      <div className="px-28 py-10">
        <img
          src="https://www.si.com/.image/t_share/MTk0OTgwOTMzNzgxMTY5ODkw/usatsi_19691020.jpg"
          alt="Brewery"
          className="w-full d:w-1/2 h-[700px] mb-6 md:mb-0 md:mr-8"
        />
            </div>
      
      <div  className="flex justify-center items-center mt-[20px] pb-10">
            <Button
            name="LearnMore"
            color="Button-black"/>
          </div>
      <Footer></Footer>
            </>
    );
}

export default Story;

