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
          <div className="w-[243px] h-[328px]">
            <img
              src="https://del.h-cdn.co/assets/cm/15/11/3200x3200/54f65d39ab05d_-_183341797.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[243px] h-[328px] mx-[20px]">
            <img
              src="https://del.h-cdn.co/assets/cm/15/11/3200x3200/54f65d39ab05d_-_183341797.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[243px] h-[328px] ">
            <img
              src="https://del.h-cdn.co/assets/cm/15/11/3200x3200/54f65d39ab05d_-_183341797.jpg"
              alt=""
              className="w-full h-full object-cover"
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXYpxhwvLM3Uz8LvQRnj7NCTPsTZhREFetQ&s" alt=""
                className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex">
              <div className="w-[50%] h-[384px] ">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXYpxhwvLM3Uz8LvQRnj7NCTPsTZhREFetQ&s" alt=""
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
