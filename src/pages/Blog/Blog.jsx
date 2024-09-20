import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://botanico-backend.onrender.com/api/blog?populate=*');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data); // Log the entire response data to inspect it
        setBlogs(data.data); // Assuming the array of blogs is in `data.data`
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.attributes.title}</h2>
            <p>{blog.attributes.text}</p>
            <p>{blog.attributes.content}</p>
            <p>{blog.attributes.Date}</p>

            {/* Check if the image exists and construct the full URL */}
            {blog.attributes.image && blog.attributes.image.data && (
              <img 
                src={`https://botanico-backend.onrender.com${blog.attributes.image.data.attributes.url}`} 
                alt={blog.attributes.title} 
                style={{ width: '1000px', height: '300px' }} 
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;




