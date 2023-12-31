import React from 'react'
import HeroSlider from '../components/home/HeroSlider';
import DateForm from '../components/home/DateForm';
import './home.css'
import { Stack } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import { aboutImg } from '../helpers/aboutImg';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import GallerySection from '../components/home/GallerySection';
import Rooms from '../components/home/HomeRooms';
import { NavLink } from 'react-router-dom'

const Home = () => {

  return (
    <>
      <HeroSlider />

      <section className="settingDiv">
        <div style={{ backgroundColor: "#fff" }}>
          <DateForm />
        </div>

      </section>
      <section>
        <Stack className="about"
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <div className="left">
            <h1>HOTEL YASH</h1>
            <h3>SPREADING SMILES</h3>
            <p>Experience the Burst of Emotions with the first theme based hotel in NAINITAL. Serving you a feast of vibrant grids of emojies all around. <br />
              WE WELCOME YOU <span>❤</span><br />
              Close the doors, put on your cozy clothes and open the cozy blankets. When was the last time you actually felt this way? “cute and cozy” at the same place. Located in the foothills of DEV BHOOMI Uttarakhand , EMOJI INN serves you with the warmth of emotions. <br />
              Your stay at EMOJI INN will be a whole new experience that will make you feel at home.</p>
          </div>
          <div className="right">
            <Carousel>
              {
                aboutImg.map((item) => <img src={item.img} alt='img' />)
              }
            </Carousel>
          </div>
        </Stack>
      </section>
      <section>
        <div style={{ border: '2px solid #858a99' }}>
          <div style={{ padding: '30px ', textAlign: 'center' }}>
            <h2 style={{ fontWeight: '200', paddingBottom: '5px', color: '#deb666' }} >Want to check our photos ?</h2>
            <NavLink to="/gallery" style={{ textDecoration: 'none' }}><h1 className='underline'>Experience our hotel through photos and videos
              {/* <span><FaArrowRightLong /></span> */}
              {/* <span style={{fontWeight:"bolder",fontSize:'40px'}}> →</span> */}
            </h1></NavLink>
          </div>
        </div>
      </section>
      <section>
        {/* css part in services.css */}
        <h1 className='service-heading'>Our FAVORITE ROOMS</h1>
        <p className='service-subhead'>Check out now our best rooms</p>
        <Rooms />
      </section>
      <section>
        {/* css part in services.css */}
        <h1 className='service-heading'>OUR AWESOME SERVICES</h1>
        <p className='service-subhead'>Check out our awesome services</p>
        <Services />
      </section>
      <section>
        {/* css part in services.css */}
        <h1 className='service-heading'>Our Gallery</h1>
        <p className='service-subhead'></p>
        <GallerySection />
      </section>
      <section>
        {/* css part in services.css */}
        <h1 className='service-heading'>Our Guests love us</h1>
        <p className='service-subhead'>What our guests are saying about us</p>
        <Testimonials />
      </section>

    </>
  )
}

export default Home