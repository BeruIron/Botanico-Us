// import { useState } from "react";
// import Navbar from "../../Components/Navbar";
// import Button from "../../Components/Button";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Footer from "../../Components/Footer";
// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [result, setResult] = useState("");

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "", 
//     }));
//   };
//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.firstName) newErrors.firstName = "First name is required.";
//     if (!formData.lastName) newErrors.lastName = "Last name is required.";

//     if (!formData.email) {
//       newErrors.email = "Email is required.";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid.";
//     }
//     if (!formData.phone) {
//       newErrors.phone = "Phone number is required.";
//     } else if (!/^[0-9+]{7,10}$/.test(formData.phone)) {
//       newErrors.phone = "Phone number is invalid. It should be 7 to 10 digits.";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!validateForm()) return;
//     setResult("Sending....");
//     const form = event.target;
//     const formData = new FormData(form);
//     formData.append("access_key", "0761e4c9-60ac-4f1e-b89e-e3bdf13f3a31");
//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData,
//       });
//       const data = await response.json();
//       if (formData) {
//         toast.success("You have successfully Send a Message.");
//       } else {
//         toast.error("fail to send message");
//       }
//       if (data.success) {
//         form.reset();
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           message: "",
//         });
//       } else {
//         console.log("Error", data);
//         alert(data.message || "Submission failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error", error);
//     }
//   };
//   return (
//     <>
//      <div className="bg-black text-white">
//         <Navbar />
//       </div>
     
//       <div className="w-[50%] mx-auto my-10 p-6 rounded-lg max-sm:w-[90%]">
//         <h1 className="text-3xl font-bold text-blue-600 text-center mt-[20px]">CONTACT US</h1>

//         <form onSubmit={handleSubmit} className="space-y-8 mt-[50px] text-xl font-montserrat">
//           <div>
//             <label className="block text-gray-700 font-bold text-[18px] max-sm:text-[15px]">First name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               placeholder="Enter your first name"
//               className={`w-full px-4 py-3 border  ${errors.firstName ? 'border-red-500' : 'border-gray-300'} placeholder:text-[18px] placeholder:max-sm:text-[15px] max-sm:h-[50px]`}
//             />
//             {errors.firstName && <p className="text-red-500 text-[17px]">{errors.firstName}</p>}
//           </div>
//           <div>
//             <label className="block text-gray-700 font-bold text-[18px] max-sm:text-[15px]">Last name</label>

//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               placeholder="Enter your last name"
//               className={`w-full px-4 py-3 border  ${errors.lastName ? 'border-red-500' : 'border-gray-300'} placeholder:text-[18px] placeholder:max-sm:text-[15px] max-sm:h-[50px]`}
//             />
//             {errors.lastName && <p className="text-red-500 text-[17px]">{errors.lastName}</p>}
//           </div>
//           <div>
//             <label className="block text-gray-700 font-bold text-[18px] max-sm:text-[15px]">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               className={`w-full px-4 py-3 border  ${errors.email ? 'border-red-500' : 'border-gray-300'} placeholder:text-[18px] placeholder:max-sm:text-[15px] max-sm:h-[50px]`}
//             />
//             {errors.email && <p className="text-red-500 text-[17px]">{errors.email}</p>}
//           </div>
//           <div>
//             <label className="block text-gray-700 font-bold text-[18px] max-sm:text-[15px]">Phone number</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Enter your phone number"
//               className={`w-full px-4 py-3 border  ${errors.phone ? 'border-red-500' : 'border-gray-300'} placeholder:text-[18px] placeholder:max-sm:text-[15px] max-sm:h-[50px]`}
//             />
//             {errors.phone && <p className="text-red-500 text-[17px]">{errors.phone}</p>}
//           </div>
//           <div>
//             <label className="block text-gray-700 font-bold text-[18px] max-sm:text-[15px]">Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Type your message here..."
//               className={`w-full px-4 py-3 border  ${errors.message ? 'border-red-500' : 'border-gray-300'} placeholder:text-[18px] placeholder:max-sm:text-[15px]`}
//               rows="5"
//             />
//             {errors.message && <p className="text-red-500 text-[17px]">{errors.message}</p>}
//           </div>
//           <div className="flex justify-center items-center mt-4 pb-8">
//             <Button type="submit" name="Submit" color="Button-black" className="max-sm:w-[25%] max-sm:h-[40px] max-sm:py-2" />
//           </div>
//           <div>
//             <ToastContainer position="top-right" autoClose={5000}/>
//           </div>
//         </form>
        
//          </div>

//         <Footer />
     
//     </>
//   );
// };

// export default ContactForm;

import { useState } from "react";
import Navbar from "../../Components/Navbar";
import Button from "../../Components/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../Components/Footer";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+]{7,10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid. It should be 7 to 10 digits.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    setResult("Sending....");
    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", "0761e4c9-60ac-4f1e-b89e-e3bdf13f3a31");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (formData) {
        toast.success("You have successfully Send a Message.");
      } else {
        toast.error("fail to send message");
      }
      if (data.success) {
        form.reset();
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        console.log("Error", data);
        alert(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <>
      <div className="bg-black text-white">
        <Navbar />
      </div>

      <div className="w-[50%] mx-auto my-10 p-6 rounded-lg max-sm:w-[90%]">
        <h1 className="text-3xl font-bold text-blue-600 text-center mt-[20px]">
          {t("contact")}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 mt-[50px] text-xl font-montserrat"
        >
          <div>
            <label className="block text-gray-700 font-bold text-[18px] max-sm:text-[15px]">
              {t("contact1")}
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder={t("contact2")}
              className={`w-full px-4 py-3 border  ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } placeholder:text-[18px] placeholder:max-sm:text-[15px] max-sm:h-[50px]`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-[17px]">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-bold text-[18px] max-sm:text-[15px]">
              {t("contact3")}
            </label>

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder={t("contact4")}
              className={`w-full px-4 py-3 border  ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } placeholder:text-[18px] placeholder:max-sm:text-[15px] max-sm:h-[50px]`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-[17px]">{errors.lastName}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-bold text-[18px] max-sm:text-[15px]">
              {t("contact5")}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contact6")}
              className={`w-full px-4 py-3 border  ${
                errors.email ? "border-red-500" : "border-gray-300"
              } placeholder:text-[18px] placeholder:max-sm:text-[15px] max-sm:h-[50px]`}
            />
            {errors.email && (
              <p className="text-red-500 text-[17px]">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-bold text-[18px] max-sm:text-[15px]">
              {t("contact7")}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("contact8")}
              className={`w-full px-4 py-3 border  ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } placeholder:text-[18px] placeholder:max-sm:text-[15px] max-sm:h-[50px]`}
            />
            {errors.phone && (
              <p className="text-red-500 text-[17px]">{errors.phone}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-bold text-[18px] max-sm:text-[15px]">
              {t("contact9")}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contact10")}
              className={`w-full px-4 py-3 border  ${
                errors.message ? "border-red-500" : "border-gray-300"
              } placeholder:text-[18px] placeholder:max-sm:text-[15px]`}
              rows="5"
            />
            {errors.message && (
              <p className="text-red-500 text-[17px]">{errors.message}</p>
            )}
          </div>
          <div className="flex justify-center items-center mt-4 pb-8">
            <Button
              type="submit"
              name={t("contact11")}
              color="Button-black"
              className="max-sm:w-[25%] max-sm:h-[40px] max-sm:py-2"
            />
          </div>
          <div>
            <ToastContainer position="top-right" autoClose={5000} />
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default ContactForm;