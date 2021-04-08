import React,{useState ,useEffect} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Login from "./components/Loginpage/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import Cart from "./components/cart";
import Product from "./components/mainpage/Products";
import { user } from './components/firebase/firebase'
import { AuthProvider } from "./components/contexts/AuthContext";

const App = () => {
	const [isAuth, checkAuth] = useState(false);

	useEffect(() => {
		if(user!==null&&user.email!==null){
			checkAuth(isAuth =>!isAuth )
			console.log(isAuth);
		}
	  });

	
	console.log(isAuth);
	// const isAuth=false;

	let routes = (
		<>
			<Route path="/signin" component={Login} />
			<Route path="/signup" component={SignUp} />
		</>
	);

	if (isAuth) {
		routes = <ProtectedRoute isAuth={isAuth} path="/product" component={Product} />;
		routes = <ProtectedRoute isAuth={isAuth} path="/cart" component={Cart} />;
	}
	return (
		<>
			<AuthProvider>
				<Router>
					<Navbar isAuth={isAuth} />

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
