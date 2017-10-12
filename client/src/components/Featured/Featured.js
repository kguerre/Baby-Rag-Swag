import React, { Component} from "react";
import { Grid, Image } from 'semantic-ui-react'
// import API from "../../utils/API";
import "./Featured.css";

const GridExampleCentered = () => (
  <Grid>
    <Grid.Row centered columns={4} className="featured-row">
      <Grid.Column className="featured-column">
        <Image src="/assets/images/baby2.jpeg" height="250" />
      </Grid.Column>
      <Grid.Column className="featured-column">
        <Image src="/assets/images/baby2.jpeg" height="250" />
      </Grid.Column>
      <Grid.Column className="featured-column">
        <Image src="/assets/images/baby2.jpeg" height="250" />
      </Grid.Column>
      <Grid.Column className="featured-column">
        <Image src="/assets/images/baby2.jpeg" height="250"/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridExampleCentered;
