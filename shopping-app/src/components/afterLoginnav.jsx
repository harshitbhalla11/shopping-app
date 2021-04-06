/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";
import Mainlogo from './Mainlogo.svg';
import  Sideb  from "./sidebar/sidebar";
//  import products from './components/product';

function AfterLoginNav() {
    return (
        <div>
            
            <Navbar className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={"/sign-in"}>


                        <img classname="logoimg" src={Mainlogo} style={{
                            width: "51px"

                        }} />

                    </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>Logout</Link>
                            </li>

                        </ul>
                    </div>
                </div>
       
      
      </Navbar>
      </div>
    );
}
export default AfterLoginNav;


