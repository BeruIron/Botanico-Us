import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import BackgroundSection from "../../Components/Background-img";
import B from "../../image/Botanico_B_logo-01.png";

function Detail() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // State to store the current product
  const [products, setProducts] = useState([]); // State to store all products

  const navigate = useNavigate(); // Navigation hook

  useEffect(() => {
    // Fetch the products data
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        const currentProduct = data.find(
          (product) => product.id === parseInt(id, 10)
        ); // Include radix
        setProduct(currentProduct);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleCardClick = (productId) => {
    navigate(`/detail/${productId}`);
  };

  return (
    <>
      <BackgroundSection
        backgroundImage="https://lh3.googleusercontent.com/pw/AP1GczObCs2Ocqkf7SGQuEsyjdQXY_Jv2L_WIqt9wEDoIovnwUJnRpn51cwIN_LvNo4NCqEwpT5_47vLfyOHxFmfZqY7m3qQSp94s9zlmMjPTFUdcYDJkctWHceiNOeLpOoYNdRlhElcltm-laJTwzjDQ8Sy=w1449-h966-s-no-gm?authuser=0"
        className="relative h-screen max-sm:w-[100%]"
      >
        <Navbar />
        <div className="bg-black bg-opacity-40 p-4 text-center mt-[35%] w-[400px] mx-auto">
          <h1 className="text-white text-7xl font-dangrek font-bold">
            Our Beers
          </h1>
        </div>
      </BackgroundSection>

      <div className="min-w-full min-h-full">
        <div className="flex justify-center items-center w-full text-center h-[200px] relative">
          <img
            className="w-[5%] absolute right-0 mb-14 mr-5"
            src={B}
            alt="Logo"
          />
          <h1 className="text-[#124734] font-bold font-montserrat text-4xl">
            Core Beers
          </h1>
        </div>
        {product ? (
          <div className="container mx-auto py-8">
            {/* Product Details Section */}
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 flex justify-center lg:justify-end items-center bg-black">
                <img
                  src={product.image1}
                  alt={product.title1}
                  className="w-full h-[547px] object-cover bg-slate-200"
                />
              </div>
              <div className="flex-1 space-y-4 flex flex-col justify-center ml-[3%]">
                <div className="text-left font-montserrat">
                  <h1 className="font-bold text-3xl text-black">
                    {product.title1}
                  </h1>
                  <h1
                    className="font-bold text-3xl"
                    style={{ color: product.color }}
                  >
                    {product.title2}
                  </h1>
                </div>

                <div className="text-xl">
                  <h5>ABV: {product.abv}</h5>
                  <h5>IBU: {product.ibu}</h5>
                </div>

                <div className="text-[20px] w-[450px] text-left space-y-4 leading-[2] font-montserrat">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>

            {/* Cards Grid with Style */}
            <div className="flex flex-row justify-center items-center gap-4 container mx-auto  mt-[50px] max-sm:flex-cols-2 ">
              {products
                .filter((p) => p.id !== parseInt(id, 10)) // Exclude the current product
                .map((product) => (
                  <div
                    key={product.id}
                    className="flex justify-center p-4"
                    onClick={() => handleCardClick(product.id)}
                  >
                    {/* Card container with fixed size */}
                    <div className="p-4 shadow-md hover:shadow-lg transition w-[500px] h-[600px] bg-white">
                      {/* Image container */}
                      <div className="flex justify-between items-center gap-1 h-[70%]">
                        {/* Image 1 - Left */}
                        <div className="w-full h-full bg-slate-400">
                          <img
                            src={product.image1}
                            alt={`${product.title1} Image 1`}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Image 2 - Right */}
                        <div className="w-full h-full bg-slate-300">
                          <img
                            src={product.image2}
                            alt={`${product.title1} Image 2`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Titles */}
                      <div className="p-4 text-center flex justify-center items-center flex-col h-[155px]">
                        <h2 className="font-bold text-xl">{product.title1}</h2>
                        <h2
                          className="text-2xl"
                          style={{ color: product.color }}
                        >
                          {product.title2}
                        </h2>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="text-center mt-10">Product not found.</div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Detail;
