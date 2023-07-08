import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

import "./checkout.css";

const Checkout = () => {
	const {
		firstName,
		lastName,
		email,
		phoneNo,
		address,
		country,
		city,
		zip,
		reduxFormData,
		roomName,
		roomPrice,
		roomImg,
		totalPrice,
	} = useSelector((state) => state.custom);

	return (
		<>
			<section className="mainContainer">
				<div className="top_section">
					{/* <div className='heading'>
                    <h1>Booking Details</h1>
                </div> */}

					<div className="display_details">
						<h1>Booking Details</h1>
						<table className="bookingTable">
							<tr>
								<td>Full Name:</td>
								<td>
									{firstName + " " + lastName}
								</td>
							</tr>
							<tr>
								<td>Email:</td>
								<td>{email}</td>
							</tr>
							<tr>
								<td>Phone no.:</td>
								<td>{phoneNo}</td>
							</tr>
							<tr>
								<td>Room:</td>
								<td>{roomName}</td>
							</tr>
							<tr>
								<td>Check In/Out:</td>
								<td>
									{reduxFormData.checkInDate +
										" -> " +
										reduxFormData.checkOutDate}
								</td>
							</tr>
							<tr>
								<td>Guest:</td>
								<td>
									{reduxFormData.adultNo +
										reduxFormData.childNo}
								</td>
							</tr>
							<tr>
								<td>Total Price:</td>
								<td>
									₹{totalPrice}
								</td>
							</tr>
						</table>

						<h1>Payments Options</h1>

						{/* Need to add payment options here*/}
					</div>
					<NavLink to="/successful">
						<button className="proceed">Proceed to Pay</button>
					</NavLink>
				</div>
			</section>
		</>
	);
};

export default Checkout;
