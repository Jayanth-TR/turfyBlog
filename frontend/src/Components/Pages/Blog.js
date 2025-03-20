import React, { useState, useEffect } from 'react';
import '../../Css/Blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]); // Store all blogs
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blogs'); // Fetch all blogs
        if (!response.ok) {
          throw new Error('Error fetching blogs');
        }
        const data = await response.json();
        setBlogs(data); // Set the fetched blogs
      } catch (error) {
        setError(error.message);
      }
    };
    fetchBlogs();
  }, []); // Empty dependency array to fetch once on component mount

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blogs.length) {
    return <div>Loading...</div>; // Show loading message if no blogs fetched
  }

  return (
    <div className='blog-container container-fluid '>
      <h1 style={{ fontFamily: "'Halant', Arial, sans-serif",color:"rgb(0, 237, 100"}} className='p-4 text-center'>All Blogs</h1>
      <div className="row">
        {blogs.map(blog => (
          <div className="col-md-12 mb-4" key={blog._id}> {/* Use blog._id as the key */}
            <div className="card p-4">
              <div className="card-body p-5">
                <h5 style={{fontSize:"28px", fontFamily: "Abril Fatface"}} className="autoShow card-title ">{blog.title}</h5>
                
                {/* Render blog content with HTML if available */}
                <p 
                  style={{fontFamily: "'Euclid Circular A'", fontSize:"20px"}} 
                  className="card-text text-white" 
                  dangerouslySetInnerHTML={{ __html: blog.content }} // Use this to render HTML
                />
                
                {blog.image && (
                  <img 
                    src={`http://localhost:5000/${blog.image}`} 
                    alt={blog.title} 
                    className="autoShow img-fluid" 
                    style={{ width: '100%', height: 'auto', marginBottom: '10px' }} 
                  />
                )}
                <p className="card-text">
                  <small className="text-muted">
                    Published on: {new Date(blog.createdAt).toLocaleDateString()}
                  </small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
