import React  from "react";
import {Button} from "react-bootstrap";
import products from './mainpage/productcard';
import { Switch, Route } from "react-router-dom";
import LoginNav from "./Loginnav"
import Footer from './footer';
import './logindesign.css';
function Login(props) {
 
        return (
            
            <form>
        <LoginNav/>
        <Footer/>
        <div className="outer">
        <div className="inner">
                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <Button onClick={()=>{props.history.push("/product")}} type="submit" className="btn btn-dark btn-lg btn-block">Sign in</Button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <Switch>
               
                <Route path="/product" component={products} />
              </Switch>
              </div>
              </div>
            </form>
        );
    
}
export default Login;