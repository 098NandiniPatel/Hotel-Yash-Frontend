import React from "react";
import DateForm from "../../components/home/DateForm";
import DisplayCard from "./components/DisplayCard";

import "./bookOnline.css";

// import acRoom from "../../assets/ac-room.jpeg";
// import nonAcRoom from "../../assets/non-ac-room.jpeg";
// import bgPattern from "../../img/leavesPattern.webp";

const BookOnline = () => {
	const dummyData = {
		startDate: "2023-07-02",
		endDate: "2023-07-03",
		adult: 1,
		children: 1,
	};

	const dummyRoomData = [
		{
			name:'Happy Room (Non-AC)',
        img:'https://hotelemojiinn.com/wp-content/uploads/2018/07/WhatsApp-Image-2022-08-23-at-11.07.21-AM-1-720x470.jpeg',
        price:'1,500.00',
			desc: "AC on, stress off",
		},
		{
			name:'Super Happy Room (AC)',
        img:'https://hotelemojiinn.com/wp-content/uploads/2018/07/WhatsApp-Image-2022-08-23-at-11.07.18-AM-2-720x470.jpeg',
        price:'2,500.00',
			desc: "The best things in life are free",
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
