import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

function Restaurant() {
  return (
    <div>
      <div className="h-[120px] bg-black ">
        <Navbar />
      </div>

      <div className="h-[1870px] bg-[#D9D9D9]">
        <div className="h-[100px] flex justify-center items-center">
          <p className="text-4xl font-bold">Do you want to sell Botanico beer at your restaurant/bar?</p>
        </div>
        <div className="h-[100px]  flex justify-center items-center">
          <p className="text-center text-2xl normal">
            Are you interested in selling real Cambodian carft beer at your F&B
            business? <br />
            We provide draft beer as well as bottles. Contact us  <Link to="/Contact" className="text-red-600 text-xl normal">here.</Link>

          </p>
        </div>
        <div className="h-[500px] bg-[#D9D9D9] flex justify-center items-center">
          <div className="w-[270px] h-[328px]">
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczOcphOEgI2nnrAPdTl45rFu6mZsdLU__Rq545-Fo4QvgMI6-NuPtb4S2ZwIkU-0cPXf9p-HskgCZ97si6tPbx-6OZO8GhvvySpFH_VrmXLhOJzOb5Rt9h8S8Xibu9d5m5i-cydBsqnUtgVkIJOHk5NY=w925-h617-s-no?authuser=0"
              alt=""
              className="w-full h-full  object-cover shadow-lg shadow-black shadow-cyan-500/50"
            />
          </div>
          <div className="w-[270px] h-[328px] mx-[20px] ">
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczOV7ZpxW90AmIuMb-KTQlY8MDNP_jG6hiYSMmUsti02vRNOWZZ688sQ6wDPonuHN3s0VvPii8Pto6MsjSWGhYoiRUlhVZObgNk7WBicmUnllvjtYFkrhqbx9bgAkt0l5OTrCohRLj97H1J-4Ir4kL3Z=w925-h617-s-no?authuser=0"
              alt=""
              className="w-full h-full object-cover shadow-lg shadow-black shadow-cyan-500/50"
            />
          </div>
         <div className="w-[270px] h-[328px] mx-[20px] ">
         <img
              src="https://lh3.googleusercontent.com/pw/AP1GczMZlAcKlafcZlmjzn6TpriJ5aufQ_aW16Gcz0lUgOU6pSWN7Xy-QQSGEkpH8VBZ0qPDM3TEjb9C8VaWtidziABJX_9vAJTOPx6nSdBaH193F-HJwIa6FpVOF1JjrUz7zPSj3JUC8RlnchHKZf3ByyXz=w925-h617-s-no?authuser=0"
              alt=""
              className="w-full h-full  object-cover shadow-lg shadow-black shadow-cyan-500/50"
            />
          </div>
        </div>

        <div className="h-[1000px] bg-white flex justify-center items-center">
          <div className="w-[84%] h-[768px] ">
            <div className="flex">
              <div className="w-[50%] h-[384px]">
                <div className="flex justify-center h-[60px] items-center">
                  <p className="text-2xl font-normal ">Draft</p>
                  </div>
                  <div className="h-[280px] mx-[30px]"> 
              <p className="text-xl font-normal  leading-[55px]  whitespace-pre-wrap ">. Installation ,    maintenance   and   regular   cleaning  of  the  draft  machine.</p>
              <p className="text-xl font-normal leading-[55px]  whitespace-pre-wrap ">. Free   delivery  of  kegs .</p>
              <p className="text-xl font-normal  leading-[55px]   whitespace-pre-wrap">. On-sight  	training  for  bar  personal  and   service   staff  on  how  to  use  the  system 	and   about  the  product   itself .</p>
              <p className="text-xl font-normal  leading-[55px]  whitespace-pre-wrap">. Provision 	of glassware   and   coasters .</p>
              </div>
              </div>
              <div className="w-[50%] h-[384px] ">
                <img src="https://lh3.googleusercontent.com/pw/AP1GczNU0E-c7VIs7_MhrHBAvC7B_ABXUO7t34ikO-BYVGeAPk2y5LFbFaonicicisY-0lud4zuVq5h18UZpxoIFccUJAG5YpNInAbluZWYBa6wT3Sco_Hcp2chgcFxPSIPg3nkSWnbRxgSxL7wShb0S29ix=w925-h617-s-no?authuser=0" alt=""
                className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex">
              <div className="w-[50%] h-[384px] ">
              <img src="https://lh3.googleusercontent.com/pw/AP1GczP_n2wnB21cLeySaMFAVnYhfhFqGNUlxhV2wcHvhT2cCxzlLf2K5KD-BF6YTpELITN7HeW40bvvBdv0IWpo0SbX4WkcfBKjY2pebwgv4CF-W-z9virnRfSWMAH1MZ5bgV6PZCb2IXlFFJK4Q4G-s24d=w925-h617-s-no?authuser=0" alt=""
                className="w-full h-full object-cover" />
              </div>
              <div className="w-[50%] h-[384px] ">
              <div className="flex justify-center h-[60px] items-center">
                  <p className="text-2xl font-normal ">Draft</p>
                  </div>
                  <div className="h-[280px] mx-[30px]"> 
                <p className="text-xl font-normal  leading-loose  whitespace-pre-wrap ">. Better  	solution  for  smaller   business   (little  space)  and / or less   expected 	consumption</p>
                <p className="text-xl font-normal  leading-loose  whitespace-pre-wrap ">. Lower 	 MOQ (1 box  –  24   bottles ; mixed   cases  possible ) .</p>
                <p  className="text-xl font-normal  leading-loose whitespace-pre-wrap ">. Free 	delivery</p>
                <p className="text-xl font-normal  leading-loose  whitespace-pre-wrap ">. On-sight   	training   for bar  personal   and   service   staff  on  how  to  use  the  system 	 and   about  the  product   itself .</p>
                <p className="text-xl font-normal  leading-loose  whitespace-pre-wrap ">. Provision  	of   glassware  and  coasters . </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center h-[150px] ">
        <Button 
          name="Contact Us"
          color="Button-black"/>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Restaurant;
