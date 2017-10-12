import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Clothes from "./pages/Clothes";
import Type from "./pages/Type";
import Checkout from "./pages/Checkout";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
// import GridExampleVerticallyDivided from "./components/Carousel"
import registerServiceWorker from "./registerServiceWorker";

const App = () =>
  <Router>
    <div>
    <Nav/>
    <Switch>
      <Route exact path= "/" component= {Home} />
      <Route exact path= "/clothes" component= {Clothes} />
      <Route exact path= "/product/:id" component= {Type} /> 
      <Route exact path= "/signup" component= {SignUp} />
      <Route exact path= "/signin" component= {SignIn} />
      <Route exact path= "/checkout" component= {Checkout} />
      </Switch>
      <Footer/>
      </div>
    </Router>;



export default App;
