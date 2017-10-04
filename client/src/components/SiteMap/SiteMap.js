import React from "react";
import { Segment, Grid } from "semantic-ui-react";

const SegmentExampleInverted = () => (
  <Segment color="gray">
    <Grid>
      <Grid.Row columns={3}>
        <Grid.Column>
          <ul>
            <li>Apparel</li>
            <li>Tops</li>
            <li>Bottoms</li>
            <li>Outerwear</li>
            <li>Accessories</li>
          </ul>
        </Grid.Column>
        <Grid.Column>
          <ul>
            <li>About KMC</li>
            <li>Contact Us</li>
          </ul>
        </Grid.Column>
        <Grid.Column>
          <ul>
            <li>Stuff</li>
          </ul>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default SegmentExampleInverted;
