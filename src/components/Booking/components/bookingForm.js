import React from 'react';
import { NavLink } from "react-router-dom";

import "./bookingForm.css";

const BookingForm = () => {
    const dummyData = {
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
    
    <section id='bookingForm'>
    {/* process component */}

      <div className="mainContainer">
        <aside>
          {/* <DateForm /> */}
        </aside>
        <main>
            <div className='top_section'>
                <div className='heading'>
                    <h1>Billing Details</h1>
                </div>
                <div className='display_text'>
                    <h3>CheckOut as Guest</h3>
                </div>
            </div>
            <div className='bottom_section'>

                {/* New pattern */}
                <form>
                    <div class="group">
                        <input required="" type="text" class="input" />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>First Name</label>
                    </div>
                    <div class="group">
                        <input required="" type="text" class="input" />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Last Name</label>
                    </div>
                    <div class="group">
                        <input required="" type="text" class="input" />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Email</label>
                    </div>
                    <div class="group">
                        <input required="" type="text" class="input" />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Phone No.</label>
                    </div>
                    <div class="group">
                        <input required="" type="text" class="input" />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Address</label>
                    </div>
                    <div class="group">
                        <input required="" type="text" class="input" />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Country</label>
                    </div>
                    <div class="group">
                        <input required="" type="text" class="input" />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>City</label>
                    </div>
                    <div class="group">
                        <input required="" type="text" class="input" />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>ZIP</label>
                    </div>
                </form>
            </div>

            <div className='booking_details'>
                <h1>Booking Details</h1>
                <table className='bookingTable'>
                    <tr>
                        <td>Check In:</td>
                        <td>{dummyData.startDate}</td>
                    </tr>
                    <tr>
                        <td>Check Out:</td>
                        <td>{dummyData.endDate}</td>
                    </tr>
                    <tr>
                        <td>Nights:</td>
                        <td>{dummyData.nights}</td>
                    </tr>
                    <tr>
                        <td>Guest:</td>
                        <td>{dummyData.adult + dummyData.children}</td>
                    </tr>
                </table>

                <h1 className='summaryTable'>Price Summary</h1>
                <table>
                    <tr>
                        <td>{dummyData.roomName}:</td>
                        <td>₹{dummyData.roomPrice}</td>
                    </tr>
                    <tr id='total'>
                        <td>Total Price:</td>
                        <td>₹{dummyData.roomPrice * dummyData.nights}</td>
                    </tr>
                </table>

                <NavLink to="/checkout">
                    <button className='proceed'>Proceed to Checkout</button>
                </NavLink>
            </div>
        </main>
      </div>
    </section>

    </>
  )
}

export default BookingForm