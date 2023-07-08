import React from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';


import { FaWater } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai"
import { LuPhoneCall } from "react-icons/lu";
import { MdBathtub } from "react-icons/md";
import { BiMaleFemale } from "react-icons/bi"; 


import "./displayCard.css";


const DisplayCard = ({img, name, desc, price}) => {
    // console.log(formData);

    const dispatch = useDispatch();

    const handleBookNowClick = () => {
        dispatch({
            type: "roomName",
            payload: name,
        });
        dispatch({
            type: "roomPrice",
            payload: price,
        });
        dispatch({
            type: "roomImg",
            payload: img,
        });
    }

    return (
        <div className="displayCard">
            <div className='left'>
                <img src={img} alt='img'/>
            </div>

            <div className='mid'>
                <h2>{name}</h2>
                <h3>{desc}</h3>
                
                <div className='icons'>
                    <div className='icon'>
                        <div className='msgBox'>
                            <p>R.O. Water</p>
                        </div>
                        <FaWater />
                    </div>
                    <div className='icon'>
                        <div className='msgBox'>
                            <p>Smart TV 32''</p>
                        </div>
                       <MdComputer />
                    </div>
                    <div className='icon'>
                        <div className='msgBox'>
                            <p>WiFi Included</p>
                        </div>
                        <AiOutlineWifi />
                    </div>
                    <div className='icon'>
                        <div className='msgBox'>
                            <p>Internet</p>
                        </div>
                        <LuPhoneCall />
                    </div>
                    <div className='icon'>
                        <div className='msgBox'>
                            <p>24/7 Hot & Cold Water</p>
                        </div>
                        < MdBathtub/>
                    </div>
                    <div className='icon'>
                        <div className='msgBox'>
                            <p>24/7 Room Services</p>
                        </div>
                        <BiMaleFemale />
                    </div>
                </div>

            </div>
            
            <div className='right'>
                <h2>₹{parseFloat(price)}</h2>
                <h3>PER NIGHT</h3>
                { true ? <NavLink to="/bookingForm"><button className='bookActive' onClick={handleBookNowClick}>Book Now</button></NavLink> : <button className='bookInactive'>Select Booking Dates</button> }
                <select>
                    <option value='avail'>Availability & Details</option>
                </select>
            </div>
        </div>
    );
}

export default DisplayCard;
