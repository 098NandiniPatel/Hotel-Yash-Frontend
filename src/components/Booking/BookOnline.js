import React from 'react'
import DateForm from '../home/DateForm';
import DisplayCard from './components/DisplayCard';
import BreadCrumbs from '../about/BreadCrumbs'
import {roomList} from '../../helpers/roomList'

import "./bookOnline.css"

const BookOnline = () => {

  const dummyData = {
    startDate: "2023-07-02",
    endDate: "2023-07-03",
    adult: 1,
    children: 1,
  };

  return (
    <>
    <BreadCrumbs name="Book Online" /> 
    <section id='bookOnline'>
    {/* process component */}
    
    <div style={{ backgroundColor: "#fff" }}>
          <DateForm />
        </div>
    </section>
    <section>
      <div className="mainContainer">
        <main>
            <div className='bar'>
              <h4>You found 2 rooms</h4>
              <select>
              <option value="lowest">Sort by: Lowest price</option>
              <option value="highest">Sort by: Highest price</option>
              <option value="default">Sort by: Default</option>
              </select>
            </div>
            
            <DisplayCard
              img={roomList[0].img}
              name={roomList[0].name}
              desc="The best things in life are free"
              price={roomList[0].price}
              link={roomList[0].link}
              formData={dummyData}
            />

            <DisplayCard
              img={roomList[1].img}
              name={roomList[1].name}
              desc="AC on, stress off"
              price={roomList[1].price}
              link={roomList[1].link}
              formData={dummyData}
            />
        </main>
      </div>
    </section>

    </>
  )
}

export default BookOnline