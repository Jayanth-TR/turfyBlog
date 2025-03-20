const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');

dotenv.config();
connectDB();



const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET_KEY = process.env.JWT_SECRET;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;


app.use(express.json());
app.use(cors({
  origin: 'https://turfyblogsite.netlify.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));
app.use('/uploads', express.static('uploads'));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });


// const User = mongoose.model('User', new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// }),'Users');


const Blog = mongoose.model('Blog', new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}),'blogs');



const Contact = mongoose.model('Contact',new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
}),'contacts');




const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });
    req.user = decoded;
    next();
  });
};


app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  try {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ email, password: hashedPassword });
   await newUser.save();
    res.status(201).json({ message: 'User registered' });
  } catch (error) {
    res.status(400).json({ message: 'Error registering user' });
  }
});


app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
}

  try{
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Generate a token for the admin
      const token = jwt.sign({ role: 'admin', email: ADMIN_EMAIL }, JWT_SECRET_KEY, { expiresIn: '1 year' });
      console.log("Admin Token:", token);
      return res.json({ token, message: 'Admin logged in successfully' });
    }
    return res.status(400).json({ message: 'Invalid credentials' });
   
  }catch(error){
     console.error("Error during login",error);
  }
     
      

      
      
 
});



app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch blogs' });
  }
});


app.get('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching the blog' });
  }
});


app.post('/api/blogs', authMiddleware, upload.single('image'), async (req, res) => {
  const { title, content } = req.body;
  const image = req.file ? req.file.path : null;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  try {
    const newBlog = new Blog({ title, content, image });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create blog' });
  }
});

app.post('/api/contacts' , async(req,res)=>{
  const {name, email, message} = req.body;
  if(!name || !email || !message){
    console.error('Name, email and Message are requird')
  }
   try{
    const query = new Contact.create({name, email,message});
    res.status(201).json("Message sent successfully",query);
   }catch(error){
    res.status(500).json({message:"failed to add query", error})
   }
  
  
})


app.put('/api/blogs/:id', authMiddleware, upload.single('image'), async (req, res) => {
  

  try {
    const { title, content } = req.body;
    const image = req.file ? req.file.path : null;
    const blogId = req.params.id;

    const updatedBlog = await Blog.findByIdAndUpdate(blogId, { title, content, image, updatedAt: Date.now() }, { new: true });
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update blog' });
  }
});


app.delete('/api/blogs/:id', authMiddleware, async (req, res) => {
  const blogId = req.params.id;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(blogId);
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    return res.status(200).json({ message: 'Blog deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete blog' });
  }
});




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
