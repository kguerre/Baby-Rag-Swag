import React, { Component } from "react";
import Nav from "../../components/Nav";
import Menu from "../../components/Menu";
// import helpers from "../../utils/helpers";
// import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import CheckoutContent from "../../components/CheckoutContent";
import Footer from "../../components/Footer";

class Checkout extends Component {
  render() {
    return (
      <div>
        <Nav />
        <CheckoutContent />
        <Footer />
      </div>
    );
  }
}

export default Checkout;
