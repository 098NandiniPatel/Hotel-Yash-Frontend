import React, { useState, useEffect } from "react";
import { DatePicker } from "antd";
// import moment from 'moment';
import { Menu, Dropdown } from "antd";
import "./dataform.css";
import { useDispatch, useSelector } from "react-redux";

const { RangePicker } = DatePicker;

const DateForm = () => {
	const [dates, setDates] = useState([]);
	const [formData, setFormdata] = useState({});
	const [adult, setAdult] = useState(1);
	const [children, setChildren] = useState(0);

  useEffect(() => {
    console.log(formData);

    dispatch({
      type: "reduxFormData",
      payload: formData,
    });

    console.log(reduxFormData);
  }, [formData])
  

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

		// checkInDate,
		// checkOutDate,
		// adults,
		// childrens,
    reduxFormData
	} = useSelector((state) => state.custom);

	const handleCheckAvail = (e) => {
		e.preventDefault();
		setFormdata({
			checkInDate: dates[0],
			checkOutDate: dates[1],
			adultNo: adult,
			childNo: children,
		});
		//after submit redirect logic goes here


		// window.href = "/bookonline";
	};

	console.log(formData);

	const onChange = (values) => {
		setDates(
			values.map((item) => {
				return item.format("DD-MM-YYYY");
			})
		);
	};

	const menu = (
		<Menu style={{ padding: "15px", color: "#858a99" }}>
			<div
				style={{
					display: "flex",
					paddingBottom: "20px",
					justifyContent: "space-between",
				}}
			>
				<div>
					<h4>Adults</h4>
					<p>Ages 18+</p>
				</div>
				<div className="inc-dec-btn">
					<button onClick={(e) => setAdult(adult - 1)}>-</button>
					<span>{adult}</span>
					<button onClick={(e) => setAdult(adult + 1)}>+</button>
				</div>
			</div>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div>
					<h4>Children</h4>
					<p>Ages 4 to 18</p>
				</div>
				<div className="inc-dec-btn">
					<button onClick={(e) => setChildren(children - 1)}>
						-
					</button>
					<span>{children}</span>
					<button onClick={(e) => setChildren(children + 1)}>
						+
					</button>
				</div>
			</div>
		</Menu>
	);
	const total = adult + children;
	return (
		<form id="checkavail-form">
			<div className="searchform">
				<div className="field">
					<RangePicker
						onChange={onChange}
						className="date-field"
						format={"DD-MM-YY"}
					/>
				</div>
				<div className="field">
					<Dropdown overlay={menu} trigger={["click"]}>
						<div>Guests {total}</div>
					</Dropdown>
				</div>
				<div>
					<button
						className="btn check-btn"
						type="submit"
						onClick={handleCheckAvail}
					>
						Check Availability
					</button>
				</div>
        {/* <div>{reduxFormData.checkInDate + " " + reduxFormData.checkOutDate + " " + reduxFormData.adult + " " + reduxFormData.children}</div> */}
			</div>
		</form>
	);
};

export default DateForm;
