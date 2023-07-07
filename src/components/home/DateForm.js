import React, { useState } from 'react'
import { DatePicker } from 'antd';
import { Menu, Dropdown} from 'antd';
import './dataform.css'

const { RangePicker } = DatePicker;

const DateForm = () => {

  const [dates, setDates] = useState([]);
  const [formData,setFormdata]=useState({});
  const [adult, setAdult] = useState(1)
  const [children, setChildren] = useState(0)
  const [rooms, setRooms] = useState(1)
  const handleCheckAvail=(e)=>{
    e.preventDefault(); 
    setFormdata({
      ...dates,
      adultNo:adult,
      childNo:children,
      roomCount:rooms
    })
    //after submit redirect logic goes here
    //form data formate
    // {0: '13-07-2023', 1: '14-07-2023', adultNo: 1, childNo: 0, roomCount: 1}
  }
  console.log(formData)
  const onChange=(values)=> {
    setDates(values.map(item=>{
      return (item).format('DD-MM-YYYY')
    }))
  }
  
  const menu = (
    <Menu style={{ padding: '15px', color: '#858a99' }}>
      <div style={{ display: 'flex', paddingBottom: '20px', justifyContent: 'space-between' }}>
        <div>
          <h4>Adults</h4>
          <p>Ages 18+</p>
        </div>
        <div className='inc-dec-btn'>
          <button onClick={e => {if(adult>1){ setAdult(adult - 1)}}}>-</button>
          <span>{adult}</span>
          <button onClick={e => {if(adult<10){ setAdult(adult + 1)}}}>+</button>
        </div>

      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h4>Children</h4>
          <p>Ages 4 to 18</p>
        </div>
        <div className='inc-dec-btn'>
          <button onClick={e => {if(children>0){ setChildren(children - 1)}}}>-</button>
          <span>{children}</span>
          <button onClick={e => {if(children<10){ setChildren(children + 1)}}}>+</button>
        </div>

      </div>
    </Menu>
  );
  const menu1 = (
    <Menu style={{ padding: '15px', color: '#858a99' }}>
      <div style={{ display: 'flex', paddingBottom: '20px', justifyContent: 'space-between' }}>
        <div>
          <h4>Rooms</h4>
        </div>
        <div className='inc-dec-btn'>
          <button onClick={e => {if(rooms>1){ setRooms(rooms - 1)}}}>-</button>
          <span>{rooms}</span>
          <button onClick={e => {if(rooms<10){ setRooms(rooms + 1)}}}>+</button>
        </div>

      </div>
    </Menu>
  );
  const total = adult + children;
  return (
    <form id='checkavail-form' onSubmit={handleCheckAvail}>
    <div className='searchform' >
      <div className='field'>
        <RangePicker onChange={onChange} className='date-field' format={"DD-MM-YY"}/>
      </div>
      <div className='field'>
        <Dropdown overlay={menu} trigger={['click']}>
          <div>
            Guests {total}
          </div>
        </Dropdown>
      </div>
      <div className='field'>
        <Dropdown overlay={menu1} trigger={['click']}>
          <div>
            Rooms {rooms}
          </div>
        </Dropdown>
      </div>
      <div>
        <button className='btn check-btn' type='submit'>Check Availability</button>
      </div>

    </div>
    </form>
  )
}

export default DateForm

