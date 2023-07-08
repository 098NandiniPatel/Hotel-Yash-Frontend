import React from "react";
import DateForm from "../../components/DateForm";
import DisplayCard from "./components/DisplayCard";

import "./bookOnline.css";

import acRoom from "../../assets/ac-room.jpeg";
import nonAcRoom from "../../assets/non-ac-room.jpeg";
import bgPattern from "../../assets/leavesPattern.webp";

const BookOnline = () => {
	const dummyData = {
		startDate: "2023-07-02",
		endDate: "2023-07-03",
		adult: 1,
		children: 1,
	};

	const dummyRoomData = [
		{
			img: acRoom,
			name: "AC Rooms",
			desc: "AC on, stress off",
			price: 1600.0,
		},
		{
			img: nonAcRoom,
			name: "Non-AC Rooms",
			desc: "The best things in life are free",
			price: 2500.0,
		},
	];

	return (
		<>
			<section id="bookOnline">
				{/* process component */}

				<div className="mainContainer">
					<aside>
						<DateForm />
					</aside>
					<main>
						<div className="bar">
							<h4>You found 2 rooms from ₹3,200.00</h4>
							<select>
								<option value="lowest">
									Sort by: Lowest price
								</option>
								<option value="highest">
									Sort by: Highest price
								</option>
								<option value="default">
									Sort by: Default
								</option>
							</select>
						</div>

						{dummyRoomData.map((room, i) => (
							<DisplayCard
								key={i}
								img={room.img}
								name={room.name}
								desc={room.desc}
								price={room.price}
							/>
						))}
					</main>
				</div>
			</section>
		</>
	);
};

export default BookOnline;
