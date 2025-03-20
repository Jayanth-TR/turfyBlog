import React, { useState, useEffect, useRef } from 'react';
import "../../Css/Home.css";
import About from './About';
import Contact from './Contact';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const blogContainerRef = useRef(null); // Reference for the blogs container

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blogs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  // Function to scroll left
  const scrollLeft = () => {
    if (blogContainerRef.current) {
      blogContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (blogContainerRef.current) {
      blogContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className='custom-bg container-fluid'>
      <div className='p-5 text-center'>
        <h1 
          className='autoShow col-12 display-4 fw-bold' 
          style={{ fontFamily: "'Halant', Arial, sans-serif", fontSize: "60px", fontWeight: "600", color: "#00ED64" }}
        >
          Welcome to Turfy Blog:
        </h1>
        <p className='autoShow col-12 text-white fs-4'>
          Your Ultimate Guide to Turf Management
        </p>
      </div>
      
      <div className='autoShow container d-flex justify-content-center'>
        <p 
          className='autoShow bg-white text-black p-5' 
          style={{ borderRadius: "40px", color: "rgb(0, 30, 43)", fontFamily: "'Euclid Circular A'", fontSize: "20px" }}
        >
          "At TurfY, we believe in the power of community and the joy of sports..."
        </p>
      </div>

      <div className='container mt-5 position-relative'>
        <h1 className='autoShow text-center mb-4 text-white'>Latest Blogs</h1>
        
        {/* Arrow Buttons */}
        <button className='scroll-btn left' onClick={scrollLeft}>‹</button>
        <button className='scroll-btn right' onClick={scrollRight}>›</button>

        {/* Horizontal Scroll for Blogs */}
        <div 
          className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2" 
          ref={blogContainerRef}
        >
          {blogs.map((blog) => (
            <div className="col-12 col-md-4 mb-4" key={blog._id}>
              <div className="blog-img card h-100">
                <img 
                  src={`http://localhost:5000/${blog.image}`} 
                  alt={blog.title} 
                  className="card-img-top" 
                  style={{ height: '200px', objectFit: 'cover' }} 
                />
                <div className="card-body">
                  <h5 className="autoShow card-title">{blog.title}</h5>
                  <p className="autoShow card-text text-white">{blog.content.substring(0, 100)}...</p>
                  <a href={`/blog/${blog._id}`} className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='container-flex mt-5'>
        <About/>
      </div>

      <div className="container mt-5 pb-5">
        <Contact/>
      </div>
    </div>
  );
};

export default Home;
