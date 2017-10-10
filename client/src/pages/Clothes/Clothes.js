import React, { Component } from "react";
import Nav from "../../components/Nav";
import Menu from "../../components/Menu";
// import helpers from "../../utils/helpers";
// import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Pages from "../../components/Pages";
import Footer from "../../components/Footer";

class Clothes extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Pages />
      </div>
    )
  }
}
export default Clothes;
