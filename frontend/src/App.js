import Header from '../src/Components/layouts/Header';
import Footer from './Components/layouts/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Blog from './Components/Pages/Blog';
import AdminPanel from './Admin/AdminPanel';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';

function App() {
  return (
    <Router>
    
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/blog/:id' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} /> 
        <Route path='/about-us' element={<About/>} /> 
        <Route path='/admin' element={<AdminPanel/>} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
