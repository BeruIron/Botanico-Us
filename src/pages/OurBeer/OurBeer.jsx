import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Sa from "../../Components/SlideAutomatic";
import Footer from "../../Components/Footer";
import B from "../../image/Botanico_BBox_logo-01.png";
import { useTranslation } from 'react-i18next';

function OurBeer() {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleCardClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
        <div className="bg-black">
        <Navbar />
      </div>

      <Sa />

      <div className="min-w-full min-h-full">
        <div className="flex justify-center items-center w-full text-center mt-[95px] max-sm:h-[5px]">
          <img

            className="w-[4%] absolute right-0 mb-[90px] mr-7 max-sm:mb-[100px]"

            src={B}
            alt="Botanico Logo"
          />
          <h1 className="text-[#124734] font-bold font-montserrat text-4xl max-sm:text-[20px] mb-[107px] max-sm:mt-3">
            {t("corebeer")}
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-8  container mx-auto px-4 mt-[-0.5%] max-sm:grid-cols-1 max-sm:gap-1 max-sm:h-[2055px]">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex justify-center "
              onClick={() => handleCardClick(product.id)}
            >
              <div className=" shadow-xl hover:shadow-lg transition w-[630px] h-[750px]  max-sm:h-[80%] mb-[90px] max-sm:w-full">
                <div className="flex justify-between items-center gap-1 h-[70%]">
                  <div className="w-full h-full bg-slate-400">
                    <img
                      src={product.image1}
                      alt={`${product.title1} Image 1`}
                      className="w-fu h-full object-cover"
                    />
                  </div>

                  <div className="w-full h-full bg-slate-300">
                    <img
                      src={product.image2}
                      alt={`${product.title1} Image 2`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-4 text-center flex justify-center items-center flex-col  h-[225px] max-sm:h-[50px] max-sm:mt-[28px]">
                  <h2 className="font-bold text-3xl max-sm:text-[20px] max-sm:mt-[20px]  max-sm:h-[25px]">
                    {product.title1}
                  </h2>
                  <h2
                    className=" font-bold text-3xl max-sm:text-[20px]"
                    style={{ color: product.color }}
                  >
                    {product.title2}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <hr className="w-[759px] h-0.5 mx-auto mt-[10px] border-black border-2 my-1 max-sm:w-[250px] max-sm:border" />
          <div className="text-center">
            <h1 className="text-[#124734] mt-[80px] max-sm:mt-[40px] font-bold font-montserrat text-4xl max-sm:text-[20px] ">
            {t("otherbeer")}
            </h1>
          </div>
          <div className=" font-montserrat font-regular mx-auto container flex  mt-[40px] text-[10px] max-sm:mt-[5px] max-sm:h-[150px] h-[300px]">
            <div className=" flex-1 flex justify-center items-center max-sm:ml-8">
              <div className="text-left space-y-2 text-[24px]  max-sm:text-[10px] ">
              {t("ourbeer1")} <br />
              {t("ourbeer2")} <br />
              {t("ourbeer3")} <br />
              {t("ourbeer4")} <br />
              {t("ourbeer5")} 

              </div>
            </div>
            <div className="flex-1 flex justify-center items-center ">
              <div className="text-left space-y-2 text-[24px]  max-sm:text-[10px]">
              {t("ourbeer6")} <br />
              {t("ourbeer7")} <br />
              {t("ourbeer8")} <br />
              {t("ourbeer9")} <br />
              {t("ourbeer10")} 
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default OurBeer;



// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationError = {};
    
//     // Form validation
//     if (!formData.firstName.trim()) {
//       validationError.firstName = "First name is required";
//     }
//     if (!formData.lastName.trim()) {
//       validationError.lastName = "Last name is required";
//     }
//     if (!formData.email.trim()) {
//       validationError.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       validationError.email = "Email is not valid";
//     }

//     // Set validation errors
//     setErrors(validationError);

//     // If there are no errors, proceed with form submission
//     if (Object.keys(validationError).length === 0) {
//       emailjs
//         .send(
//           "service_o02v2nn", // Replace with your actual service ID
//           "template_bdlk1up", // Replace with your actual template ID
//           formData, // The data to be sent
//           "qFiAyRLjUmVLx2ei5" // Replace with your actual public key
//         )
//         .then(
//           (response) => {
//             console.log("SUCCESS!", response.status, response.text);
//             // Reset the form after submission
//             setFormData({
//               firstName: "",
//               lastName: "",
//               email: "",
//               phone: "",
//               message: "",
//             });
//           },
//           (error) => {
//             console.log("FAILED...", error.text);
//           }
//         );
//     }
//   };

