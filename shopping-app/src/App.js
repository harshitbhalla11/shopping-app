import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import Product from "./components/mainpage/Products";
import { AuthProvider } from "./components/contexts/AuthContext";
const App = () => {
	

	let routes = (
		<>
			<Route path="/signin" component={Login} />
			<Route path="/signup" component={SignUp} />
		</>
	);

	if (isAuth) {
		routes = <ProtectedRoute isAuth={isAuth} path="/product" component={Product} />;
	}
	return (
		<>
			<AuthProvider>
				<Navbar isAuth={isAuth} />
				<Router>
					<Switch>
						{routes}
						<ProtectedRoute isAuth={isAuth} path="/" component={Home} />
					</Switch>
				</Router>
			</AuthProvider>
		</>
	);
};

export default App;
