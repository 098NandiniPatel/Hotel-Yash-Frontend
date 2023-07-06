import React from 'react'
import TopSection from '../components/RoomPage/TopSection'
import { roomList } from '../helpers/roomList'
import DateForm from '../components/home/DateForm'
import Services from '../components/home/Services'
import './superHappyRoom.css'
import { NavLink } from 'react-router-dom'
import { aboutImg } from '../helpers/aboutImg'
import Carousel from 'react-material-ui-carousel'
import { Stack } from '@mui/material'
const SuperHappyRoom = () => {
  return (
    <>
      <TopSection name={roomList[1].name} price={roomList[1].price} />
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
          <p style={{ whiteSpace: 'pre-line' }}>{roomList[1].desc}</p>

        </div>
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
        <h2 style={{ color: '#606060', padding: '25px 0 15px' }}>Similar Room</h2>
        <div className='similar-room-card'>
          <NavLink to={roomList[0].link} style={{ textDecoration: 'none' }}>
            <h3>{roomList[0].name}</h3>
            <p>₹{roomList[0].price} / night</p>
            <img src={roomList[0].img} alt="" width={'288px'} height={'300px'} />

          </NavLink>
        </div>
      </section>
    </>
  )
}

export default SuperHappyRoom