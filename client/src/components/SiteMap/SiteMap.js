import React from "react";
import { Footer } from "react-materialize";
// import { Link } from "react-router-dom";

// export const SiteMap = () => (

// );

const SiteMap = () => (
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Site Map</h5>
        </div>
        <div class="col l4 offset-l2 s12">
          <ul>
            <li>
              <a class="grey-text text-lighten-3" href="#!">
                Link 1
              </a>
            </li>
            <li>
              <a class="grey-text text-lighten-3" href="#!">
                Link 2
              </a>
            </li>
            <li>
              <a class="grey-text text-lighten-3" href="#!">
                Link 3
              </a>
            </li>
            <li>
              <a class="grey-text text-lighten-3" href="#!">
                Link 4
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteMap;
