import BackgroundSection from "../../Components/Background-img";
import Navbar from "../../Components/Navbar";
import B from "../../image/Botanico_BBox_logo-01.png";
import pic1 from "../../image/Centurion (1).jpg";
import pic2 from "../../image/Splash Juicy IPA.jpg";
import pic3 from "../../image/Khmer Honey Blonde (1).jpg";
import pic4 from "../../image/Chamtik.jpg";
import ProductCard from "../../Components/ProductCard";
import logo2 from "../../image/logo2.png";
import logo3 from "../../image/logo3.png";
import logo4 from "../../image/logo4.png";
import beer2 from "../../image/beer2.png";
import beer3 from "../../image/beer3.png";
import beer4 from "../../image/beer4.png";
import Footer from "../../Components/Footer";
import { useParams } from "react-router-dom";
import "../../index.css";
import { useNavigate } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/detail/${id}`);
  };


  const productDetails = [
    {
      id: "1",
      title1: "CENTURION",
      title2: "AMERICAN PALE ALE",
      abv: "5.6%",
      ibu: "38",
      description:
        "This beer is all about balance! Moderate alcohol level, moderate bitterness, moderate flavor. Citrus tones will hit the nose, the malty sweetness harmonizes in a lovely way with the bitterness and the body is neither too thick nor too thin. Cheers!",
      image: pic1,
    },
    {
      id: "2",
      title1: "SPLASH",
      title2: "JUICY IPA",
      abv: "6.4%",
      ibu: "22",
      description:
        "A Splash of flavor is what happens when you take a sniff of this brew! Full-bodied, low bitterness and a strong haziness. But what makes the Splash so special is definitely the strong flavor. Pineapple, lychee, guava and mango are predominant. Welcome to Cambodia!",
      image: pic2,
    },
    {
      id: "3",
      title1: "KHMER HONEY",
      title2: "BLONDE ALE",
      abv: "4.6%",
      ibu: "18",
      description:
        "Real Cambodian honey from the province Kampong Cham is used in the secondary fermentation. The sugars of the honey are fully fermented, what’s left is the flavor. But nothing overpowering. The honey is nicely balanced with the light character of this blonde ale, making it very easy to drink, with a nice little sweetness.",
      image: pic3,
    },
    {
      id: "4",
      title1: "CHAMTIK",
      title2: "HELLES LAGER",
      abv: "5.0%",
      ibu: "15",
      description:
        "“Chamtik” means something like “Wait a moment”. And that’s exactly what you should be doing, when ordering this beer. Relax and enjoy, don’t let anything stress you! This beer comes with a decent malt character, a touch of sweetness and a super refreshing finish. Made for the Cambodian climate, easy-to-drink with a crisp body!",
      image: pic4,
    },
  ];

  // Find the selected product by ID
  const product = productDetails.find((product) => product.id === id);
  const colorClass = `color-${id}`; // Dynamic color class based on ID

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
        <div className="flex justify-center items-center w-full text-center h-[200px]">
          <img
            className="w-[5%] absolute right-0 mb-14 mr-5"
            src={B}
            alt="Logo"
          />
          <h1 className="text-[#124734] font-bold font-montserrat text-4xl">
            Core Beers
          </h1>
        </div>

        <div className="container mx-auto py-8">
          
          <div className="flex">
            <div className="flex-1 flex justify-center items-center bg-black ">
              <img
                src={product.image}  alt={product.title1} className="w-full h-[547px] object-cover"
              />
            </div>
            <div className="flex-1 space-y-4 flex flex-col justify-center ml-[3%]">
              <div className={`text-left font-montserrat ${colorClass}`}>
                <h1 className="font-bold text-3xl text-black">
                  {product.title1}
                </h1>
                <h1 className={`font-bold text-3xl ${colorClass}`}>
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
        </div>
        <div className="flex flex-row justify-center items-center gap-2 px-[5%]"
        >
          <div className="bg-black"
          onClick={() => handleCardClick(2)}
          >
          <ProductCard
            id="2"
            className="w-[30%] h-[600px]"
            title1="SPLASH"
            title2="JUICY IPA"
            image1={logo2}
            image2={beer2}
            titlestyle="font-bold text-3xl text-[#1FABAB]"
            
            
            
          />
          </div>
          <ProductCard
            id="3"
            className="w-[30%] h-[600px]"
            title1="KHMER HONEY"
            title2="BLONDE ALE"
            image1={logo3}
            image2={beer3}
            titlestyle="font-bold text-3xl text-[#ED9454]"
          />
          <ProductCard
            id="4"
            className="w-[30%] h-[600px]"
            title1="CHAMTIK"
            title2="HELLES LAGER"
            image1={logo4}
            image2={beer4}
            titlestyle="font-bold text-3xl text-[#3B6DC8]"
          />
        </div>

        <div>
          <hr className="w-[759px] h-0.5 mx-auto bg-black border-0 my-10" />
          <div className="text-center">
            <h1 className="text-[#124734] mt-3 font-bold font-montserrat text-4xl">
              Other Beers We Brewed
            </h1>
          </div>
          <div className="font-montserrat font-regular mx-auto container flex max-sm:flex-col mt-[50px]">
            <div className="flex-1 flex justify-center items-center">
              <div className="text-left space-y-2 text-[24px]">
                <p>Cambodian Amber Ale / w palm sugar</p>
                <p>Reahoo Wheat Beer</p>
                <p>Princeps Imperial IPA</p>
                <p>French Kiss Biere de Garde</p>
                <p>Coffee Milk Stout</p>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="text-left space-y-2 text-[24px] max-sm:mr-[120px]">
                <p>Bassac Hoppy Lager</p>
                <p>Tropical Mango Ale</p>
                <p>Sundown Dark Lager</p>
                <p>Dark Star Porter</p>
                <p>Jasmine Gold Blonde Ale</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Detail;
