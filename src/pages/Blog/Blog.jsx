
import React from "react";
import Sa from "../../Components/SlideAutomatic";
import img from "../../image/Botanico_BBox_logo-01.jpg";
import image from "../../image/beer (35).jpg";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import img1 from "../../image/servise.png";
import img2 from "../../image/beer (53).jpg";
import img3 from "../../image/beer (37).jpg";
import img4 from "../../image/beer (47).jpg";
import img5 from "../../image/restaurant.png";
import img6 from "../../image/beer (60).jpg";



const BlogPost = ({ image, title, date, description }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-[500px] max-sm:h-[300px] object-cover rounded-lg"
      />
      <div className="mt-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 text-gray-600">{date}</p>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

const SidePost = ({ image, title, date }) => {
  return (
    <div className="bg-white mb-4 p-2.5 rounded-lg shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-[150px] object-cover rounded-md"
      />
      <h2 className="mt-2 text-lg font-bold">{title}</h2>
      <p className="mt-2 text-gray-600 text-[12px]">{date}</p>
    </div>
  );
};

const Blog = () => {
  return (
    <div>

     <div className="bg-black">
        <Navbar />
      </div>

      <Sa />
    

      <div>
        <div className="flex justify-between items-center bg-white py-3 px-10">
          <h1 className="text-[30px] font-bold">BLOG</h1>
          <img className="w-[80px]" src={img} alt="logo" />
        </div>
      </div>


      <div className="flex flex-col lg:flex-row gap-6 p-5 lg:p-20 bg-gray-100 w-[90%] lg:w-[80%] mx-auto">

        <div className="w-full lg:w-2/3">
          <BlogPost
            image={img1}
            title="Botanico Craft Beer Garden"
            date="Tue, Aug 27, 2024"
            description="Our craft beer garden is open every day with excellent service. We also offer discounts every Saturday and Sunday."
          />
        </div>

        <div className="w-full lg:w-1/4">
          <h2 className="text-2xl mb-4 font-semibold">ALL POSTS</h2>
          <div className="max-h-[600px] overflow-y-auto space-y-4">
            <SidePost
              image={img2}
              title="Testing beer"
              date="Tue, Aug 27, 2024"
            />
            <SidePost
              image={img3}
              title="Side Post Title 2"
              date="Tue, Aug 27, 2024"
            />
            <SidePost
              image={img4}
              title="Side Post Title 3"
              date="Tue, Aug 27, 2024"
            />
            <SidePost
              image={img5}
              title="Side Post Title 4"
              date="Tue, Aug 27, 2024"
            />
            <SidePost
              image={img6}
              title="Side Post Title 5"
              date="Tue, Aug 27, 2024"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default Blog;

