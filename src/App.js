import React, {useState, useEffet} from "react";
import logo from './logo.svg';
import './App.css';
import Axios from "axios";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Navbar from './Navbar';
import Contact from './Contact';
import Portfolio from './Contact';
import Blog from './Contact';
import Service from "./Service"


import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

const App = () => {

   return (
    <>
    <Navbar/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/service" component={Service}/>

          <Route exact path="/blog" component={Blog}/>


      </Switch>
   </>

  )
}

export default App;
