import React, { useEffect, useState } from "react";
import axios from "axios";
import Sa from "../../Components/SlideAutomatic";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

// Define the Strapi backend base URL
const BASE_URL = "https://botanico-backend.onrender.com";

const BlogPost = ({ image, title, date, text }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-[500px] max-sm:h-[300px] object-cover rounded-lg"
        />
      )}
      <div className="mt-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 text-gray-600">{date}</p>
        <p className="mt-2">{text}</p>
      </div>
    </div>
  );
};

const SidePost = ({ image, title, date, text, onClick }) => {
  return (
    <div className="bg-white mb-4 p-2.5 rounded-lg shadow-md cursor-pointer" onClick={onClick}>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-[150px] object-cover rounded-md"
        />
      )}
      <h2 className="mt-2 text-lg font-bold">{title}</h2>
      <p className="mt-2 text-gray-600 text-[12px]">{date}</p>
      <p className="mt-2 text-lg">{text}</p>
    </div>
  );
};

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/blog?populate=*`);
        setPosts(response.data.data); // Store the fetched posts
        setSelectedPost(response.data.data[0]); // Set the first post as the default selected post
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>

      <Sa />

      <div>
        <div className="flex justify-between items-center bg-white py-3 px-10">
          <h1 className="text-[30px] font-bold">BLOG</h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 p-5 lg:p-20 bg-gray-100 w-[90%] lg:w-[80%] mx-auto">
        <div className="w-full lg:w-2/3">
          {selectedPost && (
            <BlogPost
              image={
                selectedPost.attributes.Images?.data?.attributes?.formats?.large?.url
                  ? selectedPost.attributes.Images.data.attributes.formats.large.url
                  : null
              }
              title={selectedPost.attributes.title}
              date={selectedPost.attributes.Date}
              text={selectedPost.attributes.text}
            />
          )}
        </div>

        <div className="w-full lg:w-1/4">
          <h2 className="text-2xl mb-4 font-semibold">ALL POSTS</h2>
          <div className="max-h-[600px] overflow-y-auto space-y-4">
            {posts.slice(1).map((post, index) => {
              const image =
                post.attributes.Images?.data?.attributes?.formats?.small?.url
                  ? post.attributes.Images.data.attributes.formats.small.url
                  : null;

              return (
                <SidePost
                  key={index}
                  image={image}
                  title={post.attributes.title}
                  date={post.attributes.Date}
                  // text={post.attributes.text}
                  onClick={() => setSelectedPost(post)} // Set the selected post when clicked
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;


