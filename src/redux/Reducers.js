import { createReducer } from "@reduxjs/toolkit";

const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	phoneNo: "",
	address: "",
	country: "",
	city: "",
	zip: "",
	reduxFormData: {
		checkInDate: "",
		checkOutDate: "",
		adultNo: 1,
		childrenNo: 0,
	},
	roomName: "",
	roomPrice: null,
	roomImg: "",
	totalPrice: null,
	nights: 1,
};

export const bookingReducer = createReducer(initialState, {
	firstName: (state, action) => {
		state.firstName = action.payload;
	},
	lastName: (state, action) => {
		state.lastName = action.payload;
	},
	email: (state, action) => {
		state.email = action.payload;
	},
	phoneNo: (state, action) => {
		state.phoneNo = action.payload;
	},
	address: (state, action) => {
		state.address = action.payload;
	},
	country: (state, action) => {
		state.country = action.payload;
	},
	city: (state, action) => {
		state.city = action.payload;
	},
	zip: (state, action) => {
		state.zip = action.payload;
	},
	// checkInDate: (state, action) => {
	// 	state.checkInDate = action.payload;
	// },
	// checkOutDate: (state, action) => {
	// 	state.checkOutDate = action.payload;
	// },
	// adult: (state, action) => {
	// 	state.adult = action.payload;
	// },
	// children: (state, action) => {
	// 	state.children = action.payload;
	// },

	reduxFormData: (state, action) => {
		state.reduxFormData = action.payload;
	},

	roomName: (state, action) => {
		state.roomName = action.payload;
	},
	roomPrice: (state, action) => {
		state.roomPrice = action.payload;
	},
	roomImg: (state, action) => {
		state.roomImg = action.payload;
	},
	totalPrice: (state, action) => {
		state.totalPrice = action.payload;
	},
	nights: (state, action) => {
		state.nights = action.payload;
	},
});
