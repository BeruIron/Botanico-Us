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
        if (currentProduct) {
          setProduct(currentProduct);
        } else {
          // Redirect to a different page if the product is not found
          navigate("/not-found");
        }
      })
      .catch((error) => {
        console.log(error);
        // Redirect to an error page or show a fallback UI
        navigate("/error");
      });
  }, [id, navigate]);

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
      <div className="flex justify-center items-center w-full text-center mt-[90px] max-sm:mt-[5%]">
          <img
            className="w-[4%] absolute right-0 mb-[90px] mr-7 max-sm:mt-[-50px]"
            src={B}
            alt="Botanico Logo"
          />
          <h1 className="text-[#124734] font-bold font-montserrat text-4xl max-sm:text-[20px] max-sm:mb-[15px]">
            Core Beers
          </h1>
        </div>
        {product && (
          <div className="container mx-auto py-20">
            {/* Product Details Section */}
            <div className="flex flex-col lg:flex-row max-sm:mt-[-80px]">
              <div className="flex-1 flex justify-center lg:justify-end items-center bg-black max-sm:w-[400px]">
                <img
                  src={product.image}
                  alt={product.title1}
                  className="w-full h-[547px] object-cover bg-slate-200  max-sm:h-[100%]"
                />
              </div>
              <div className="flex-1 space-y-4 flex flex-col justify-center ml-[3%]">
                <div className="text-left font-montserrat">
                  <h1 className="font-bold text-3xl text-black max-sm:text-[20px]">
                    {product.title1}
                  </h1>
                  <h1
                    className="font-bold text-3xl max-sm:text-[20px]"
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
            <div className="flex flex-row justify-center items-center gap-4 container mx-auto  mt-[50px] max-sm:flex-cols-1 max-sm:grid-cols-1 ">
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
                      <div className="p-4 text-center flex justify-center items-center flex-col h-[155px] max-sm:h-[100px]">
                        <h2 className="font-bold text-2xl">{product.title1}</h2>
                        <h2 className="font-bold text-2xl "
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
        )}

        <div>
          <hr className="w-[759px] h-0.5 mx-auto border-2 border-black mt-[10px] my-1 max-sm:w-[250px] border-1" />
          <div className="text-center">
            <h1 className="text-[#124734] mt-[80px] font-bold font-montserrat text-4xl max-sm:text-[20px]">
              Other Beers We Brewed
            </h1>
          </div>
          <div className=" font-montserrat font-regular mx-auto container flex  mt-[40px] text-[10px] max-sm:ml-[15px]">
            <div className=" flex-1 flex justify-center items-center">
              <div className="text-left space-y-2 text-[24px]  max-sm:text-[10px] ">
                <p>Cambodian Amber Ale / w palm sugar</p>
                <p>Reahoo Wheat Beer</p>
                <p>Princeps Imperial IPA</p>
                <p>French Kiss Biere de Garde</p>
                <p>Coffee Milk Stout</p>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="text-left space-y-2 text-[24px]  max-sm:text-[10px]">
                <p>Bassac Hoppy Lager</p>
                <p>Tropical Mango Ale</p>
                <p>Sundown Dark Lager</p>
                <p>Dark Star Porter</p>
                <p>Jasmine Gold Blonde Ale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
