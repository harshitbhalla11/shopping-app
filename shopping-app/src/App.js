import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Product from "./components/mainpage/productcard";
import data from "./data.json";


class App extends React.Component{
  constructor(){
    super();
    this.state={
      products:data.products,
      size:"",
      sort:"",
      status:"false"
    };
  }
  render(){
  return (<Router>
    <div className="App">
    
      
   
     
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
           
          </Switch>
        
      <div classname="product-page">
      <Switch>
      <Route path="/product" component={Product} />
      </Switch>
      </div>
      
    </div>
    </Router>
  );
}
}
export default App;