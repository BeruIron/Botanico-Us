
import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import img1 from "../../image/beer (34).jpg";

function Service() {
  return (
    <div>
      <Header />
      <div>
        <div className="flex bg-gray-100  justify-center gap-4 p-8">
          <img
            src={img1}
            alt="Service 1"
            className="h-[330px] w-[250px] max-sm:w-[100px] max-sm:h-[150px] object-cover"
          />
          <img
            src={img1}
            alt="Service 2"
            className="h-[330px] w-[250px] max-sm:w-[100px] max-sm:h-[150px] object-cover "
          />
          <img
            src={img1}
            alt="Service 3"
            className="h-[330px] w-[250px]  max-sm:w-[100px] max-sm:h-[150px] object-cover "
          />
        </div>

        <div className="text-center mt-[40px]">
          <h2 className="text-3xl font-bold max-sm:text-[20px]">
            BOTANICO SERVICES
          </h2>
          <div className="flex justify-center flex-wrap gap-10 mt-[40px] max-sm:gap-5">
            <div className="h-[400px] bg-gray-100 max-sm:h-[250px]">
              <img
                src={img1}
                alt="Restaurant/Bar"
                className="h-[300px] w-[300px] object-cover max-sm:h-[200px] max-sm:w-[250px]"
              />
              <p className="mt-10 max-sm:mt-[17px] font-bold text-[20px] max-sm:text-[15px] text-center">
                Restaurant/Bar
              </p>
            </div>

            <div className="h-[400px] bg-gray-100 max-sm:h-[250px]">
              <img
                src={img1}
                alt="Event"
                className="h-[300px] w-[300px] object-cover max-sm:h-[200px] max-sm:w-[250px]"
              />
              <p className="mt-10 max-sm:mt-[17px] font-bold text-[20px] max-sm:text-[15px] text-center">
                Event
              </p>
            </div>

            <div className="h-[400px] bg-gray-100 max-sm:h-[250px]">
              <img
                src={img1}
                alt="Tours/Tastings"
                className="h-[300px] w-[300px] object-cover max-sm:h-[200px] max-sm:w-[250px]"
              />
              <p className="mt-10 max-sm:mt-[17px] font-bold text-[20px] max-sm:text-[15px] text-center">
                Tours/Tastings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}

export default Service;
