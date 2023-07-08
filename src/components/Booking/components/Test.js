// import { FormContext } from 'antd/es/form/context'
import React from 'react'
import { useContext } from 'react'
import { Context } from '../../home/DateForm';
const Test = () => {
    const data =useContext(Context);
  return (
    <div>
    <h1>form data</h1>
       {data}
       
       {/* {child}
       
       {room}
       
       {date} */}
    </div>
  )
}

export default Test