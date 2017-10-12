import React, { Component } from "react";
import Nav from "../../components/Nav";
import Menu from "../../components/Menu";
// import helpers from "../../utils/helpers";
// import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import Logo from "../../components/Logo";
import Extra from "../../components/Extra";
import Featured from "../../components/Featured";
import SiteMap from "../../components/SiteMap";
import Footer from "../../components/Footer";

class Home extends Component {

  render() {
    return <div>

        <Menu />
        <Logo />
        <Carousel />
        <Extra />
        <Featured />
        <SiteMap />

      </div>
  }
}

export default Home;
