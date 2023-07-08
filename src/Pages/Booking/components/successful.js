import React from "react";

import { LuCheckCircle } from "react-icons/lu";
import { useSelector } from "react-redux";

import "./successful.css";

const Successful = () => {
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

	const printPage = () => {
		window.print();

		// todo: modify
	};

	return (
		<>
			<section className="mainContainer">
				<div className="top_section">
					<div className="heading">
						<h3>
							{" "}
							<LuCheckCircle /> Your booking has been submitted
							successfully. We just sent you a confirmation email
							to {email}
						</h3>
					</div>

					<div className="display_details">
						<h1>Booking Details</h1>
						<table className="bookingTable">
							<tr>
								<td>Transaction ID:</td>
								<td>{"to be added when payment integrated"}</td>
							</tr>
							<tr>
								<td>Full Name:</td>
								<td>{firstName + " " + lastName}</td>
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
								<td>{reduxFormData.adultNo + reduxFormData.childNo}</td>
							</tr>
							<tr>
								<td>Payment:</td>
								<td>{"to be added when payment integrated"}</td>
							</tr>
							<tr>
								<td>Total Price:</td>
								<td>
									₹{totalPrice}
								</td>
							</tr>
						</table>
					</div>

					<button onClick={printPage} className="proceed">
						Print Booking Details
					</button>
				</div>
			</section>
		</>
	);
};

export default Successful;
