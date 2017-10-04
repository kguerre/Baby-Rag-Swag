import React, { Component } from "react";
import Nav from "../../components/Nav";
// import helpers from "../../utils/helpers";
// import { Link } from "react-router-dom";
import SignInForm from "../../components/SignInForm";
import SiteMap from "../../components/SiteMap";
import Footer from "../../components/Footer";

class SignIn extends Component {
  render() {
    return (
      <div>
        <Nav />
        <SignInForm />
        <Footer />
      </div>
    )
  }
}

export default SignIn;

