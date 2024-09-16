
import React from "react";
import Header from "../../Components/Header";
import img from "../../image/botanico.jpg";

const BlogPost = ({ image, title, date, description }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-[300px] object-cover rounded-lg" />
      <div className="mt-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 text-gray-600">
          <strong>Botanico</strong> {date}
        </p>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

const SidePost = ({ image, title }) => {
  return (
    <div className="bg-white mb-4 p-2.5 rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-[100px] object-cover rounded-md" />
      <h3 className="mt-2 text-lg font-normal">{title}</h3>
    </div>
  );
};

const Blog = () => {
  const posts = [
    {
      image: "https://i.pinimg.com/736x/a6/94/4e/a6944e49c09650131d2a2037433bad8e.jpg",
      title: "Botanico Craft Beer Garden",
    },
    {
      image: "https://i.pinimg.com/736x/a6/94/4e/a6944e49c09650131d2a2037433bad8e.jpg",
      title: "Another Blog Post",
    },
    {
      image: "https://i.pinimg.com/736x/a6/94/4e/a6944e49c09650131d2a2037433bad8e.jpg",
      title: "Interesting Event Recap",
    },
    // Add more posts here...
  ];

  return (
    <div>
      <Header />
      <div>
        <div className="flex justify-between items-center">
          <h1 className="ml-[50px] -mb-[10px] text-[30px] font-bold">BLOG</h1>
          <img className="w-[80px] mr-[50px]" src={img} alt="logo" />
        </div>
      </div>
      <div className="flex gap-5 p-5 bg-gray-100">
        {/* Main Post */}
        <div className="flex-2">
          <BlogPost
            image="https://i.pinimg.com/736x/a6/94/4e/a6944e49c09650131d2a2037433bad8e.jpg"
            title="Botanico Craft Beer Garden"
            date="Tue, Aug 27, 2024"
            description="Our craft beer garden is open every day and provides excellent service. We also offer discounts every Saturday and Sunday."
          />
        </div>

        {/* Scrollable Side Section */}
        <div className="flex-1 bg-gray-100">
          <h2 className="text-2xl mb-2">ALL POSTS</h2>
          <div className="max-h-[400px] overflow-y-auto pr-2.5">
            {posts.map((post, index) => (
              <SidePost
                key={index}
                image={post.image}
                title={post.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;



   