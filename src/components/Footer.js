import React from 'react'
import './footer.css'
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import instagram from '../img/instagram.png'
import map from '../img/map.png'
import mobile from '../img/mobile.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <span>Hotel Yash</span>
        <div className="address">
          Hotel Yash, Station Rd, Jakhi Bigha, Dehri, Bihar 821307
        </div>

        <div className="socialmedia">
          <p>Get In Touch</p>
          <a href="https://www.facebook.com"><img src={facebook} alt="Facebook" /></a>
          <a href="https://www.twitter.com"><img src={twitter} alt="Twitter" /></a>
          <a href="https://www.instagram.com"><img src={instagram} alt="Instagram" /></a>
        </div>

        <div className="links">
          <a href="home.html"> Home</a>|
          <a href="gallary.html">Gallery</a>|
          <a href="about.html">About Us</a>|
          <a href="contact.html">Contact Us</a>|
          <a href="bookonline.html">Book Online</a>

        </div>

        <div className="map">
          <a href="https://www.google.com/travel/search?q=yash%20hotel%20bhihar&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4308226%2C4570332%2C4597339%2C4757164%2C4814050%2C4850738%2C4864715%2C4874190%2C4886480%2C4893075%2C4924070%2C4965990%2C4990494%2C72248281%2C72264422%2C72281254%2C72286088%2C72296743&hl=en-IN&gl=in&ssta=1&ts=CAESCAoCCAMKAggDGhwSGhIUCgcI5w8QBxgIEgcI5w8QBxgJGAEyAhAAKgcKBToDSU5S&qs=CAEyE0Nnb0lyWmV4Xzd6TnlJeGhFQUU4CkILCa1L7M9rIhlhGAFCCwkdBXtkoG8RFRgBQgsJqZWiCqZvO80YAQ&ap=KigKEgmCxvn_Leg4QBELJaFXuwtVQBISCU8aTzV16zhAEQsloU0uDFVAaAG6AQhvdmVydmlldw&ictx=1&sa=X&ved=0CAAQ5JsGahcKEwiw6KmumvD_AhUAAAAAHQAAAAAQCQ&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls">
          <img src={map} alt="Map-Icon" /></a>
          <a href="tel:07903570716"><img src={mobile} alt="Mobile Icon" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer