import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import reducer from "./store/reducers/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import "./index.css";
import UserProvider from "./providers/UserProvider";
const store = createStore(reducer)

ReactDOM.render(
	<UserProvider>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</UserProvider>,
	document.getElementById("root")
);
