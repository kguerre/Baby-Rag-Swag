import React from "react";
import { Segment, Grid } from "semantic-ui-react";

const SegmentExampleInverted = () => (
  <Segment color="gray">
    <Grid>
      <Grid.Row columns={3}>
        <Grid.Column>
          <ul>
            <li>Stuff</li>
          </ul>
        </Grid.Column>
        <Grid.Column>
          <ul>
            <li>Stuff</li>
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
