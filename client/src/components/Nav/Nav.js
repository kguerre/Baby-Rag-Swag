import React from "react";
import { Navbar, NavItem } from "react-materialize";
import "./Nav.css";
// import { Link } from "react-router-dom";

// export const Nav = () => (

// );

const Nav = () => (
  <Navbar brand="Baby Rag Swag" right>
    <NavItem href="get-started.html">Sign In Link</NavItem>
    <NavItem href="components.html">Shopping Cart here</NavItem>
  </Navbar>
);
export default Nav;
