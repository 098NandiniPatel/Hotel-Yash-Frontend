import React, { useState } from 'react'
import { DatePicker } from 'antd';
// import moment from 'moment';
import { Menu, Dropdown} from 'antd';
import './dataform.css'


const { RangePicker } = DatePicker;

const DateForm = () => {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  const [adult, setAdult] = useState(1)
  const [children, setChildren] = useState(0)

  const menu = (
    <Menu style={{ padding: '15px', color: '#858a99' }}>
      <div style={{ display: 'flex', paddingBottom: '20px', justifyContent: 'space-between' }}>
        <div>
          <h4>Adults</h4>
          <p>Ages 18+</p>
        </div>
        <div>
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
        <div>
          <button onClick={e => setChildren(children - 1)}>-</button>
          <span>{children}</span>
          <button onClick={e => setChildren(children + 1)}>+</button>
        </div>

      </div>
    </Menu>
  );
  const total = adult + children


  return (
    <div className='searchform' >
      <div className='field'>
        <RangePicker onChange={onChange} className='date-field'/>
      </div>
      <div className='field'>
        <Dropdown overlay={menu} trigger={['click']}>
          <div>
            Guests {total}
          </div>
        </Dropdown>
      </div>
      <div>
        <button className='btn'>Check Availability</button>
      </div>

    </div>
  )
}

export default DateForm

