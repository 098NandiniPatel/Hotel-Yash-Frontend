import React from "react";
import ReactDOM from "react-dom/client";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";
// redux persist
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

let persistor = persistStore(store);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
