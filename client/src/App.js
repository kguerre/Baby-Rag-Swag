import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Nav from "./components/Nav";
// import Menu from "../components/Menu";
// import helpers from "../../utils/helpers";
// import { Link } from "react-router-dom";
import Carouselimage from "./components/Carousel";
import Featured from "./components/Featured";
import SiteMap from "./components/SiteMap";
import Footerhome from "./components/Footer";


class App extends Component {
  // render() {
  //   return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
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

export default App;
