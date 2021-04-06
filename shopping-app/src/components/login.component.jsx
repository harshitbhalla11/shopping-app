import React  from "react";
import {Button} from "react-bootstrap";
import products from './Product';
import { Switch, Route } from "react-router-dom";
function Login(props) {
 
        return (
            <form>

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
            </form>
        );
    
}
export default Login;