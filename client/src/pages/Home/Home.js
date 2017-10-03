import React, { Component } from "react";
import Nav from "../../components/Nav";
// import Menu from "../components/Menu";
// import helpers from "../../utils/helpers";
// import { Link } from "react-router-dom";
import Carouselimage from "../../components/Carousel";
import Featured from "../../components/Featured";
import SiteMap from "../../components/SiteMap";
import Footerhome from "../../components/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Carouselimage />
        <Featured />
        <SiteMap />
        <Footerhome />
      </div>
    );
  }
}

export default Home;
