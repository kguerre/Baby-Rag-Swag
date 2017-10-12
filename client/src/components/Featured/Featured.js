import React, { Component} from "react";
import { Grid, Image } from 'semantic-ui-react'
// import API from "../../utils/API";
import "./Featured.css";

const GridExampleCentered = () => (
  <Grid>
    <Grid.Row centered columns={6} className="featured-row">
      <Grid.Column className="featured-column">
        <Image src="/assets/images/brs7.jpeg" height="250" width="200" />
      </Grid.Column>
      <Grid.Column className="featured-column">
        <Image src="/assets/images/brs8.JPG" height="250" width="200" />
      </Grid.Column>
      <Grid.Column className="featured-column">
        <Image src="/assets/images/brs9.JPG" height="250" width="200"/>
      </Grid.Column>
      <Grid.Column className="featured-column">
        <Image src="/assets/images/brs1.JPG" height="250" width="200"/>
      </Grid.Column>
      <Grid.Column className="featured-column">
        <Image src="/assets/images/brs4.JPG" height="250" width="200"/>
      </Grid.Column>
      <Grid.Column className="featured-column">
        <Image src="/assets/images/brs10.JPG" height="250" width="200"/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridExampleCentered;
