import React, { Component } from "react";
import Nav from "../../components/Nav";
import Menu from "../../components/Menu";
// import helpers from "../../utils/helpers";
// import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import Featured from "../../components/Featured";
import SiteMap from "../../components/SiteMap";
import Footer from "../../components/Footer";

class Home extends Component {






  render() {
    return <div>
        <Nav />
        <Menu />
        <Carousel />
        <Featured />
        <SiteMap />
        <Footer />
      </div>
  }
}

export default Home;
