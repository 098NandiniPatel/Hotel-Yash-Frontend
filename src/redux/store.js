import { configureStore } from "@reduxjs/toolkit";
import { bookingReducer } from "./Reducers";

// to persist data
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};

const reducer = combineReducers({
	custom: bookingReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
	// reducer: {
	// 	custom: customReducer,
	// },
	reducer: persistedReducer,
});

export default store;
