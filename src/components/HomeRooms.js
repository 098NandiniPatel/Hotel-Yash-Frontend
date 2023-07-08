import React from 'react'
import { roomList } from '../helpers/roomList'
import { NavLink } from "react-router-dom";
import './homeRooms.css'
const HomeRooms = () => {

  return (
    <div className="room-container">
      {roomList.map((data) => {
        return (

          <div className='room-card'>
            <NavLink to={data.link} style={{ textDecoration: 'none' }}>
              <p>₹{data.price}/night</p>
              <img src={data.img} alt="" width={"100%"} />
              <h3>{data.name}</h3>
            </NavLink>
          </div>

        )
      })}
    </div>
  )
}

export default HomeRooms