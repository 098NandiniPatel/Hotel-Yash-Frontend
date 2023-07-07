import React from 'react'
import { roomList } from '../helpers/roomList'
import TopSection from '../components/RoomPage/TopSection'
import { NavLink } from 'react-router-dom'
import Services from '../components/home/Services'
import DateForm from '../components/home/DateForm'
import { aboutImg } from '../helpers/aboutImg'
import Carousel from 'react-material-ui-carousel'
import { Stack } from '@mui/material'
import Testimonials from '../components/home/Testimonials'
const HappyRoom = () => {
  return (
    <>
    <TopSection name={roomList[0].name} price={roomList[0].price}/>
    <section>
    <Stack 
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
        <div className='room-left'>
          <Carousel>
              {
                aboutImg.map((item) => <img src={item.img} height={'400px'} />)
              }
            </Carousel>

        </div>
        <div className='room-right'>
          <p style={{ whiteSpace: 'pre-line' }}>{roomList[0].desc}</p>

        </div>
        {/* </div> */}
        </Stack>
      </section>
      <section style={{ backgroundColor: "#f9f9f9" }}>
        <div style={{ backgroundColor: "#fff" }}>
          <DateForm />
        </div>

      </section>
      <section>
        <h2 style={{ color: '#606060' }}>Room Services</h2>
        <Services />
        <h2 style={{ color: '#606060', padding: '25px 0 15px' }}>What our guest says?</h2>
        <Testimonials/>
        <h2 style={{ color: '#606060', padding: '25px 0 15px' }}>Similar Room</h2>
        <div className='similar-room-card'>
          <NavLink to={roomList[1].link} style={{ textDecoration: 'none' }}>
          <h3>{roomList[1].name}</h3>
            <p>₹{roomList[1].price} / night</p>
            <img src={roomList[1].img} alt="" width={'288px'} height={'300px'} />
            
          </NavLink>
        </div>
        </section>
    </>
  )
}

export default HappyRoom