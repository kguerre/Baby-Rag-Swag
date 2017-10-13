import React from "react";
import { Header, Segment, Grid, Column } from "semantic-ui-react";
import "./Extra.css";

const square = { width: 175, height: 175 };

const SegmentExampleCircular = () => (
  <Grid centered columns={3}>
   <Grid.Column>
    <Segment circular style={square}>
      <Header as="h2">
        Huge Sale!
        <Header.Subheader>Tees starting at $10.99</Header.Subheader>
      </Header>
    </Segment>
    <Segment circular inverted style={square}>
      <Header as="h2" inverted>
        Buy Yours Now
        <Header.Subheader></Header.Subheader>
      </Header>
    </Segment>
   </Grid.Column>
   <Grid.Column>
    <Header size="huge" className="subtitle">We don't sell clothes. It's a lifestyle.</Header>
   </Grid.Column>
   <Grid.Column>
    <Segment circular style={square}>
      <Header as="h2">
        Check out our Shop
        <Header.Subheader></Header.Subheader>
      </Header>
    </Segment>
    <Segment circular inverted style={square}>
      <Header as="h2" inverted>
        New Arrivals
        <Header.Subheader>Prices starting at $20</Header.Subheader>
      </Header>
    </Segment>
    </Grid.Column>
  </Grid>
);

export default SegmentExampleCircular;
