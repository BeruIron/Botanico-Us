import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Button from "../../Components/Button";
import img4 from "../../image/beer (37).jpg";
import img2 from "../../image/beer (37).jpg";
import img3 from "../../image/beer (37).jpg";
import QuestionComponent from "../../Components/Question";

function Restaurant() {
  return (
    <div>
      <div className="bg-black text-white ">
        <Navbar />
      </div>
    
      <div className="bg-gray-100 h-[550px] max-sm:h-[300px]">
        <div className="h-[550px] max-sm:h-[300px]">
          <QuestionComponent textquestion="Do you want to sell Botanico beer at your restaurant/bar?" />
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

      <div className="space-y-10 max-sm:w-[80%] justify-center mx-auto">
        <div className=" bg-white flex justify-center space-x-10">
          <ul className="list-disc pl-5 text-[20px] font-normal leading-[50px] max-sm:text-[10px] max-sm:leading-6 mt-[50px]">
            <h2 className="font-bold"> Draft</h2>
            <li>
              Installation , maintenance and regular cleaning of the draft
              machine.
            </li>
            <li>Free delivery of kegs .</li>
            <li>
              On-sight training for bar personal and service staff on how to use
        <br />
              the system and about the product itself .
            </li>
            <li>. Provision of glassware and coasters .</li>
          </ul>

          <div className="mt-[50px]">
            <img 
              src="https://lh3.googleusercontent.com/pw/AP1GczNU0E-c7VIs7_MhrHBAvC7B_ABXUO7t34ikO-BYVGeAPk2y5LFbFaonicicisY-0lud4zuVq5h18UZpxoIFccUJAG5YpNInAbluZWYBa6wT3Sco_Hcp2chgcFxPSIPg3nkSWnbRxgSxL7wShb0S29ix=w925-h617-s-no?authuser=0"
              alt=""
              className="w-[600px] max-sm:h-[200px] object-cover"
            />
          </div>
        </div>

        <div className=" bg-white flex justify-center space-x-10">
          <div>
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczP_n2wnB21cLeySaMFAVnYhfhFqGNUlxhV2wcHvhT2cCxzlLf2K5KD-BF6YTpELITN7HeW40bvvBdv0IWpo0SbX4WkcfBKjY2pebwgv4CF-W-z9virnRfSWMAH1MZ5bgV6PZCb2IXlFFJK4Q4G-s24d=w925-h617-s-no?authuser=0"
              alt=""
              className="w-[600px] max-sm:h-[200px]  object-cover"
            />
          </div>

          <ul className="list-disc pl-5 text-[20px] font-normal leading-[50px] max-sm:text-[10px] max-sm:leading-6">
            <h2 className="text-[20px] font-bold  ">Bottle</h2>
            <li>
              Better solution for smaller businesses (little space) and/or less <br />
              
              expected consumption
            </li>
            <li>Lower MOQ (1 box – 24 bottles; mixed cases possible)</li>
            <li>Free delivery</li>
            <li>
              On-site training for bar personnel and service staff on how to use <br />
            
              the system and about the product itself
            </li>
            <li>Provision of glassware and coasters</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-100 mt-10 flex items-center justify-center h-[100px] ">
        <Button name="Contact Us" color="Button-black" />
      </div>

      <Footer />
    </div>
  );
}
export default Restaurant;
