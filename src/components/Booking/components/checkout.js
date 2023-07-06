import React from 'react'
import { NavLink } from "react-router-dom";

import "./checkout.css"

const Checkout = () => {
    const dummyData = {
        firstName: "Sneha",
        lastName: "Sharma",
        email: "snehasharma@gmail.com",
        phoneno: "9898989893",
        startDate: "2023-07-02",
        endDate: "2023-07-03",
        nights: 2,
        adult: 1,
        children: 1,
        roomName: "Non-AC Room",
        roomPrice: 3000,
    };

  return (
    <>
        <section className='mainContainer'>
            <div className='top_section'>
                {/* <div className='heading'>
                    <h1>Booking Details</h1>
                </div> */}
        
                <div className='display_details'>
                    <h1>Booking Details</h1>
                    <table className='bookingTable'>
                        <tr>
                            <td>Full Name:</td>
                            <td>{dummyData.firstName + dummyData.lastName}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{dummyData.email}</td>
                        </tr>
                        <tr>
                            <td>Phone no.:</td>
                            <td>{dummyData.phoneno}</td>
                        </tr>
                        <tr>
                            <td>Room:</td>
                            <td>{dummyData.roomName}</td>
                        </tr>
                        <tr>
                            <td>Check In/Out:</td>
                            <td>{dummyData.startDate + "->" + dummyData.endDate}</td>
                        </tr>
                        <tr>
                            <td>Guest:</td>
                            <td>{dummyData.adult + dummyData.children}</td>
                        </tr>
                        <tr>
                            <td>Total Price:</td>
                            <td>₹{dummyData.roomPrice * dummyData.nights}</td>
                        </tr>
                    </table>

                    <h1>Payments Options</h1>

                    
                    {/* Need to add payment options here*/}

                </div>
                <NavLink to="/successful">
                    <button className='proceed'>Proceed to Pay</button>
                </NavLink>
            </div>
        </section>
    </>
  )
}

export default Checkout