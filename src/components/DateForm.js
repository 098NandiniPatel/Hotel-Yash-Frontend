import React, { useState } from 'react'
import { DatePicker } from 'antd';
// import moment from 'moment';
import { Menu, Dropdown} from 'antd';
import './dataform.css'

const { RangePicker } = DatePicker;

const DateForm = () => {

  const [dates, setDates] = useState([]);
  const [formData,setFormdata]=useState({});
  const [adult, setAdult] = useState(1)
  const [children, setChildren] = useState(0)
 
  const handleCheckAvail=(e)=>{
    e.preventDefault(); 
    setFormdata({
      ...dates,
      adultNo:adult,
      childNo:children
    })
    //after submit redirect logic goes here


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
          <button onClick={e => setAdult(adult - 1)}>-</button>
          <span>{adult}</span>
          <button onClick={e => setAdult(adult + 1)}>+</button>
        </div>

      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h4>Children</h4>
          <p>Ages 4 to 18</p>
        </div>
        <div className='inc-dec-btn'>
          <button onClick={e => setChildren(children - 1)}>-</button>
          <span>{children}</span>
          <button onClick={e => setChildren(children + 1)}>+</button>
        </div>

      </div>
    </Menu>
  );
  const total = adult + children
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
      <div>
        <button className='btn check-btn' type='submit'>Check Availability</button>
      </div>

    </div>
    </form>
  )
}

export default DateForm

