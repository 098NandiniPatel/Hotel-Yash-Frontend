import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";
import BookOnline from "./components/Booking/BookOnline";
import "./index.css";
import HappyRoom from './components/RoomPage/HappyRoom';
import SuperHappyRoom from './components/RoomPage/SuperHappyRoom';
import ScrollToTop from 'react-scroll-to-top';
import {BsChevronDoubleUp} from 'react-icons/bs'

import BookingForm from './components/Booking/components/bookingForm'
import Checkout from './components/Booking/components/checkout'
import Successful from './components/Booking/components/successful'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <div style={{overflow:'hidden'}}>
      <Routes>
      
        <Route path="/" element={<Home />}  />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/happy-room" element={<HappyRoom />} />
        <Route path="/super-happy-room" element={<SuperHappyRoom/>} />
        <Route path="/bookonline" element={<BookOnline />} />
        
        <Route path="/bookingform" element={<BookingForm/>}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/successful" element={<Successful />}/>
      </Routes>
      </div>

     {/* <Scroll/> */}
     
      <Footer />
      <ScrollToTop smooth top={300} component={<BsChevronDoubleUp/>} style={{backgroundColor:'#deb666' ,color:'#fff', fontSize:'18px'}} />
    </BrowserRouter>
  );
}

export default App;
