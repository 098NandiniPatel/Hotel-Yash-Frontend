import React from 'react'
import { servicesList } from '../helpers/servicesList'
import './services.css'
import { FaWifi } from "react-icons/fa";
import {FaDesktop} from "react-icons/fa"
import {FaCarBattery} from "react-icons/fa"
import {ImManWoman} from "react-icons/im"
import {FaWater} from "react-icons/fa"
import {FaDog} from "react-icons/fa"
import {FaPhoneVolume} from "react-icons/fa"
import {MdBathtub} from "react-icons/md"
const icons=[FaDesktop,FaWifi,FaCarBattery,ImManWoman,MdBathtub,FaWater,FaPhoneVolume,FaDog]
const Services = () => {
  return (
    <>
    <div className='services'>
        {servicesList.map((data,idx) => {
            const Icon =icons[idx]
            return (
                <div className='service-card'>
                    <Icon/>
                    <br />
                    <p>{data.title}</p>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Services