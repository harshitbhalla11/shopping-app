import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import reducer from "./store/reducers/reducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./App";
import thunk from 'redux-thunk';
import "./index.css";
// import UserProvider from "./providers/UserProvider";
// import thunk  from  'redux-thunk'
const store = createStore(reducer,applyMiddleware(thunk))

ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>,
	document.getElementById("root")
);
