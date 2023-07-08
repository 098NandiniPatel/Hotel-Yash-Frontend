import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./bookingForm.css";

const BookingForm = () => {
	const numberOfNights = 5;

	const dispatch = useDispatch();

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

        // remove =5 after adding nights calculation using redux
        nights=5,
	} = useSelector((state) => state.custom);

	// calculating totalPrice
	dispatch({
		type: "totalPrice",
		payload: roomPrice * nights,
	});

	const handleFirstNameChange = (e) => {
		dispatch({
			type: "firstName",
			payload: e.target.value,
		});
	};

	const handleLastNameChange = (e) => {
		dispatch({
			type: "lastName",
			payload: e.target.value,
		});
	};

	const handleEmailChange = (e) => {
		dispatch({
			type: "email",
			payload: e.target.value,
		});
	};

	const handlePhoneNoChange = (e) => {
		dispatch({
			type: "phoneNo",
			payload: e.target.value,
		});
	};

	const handleAddressChange = (e) => {
		dispatch({
			type: "address",
			payload: e.target.value,
		});
	};

	const handleCountryChange = (e) => {
		dispatch({
			type: "country",
			payload: e.target.value,
		});
	};

	const handleCityChange = (e) => {
		dispatch({
			type: "city",
			payload: e.target.value,
		});
	};

	const handleZipChange = (e) => {
		dispatch({
			type: "zip",
			payload: e.target.value,
		});
	};

	return (
		<>
			<section id="bookingForm">
				{/* process component */}

				<div className="mainContainer">
					<aside>{/* <DateForm /> */}</aside>
					<main>
						<div className="top_section">
							<div className="heading">
								<h1>Billing Details</h1>
							</div>
							<div className="display_text">
								<h3>CheckOut as Guest</h3>
							</div>
						</div>

						<div className="booking_details">
							<h1>Booking Details</h1>
							<table className="bookingTable">
								<tr>
									<td rowSpan={5}>
										<img
											src={roomImg}
											alt=""
											className="roomImg"
										/>
									</td>
								</tr>
								<tr>
									<td>Check In:</td>
									<td>{reduxFormData.checkInDate}</td>
								</tr>
								<tr>
									<td>Check Out:</td>
									<td>{reduxFormData.checkOutDate}</td>
								</tr>
								<tr>
									<td>Nights:</td>
									<td>{nights || "to be added using redux dispatch"}</td>
								</tr>
								<tr>
									<td>Guest:</td>
									<td>
										{reduxFormData.adultNo +
											reduxFormData.childNo}
									</td>
								</tr>
							</table>

							<h1 className="summaryTable">Price Summary</h1>
							<table>
								<tr>
									<td>{roomName}:</td>
									<td>₹{roomPrice}</td>
								</tr>
								<tr id="total">
									<td>Total Price:</td>
									<td>₹{totalPrice}</td>
								</tr>
							</table>
						</div>

						<div className="bottom_section">
							<h1>Please fill in your details</h1>
							<form className="booking-form">
								<div className="group">
									<input
										required=""
										type="text"
										className="input"
										onChange={handleFirstNameChange}
									/>
									<span className="highlight"></span>
									<span className="bar"></span>
									<label>First Name</label>
								</div>
								<div className="group">
									<input
										required=""
										type="text"
										className="input"
										onChange={handleLastNameChange}
									/>
									<span className="highlight"></span>
									<span className="bar"></span>
									<label>Last Name</label>
								</div>
								<div className="group">
									<input
										required=""
										type="text"
										className="input"
										onChange={handleEmailChange}
									/>
									<span className="highlight"></span>
									<span className="bar"></span>
									<label>Email</label>
								</div>
								<div className="group">
									<input
										required=""
										type="text"
										className="input"
										onChange={handlePhoneNoChange}
									/>
									<span className="highlight"></span>
									<span className="bar"></span>
									<label>Phone No.</label>
								</div>
								<div className="group">
									<input
										required=""
										type="text"
										className="input"
										onChange={handleAddressChange}
									/>
									<span className="highlight"></span>
									<span className="bar"></span>
									<label>Address</label>
								</div>
								<div className="group">
									<input
										required=""
										type="text"
										className="input"
										onChange={handleCountryChange}
									/>
									<span className="highlight"></span>
									<span className="bar"></span>
									<label>Country</label>
								</div>
								<div className="group">
									<input
										required=""
										type="text"
										className="input"
										onChange={handleCityChange}
									/>
									<span className="highlight"></span>
									<span className="bar"></span>
									<label>City</label>
								</div>
								<div className="group">
									<input
										required=""
										type="text"
										className="input"
										onChange={handleZipChange}
									/>
									<span className="highlight"></span>
									<span className="bar"></span>
									<label>ZIP</label>
								</div>

								<NavLink to="/checkout">
									<button className="proceed">
										Proceed to Checkout
									</button>
								</NavLink>
							</form>
						</div>
					</main>
				</div>
			</section>
		</>
	);
};

export default BookingForm;
