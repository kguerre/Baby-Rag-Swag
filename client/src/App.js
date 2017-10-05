import React, { Component } from 'react';
// import './App.css';
import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Shop from "./components/Shop/Shop.js";
import Pages from "./components/Pages/Pages.js";


class App extends Component {
  render() {
    return (
     <div>
       <Header/>
       <Shop/>
       <Sidebar/>
       <Pages/>
     </div>
    );
  }
}

export default App;
