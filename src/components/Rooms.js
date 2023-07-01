import React from 'react'
import { roomList } from '../helpers/roomList'
import { useNavigate } from "react-router-dom";
import './rooms.css'
const Rooms = () => {
  const navigate = useNavigate();
  return (
    <div className="room-container">
        {roomList.map((data) => {
            return (
                
                <div className='room-card'>
               
                    <p>₹{data.price}/night</p>
                    <img src={data.img} alt="" width={"100%"}/>
                    <h3>{data.name}</h3>
                    
                </div>
            )
        })}
    </div>
  )
}

export default Rooms