import React from 'react'
import TopSection from '../components/RoomPage/TopSection'
import { roomList } from '../helpers/roomList'

const SuperHappyRoom = () => {
  return (
   <TopSection name={roomList[1].name} price={roomList[1].price}/>
  )
}

export default SuperHappyRoom