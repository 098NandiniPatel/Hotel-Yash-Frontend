import React from 'react'
import { roomList } from '../helpers/roomList'
import TopSection from '../components/RoomPage/TopSection'
const HappyRoom = () => {
  return (
    <>
    <TopSection name={roomList[0].name} price={roomList[0].price}/>
    <section>
      <p>
        {roomList[0].desc}
      </p>
    </section>
    </>
  )
}

export default HappyRoom