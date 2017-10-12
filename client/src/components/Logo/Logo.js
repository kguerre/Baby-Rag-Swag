import React, { Component } from "react";
import "./Logo.css";
import { Grid, Image, Header } from "semantic-ui-react";

const GridExampleCentered = () => (
  <Grid>
      <Image src="/assets/images/baby-rag-logo.png" height="270" width="350" className="logo"/>
      <Header size="huge" className="title">Baby Rag Swag</Header>
  </Grid>
);

export default GridExampleCentered;
