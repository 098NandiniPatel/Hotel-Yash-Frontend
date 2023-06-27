import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";
import BookOnline from "./Pages/BookOnline";
import "./index.css";
import Scroll from './components/Scroll';


function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/bookonline" element={<BookOnline />} />
      </Routes>
     <Scroll/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
