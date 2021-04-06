import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from './components/footer';
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import data from "./data.json";


import LoginNav from './components/loginNav';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      products:data.products,
      size:"",
      sort:"",
    };
  }
  render(){
  return (<Router>
    <div className="App">
    <LoginNav/>
      {/* <Products/> */}
      <Footer/>
      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}
}
export default App;