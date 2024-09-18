// import React from "react";
// import Navbar from "../../Components/Navbar";
// import BackgroundSection from "../../Components/Background-img";
// import Footer from "../../Components/Footer";
// import img from "../../image/beer (34).jpg";

// function Servicepage() {
//   return (
//     <div>
//       <div className="relative">
//         <BackgroundSection
//           backgroundImage="https://lh3.googleusercontent.com/pw/AP1GczObCs2Ocqkf7SGQuEsyjdQXY_Jv2L_WIqt9wEDoIovnwUJnRpn51cwIN_LvNo4NCqEwpT5_47vLfyOHxFmfZqY7m3qQSp94s9zlmMjPTFUdcYDJkctWHceiNOeLpOoYNdRlhElcltm-laJTwzjDQ8Sy=w1449-h966-s-no-gm?authuser=0"
//           className="h-[500px] relative"
//         >
//           <Navbar />
//         </BackgroundSection>

//         <div className="w-[100%] h-[330px] flex justify-center absolute bottom-0 left-0 right-0 translate-y-[50%]">
//           <div>
//             <img
//               className="w-[280px] h-[350px]"
//               src={img}
//               alt=""
//             />
//           </div>

//           <div className=" mx-[10px]">
//             <img
//               className="w-[280px] h-[350px]"
//               src="https://i.pinimg.com/736x/a6/94/4e/a6944e49c09650131d2a2037433bad8e.jpg"
//               alt=""
//             />
//           </div>

//           <div>
//             <img
//               className="w-[280px] h-[350px]"
//               src="https://i.pinimg.com/564x/9c/7e/a2/9c7ea2faf9faa1204f5284bade8f3a44.jpg"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>

//       <div className="w-[100%] h-[720px] bg-white flex items-center justify-center">
//       <div className="w-full h-[100px] flex justify-center items-center mb-[60px]">
//   <h1 className="text-4xl">
//     BOTANICO SERVICES
//   </h1>
// </div>

//       </div>
//       <div className="w-[100%] h-[320px] bg-[#D9D9D9]">
//       </div>
// <div className="h-[500px]  bg-slate-100 items-center flex justify-center max-sm:h-[300px]">
//       <div className="flex justify-center overflow-hidden  space-x-5 text-center">
//         <div className="h-[400px] bg-white max-sm:h-[200px]">
//           <img
//             className="w-[250px] h-[330px] object-cover bg-orange-400 max-sm:w-[100px] max-sm:h-[150px] flex"
//             src={img}
//             alt="Beer 1"
//           />
//           <p className="mt-[20px] max-sm:mt-[10px]">hhhh</p>
//         </div>
//         <div className="h-[400px] bg-white max-sm:h-[200px]">
//           <img
//             className="w-[250px] h-[330px] object-cover bg-amber-900 max-sm:w-[100px] max-sm:h-[150px] flex"
//             src={img}
//             alt="Beer 2"
//           />
//           <p  className="mt-[20px] max-sm:mt-[10px]">kkkk</p>
//         </div>
//         <div className="h-[400px] bg-white max-sm:h-[200px]">
//           <img
//             className="w-[250px] h-[330px] object-cover bg-teal-900 max-sm:w-[100px] max-sm:h-[150px]   flex"
//             src={img}
//             alt="Beer 3"
//           />
//           <p  className="mt-[20px] max-sm:mt-[10px]">jhhh</p>
//         </div>
//       </div>
//       </div>

//       <Footer/>
//     </div>
//   );
// }

// export default Servicepage;

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
