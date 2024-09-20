import { useState } from "react";
import Navbar from "../../Components/Navbar";
import Button from "../../Components/Button";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTelegramPlane,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import Footer from "../../Components/Footer";

const ContactForm = () => {
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
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.message) newErrors.message = "Message is required.";
    if (!formData.phone) newErrors.phone = "phone number is required.";

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
      <Navbar />

      <div className="w-[50%] mx-auto my-10 p-6 rounded-lg ">
        <div >
          <h1 className="text-3xl font-bold text-blue-900 text-center mt-[20px] font-montserrat max-sm:text-2xl ">
            CONTACT US
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 mt-[50px] text-xl font-montserrat  "
        >
          <div>
            <label className="block text-gray-700 font-bold ">First name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md max-sm:w-[300px] max-sm:mx-auto"
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Last name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-gray-700 font-bold">
              Phone number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
              rows="5"
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          <div className="flex justify-center items-center mt-4 pb-8">
            <Button type="submit" name="Submit" color="Button-black" />
          </div>
        </form>
        <div className="w-full">
          <div className="flex justify-between py-8">
            <div className="flex-1 flex justify-center">
              <div>
                <h2 className="text-2xl font-bold">Social media channels</h2>
                <hr className="w-[100px] border-black border-1 my-1" />
                <div className="mt-[40px]">
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="https://m.facebook.com/botanicobrewingco?mibextid=LQQJ4d"
                        className="flex items-center space-x-4 hover:text-gray-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF className="text-blue-600 text-3xl" />
                        <span className="text-lg">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/yourInstagramLink"
                        className="flex items-center space-x-4 hover:text-gray-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram className="text-pink-500 text-3xl" />
                        <span className="text-lg">Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tiktok.com/@yourTiktokUsername"
                        className="flex items-center space-x-4 hover:text-gray-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTiktok className="text-black text-3xl" />
                        <span className="text-lg">TikTok</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="flex-1 flex justify-center items-center">
              <div>
                <h2 className="text-2xl font-bold">Contact</h2>
                <hr className="w-[50px] border-black border-1 my-1" />
                <div className="mt-[40px]">
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-4 hover:text-gray-400">
                      <a
                        href="mailto:chanleakhena.soy@institute.pse.ngo"
                        className="flex items-center space-x-4 hover:text-gray-400"
                      >
                        <FaEnvelope className="text-gray-600 text-3xl" />
                        <span className="text-lg">Email</span>
                      </a>
                    </li>
                    <li className="flex items-center space-x-4 hover:text-gray-400">
                      <a
                        href="https://t.me/yourTelegramUsername"
                        className="flex items-center space-x-4 hover:text-gray-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTelegramPlane className="text-blue-500 text-3xl" />
                        <span className="text-lg">Telegram</span>
                      </a>
                    </li>
                    <li className="flex items-center space-x-4 hover:text-gray-400">
                      <a
                        href="tel:+88570513499"
                        className="flex items-center space-x-4 hover:text-gray-400"
                      >
                        <FaPhone className="text-blue-600 text-3xl" />
                        <span className="text-lg">+885 70513499</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactForm;