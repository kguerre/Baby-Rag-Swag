import React from "react";
import { Segment, Grid, Row } from "semantic-ui-react";
import "./Footer.css";

const SegmentExampleColored = () => (
  <Grid.Row>
    <Segment inverted color="black" size="large" className="footer">Copyright &copy; 2017 KMC</Segment>
  </Grid.Row>
);

export default SegmentExampleColored;
