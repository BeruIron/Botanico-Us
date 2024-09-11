import React from "react";
import Navbar from "../../Components/Navbar";
import QuestionComponent from "../../Components/Question";
import img2 from "../../image/beer (31).jpg";
import img3 from "../../image/beer (35).jpg";
import img4 from "../../image/beer (34).jpg";
import img from "../../image/beer (40).jpg";
import Button from "../../Components/Button";
import Footer from "../../Components/Footer";

function TestingBeer() {
  return (
    <div className="bg-slate-100">
      <div className="bg-black text-white">
        <Navbar />
      </div>
      <div className="h-[550px]">
        <QuestionComponent textquestion="Brewery tours/ tastings at Botanico" />
        <div className="flex justify-center">
          <img
            className="w-[250px] h-[330px] object-cover bg-orange-400"
            src={img2}
            alt="Beer 1"
          />
          <img
            className="w-[250px] h-[330px] object-cover bg-amber-900 mx-[10px]"
            src={img3}
            alt="Beer 2"
          />
          <img
            className="w-[250px] h-[330px] object-cover bg-teal-900"
            src={img4}
            alt="Beer 3"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="h-[70vh] w-full max-w-[1200px] bg-white p-6">
          <p className="mb-4 text-[20px] text-center">
            Have you ever asked yourself how beer is actually made? What it
            looks like inside of a brewery?
          </p>
          <div className="flex justify-between gap-6 mt-[5%]">
            <div>
              <img className="w-[400px] h-[480px] object-cover" src={img} alt="" />
            </div>
            <div className="text-[20px] mt-[8%] font-light space-y-5">
              <p className="space-y-5 leading-10 flex">
                It’s a fascinating process based on natural science! Gather your{" "}
                <br />
                friends or bring your company’s department and book a brewery{" "}
                <br />
                tour with tasting at Botanico Brewing Company. Our experienced,{" "}
                <br />
                certified German brewmaster Marco will show you the place where{" "}
                <br />
                the magic happens and explain it to you. He will be able to{" "}
                <br />
                answer all your questions. For groups of up to 8 people.
              </p>
              <p className="space-y-5 leading-10 flex">
                Alternatively, you can also book a food and beer pairing at{" "}
                <br />
                Botanico Craft Beer Garden for small groups of up to 10 people.
              </p>
</div>
          </div>
                    </div>
      </div>
      <div className="h-[150px] flex justify-center items-center">
        <Button color="Button-black" name="Contact Us" />
      </div>
      <Footer />
    </div>
  );
}

export default TestingBeer;
