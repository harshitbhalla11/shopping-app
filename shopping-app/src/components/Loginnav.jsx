/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Mainlogo from './Mainlogo.svg';
//  import products from './components/product';
 
 function LoginNav(){
    return(
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>
            
          
          <img classname="logoimg" src={Mainlogo} style={{width:"51px"
        
        }}/>

    
          
          
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
        
      
      </Navbar>
    );
}
export default LoginNav;


