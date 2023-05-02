import React from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './component/home/home';
import Navbar from "./component/navbar/navbar";
import About from "./component/aboutus/about";
import Contact from "./component/contactus/contact";
import Service from "./component/service/service";




function App() {
  return (
    <>
  <BrowserRouter>
  <Navbar/>
  
      <Routes>
          <Route path="/" element={<Navbar />} />
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Service />} /> 
         
      </Routes>
      
    </BrowserRouter>
      
    </>
  );
}

export default App;
