import React from 'react'

import {LuCheckCircle} from "react-icons/lu"; 

import "./successful.css"

const Successful = () => {
    const dummyData = {
        transaction: "167439",
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
        payment: "Bank Transfer",
    };


    const printPage = () => {
        window.print();

        // todo: modily
    }

  return (
    <>
        <section className='mainContainer'>
            <div className='top_section'>
                <div className='heading'>
                    <h3> <LuCheckCircle /> Your booking has been submitted successfully. We just sent you a confirmation email to {dummyData.email}</h3>
                </div>
        
                <div className='display_details'>
                    <h1>Booking Details</h1>
                    <table className='bookingTable'>
                        <tr>
                            <td>Transaction ID:</td>
                            <td>{dummyData.transaction}</td>
                        </tr>
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
                            <td>{dummyData.startDate + "  --> " + dummyData.endDate}</td>
                        </tr>
                        <tr>
                            <td>Guest:</td>
                            <td>{dummyData.adult + dummyData.children}</td>
                        </tr>
                        <tr>
                            <td>Payment:</td>
                            <td>{dummyData.payment}</td>
                        </tr>
                        <tr>
                            <td>Total Price:</td>
                            <td>₹{dummyData.roomPrice * dummyData.nights}</td>
                        </tr>
                    </table>

                </div>
                
                <button onClick={printPage} className='proceed'>Print Booking Details</button>
            </div>
        </section>
    </>
  )
}

export default Successful