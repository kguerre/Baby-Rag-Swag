import React from "react";
import { Footer } from "react-materialize";

// export const Footer = () => (

// );
const Footerhome = () => (
  <Footer
    copyrights="Footer goes here"
    moreLinks={
      <a className="grey-text text-lighten-4 right" href="#!">
        Logo will go here
      </a>
    }
  />
);

export default Footerhome;
