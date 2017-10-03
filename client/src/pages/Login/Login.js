import React, { Component } from "react";
import Nav from "../../components/Nav";
// import helpers from "../../utils/helpers";
// import { Link } from "react-router-dom";
// import Welcome from "../components/Welcome";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import SiteMap from "../../components/SiteMap";
import Footer from "../../components/Footer";

class Login extends Component {
  render() {
    return (
      <div>
        <Nav />
        <SignUp />
        <SiteMap />
        <Footer />
      </div>
    );
  }
}

export default Login;
