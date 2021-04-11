import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux';
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Login from "./components/Loginpage/Login";
import SignUp from "./components/Signup";
import Home from "./components/mainpage/Home";

import Product from "./components/mainpage/Products";
import { user } from './components/firebase/firebase'
import { AuthProvider } from "./components/contexts/AuthContext";
import AdminHome from "./components/mainpage/AdminHome";

const App = ({ isAuth }) => {

	// let routes = (
	// 	<>
	// 		<Route path="/signin" component={Login} />
	// 		<Route path="/signup" component={SignUp} />
	// 	</>
	// );

	// console.log(isAuth)

	// let routes =
	// 	(<>
	// 		<Route path="/signin" component={Login} />
	// 		<Route path="/signup" component={SignUp} />
	// 		<ProtectedRoute path="/product" component={Product} />
	// 		<ProtectedRoute path="/cart" component={Cart} />
	// 		<ProtectedRoute path="/" component={Home} />
	// 		<Redirect to="/" />
	// 	</>)

	return (
		<>
			<AuthProvider>
				<Router>
					<Navbar />
					<Switch>
						<Route exact path="/signin" component={Login} />
						<Route exact path="/signup" component={SignUp} />
						<ProtectedRoute exact path="/product" component={Product} />
						{/* <ProtectedRoute exact path="/cart/:id?" component={CartScreen} /> */}
						<ProtectedRoute path="/home" component={Home} />
						<ProtectedRoute path="/adminhome" component={AdminHome} />
						<Redirect to="/" />
					</Switch>
				</Router>
			</AuthProvider>
		</>
	);
};

const mapStateToProps = state => {
	return {
		isAuth: state.isAuth
	}
}
export default connect(mapStateToProps)(App);
