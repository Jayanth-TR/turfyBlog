import React, { useState, useEffect } from 'react';
import '../Css/App.css';
import bgImg from '../assest/images/about-bg.jpg';



const AdminPanel = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://turfy-blog.vercel.app";

 

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true); 
      fetchBlogs(); 
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchBlogs();
    }
  }, [isAuthenticated]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/blogs`);
      if (!response.ok) throw new Error('Failed to fetch blogs.');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      
      if (image) {
        formData.append('image', image);
      }
    
      const token = localStorage.getItem('adminToken');
      console.log('token:',token);
      const response = await fetch(isEditing 
        ? `${API_BASE_URL}/api/blogs/${editId}` 
        : `${API_BASE_URL}/api/blogs`, 
        {
          method: isEditing ? 'PUT' : 'POST',
          headers: {
            'Authorization': `Bearer ${token}`, 
          },
          body: formData,
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json(); // Await the response
        throw new Error(errorResponse.message || 'Failed to save blog');
    }
  
      setTitle('');
      setContent('');
      setImage(null);
      setIsEditing(false);
      setEditId(null);
      
     
      fetchBlogs();
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };
  

  const handleEdit = (blog) => {
    setTitle(blog.title);
    setContent(blog.content);
    setIsEditing(true);
    setEditId(blog._id);
  };

  const handleDelete = async (id) => {
   
    if (window.confirm('Are you sure you want to delete this blog?')) 
    try {
     
      const token = localStorage.getItem('adminToken');
      await fetch(`${API_BASE_URL}/api/blogs/${id}`, { method: 'DELETE',headers:{'Authorization':`Bearer ${token}`}, });
      fetchBlogs(); 
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
          const response = await fetch(`${API_BASE_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          // Store the token in localStorage
          localStorage.setItem('adminToken', data.token);
          console.log("Token saved to localStorage:", data.token);
          setIsAuthenticated(true); // Log the stored token
        } else {
          console.error("Login error:", data.message);
        }
        
            
    } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred. Please try again later.');
    }
};

  

  const handleLogout = () => {
    localStorage.removeItem('adminToken'); 
    setIsAuthenticated(false); 
  };

  return (
    <div  className='container-flex   d-flex justify-content-center '>
      {!isAuthenticated ? (
        <form style={{backgroundImage:`url(${bgImg})`,backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat:"no-repeat",position:"relative"}} onSubmit={handleLogin} className='text-start bg-light p-5 mb-4 mt-4  w-50  justify-content-center border rounded'>
          <h1 style={{fontFamily:"'Halant', Arial, sans-serif", fontSize:"45px",color:"rgb(0, 237, 100)"}} className='text-black '>Admin Login</h1>
          <div className='form-group'>
            <label className='text-white mb-1'>Email</label>
            <input
              className='form-control text-black mb-3 '
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label className='text-white mb-1'>Password</label>
            <input
              className='form-control'
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className='mt-3 bg-primary ps-3 pe-3  rounded text-white' type='submit'>
            Login
          </button>
        </form>
      ) : (
        <div style={{backgroundColor:"rgb(0, 30, 43)"}} className='admin-container container mt-4 mb-4 p-5 rounded '>
          <h1 style={{fontFamily:"'Halant', Arial, sans-serif", fontSize:"45px",color:"rgb(0, 237, 100)"}}  className=' d-flex justify-content-center'>Admin Panel</h1>
          <button className='mb-5 bg-danger p-2 rounded text-white' onClick={handleLogout}>
            Logout
          </button>
          <form onSubmit={handleCreateOrUpdate}>
            <div className='form-group'>
              <label className='text-white fs-4 pb-2'>Title</label>
              <input
                className='form-control'
                type='text'
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className='form-group'>
              <label className='text-white mt-5 fs-4 pb-2'>Content</label>
              <textarea
                className='form-control mt-3'
                placeholder='Content'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
            <div className='form-group'>
              <label className='text-white mt-5 fs-4 pb-2'>Image</label>
              <input
                type='file'
                className='form-control mt-3'
                accept='image/*'
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <button className='mt-5 bg-primary p-3 rounded text-white' type='submit'>
              {isEditing ? 'Update Blog' : 'Create Blog'}
            </button>
          </form>

          <h2 className='text-white mt-5 d-flex justify-content-center'>All Blogs</h2>
          {blogs.map((blog) => (
            <div key={blog._id} className='text-white mt-5'>
              <h3 style={{ fontFamily: "'Halant', Arial, sans-serif", color: "#00ED64" }}>
                {blog.title}
              </h3>
              <p>{blog.content}</p>
              {blog.image && <img src={`${API_BASE_URL}/${blog.image}`} alt={blog.title} style={{ width: '100%', height: 'auto' }} />}
              <button
                style={{ backgroundColor: "#00ED64", color: 'black', fontWeight: 'bold', border: "none" }}
                className='mt-3 ps-3 pe-3 me-3 rounded fs-5'
                onClick={() => handleEdit(blog)}
              >
                Edit
              </button>
              <button
                style={{ backgroundColor: "#00ED64", color: 'black', fontWeight: 'bold', border: "none" }}
                className='mt-3 ps-3 pe-3 me-3 rounded fs-5'
                onClick={() => handleDelete(blog._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
