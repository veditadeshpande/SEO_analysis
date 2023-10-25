import React from 'react';
import Navbar from './components/Navbar'; 
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './components/Home/Home'
import About from './components/About/About'
import Guide from './components/Guide/Guide'
import Footer from './components/Footer/Footer'; 

function App() { 

  return ( 
    //Routing through all the components
    <Router> 
      <Navbar /> 
      <Routes> 
        <Route path='/' element={<Home />} /> 
        <Route path='/home' element={<Home/>} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/guide' element={<Guide />} /> 
      </Routes> 
      <Footer />
    </Router> 
    
  ); 
} 

export default App; 
