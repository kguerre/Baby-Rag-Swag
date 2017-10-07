import React from "react";
import { Segment, Grid, Image, Row, Card, Icon } from "semantic-ui-react";

const SegmentExampleRaisedSegments = () => (
  <Grid>
    <Grid.Column width={3}>
      <Segment.Group raised>
        <Segment size="massive">
          Category
          <ul>
            <a href="#">
              <li>Tops</li>
            </a>
            <a href="#">
              <li>Bottoms</li>
            </a>
            <a href="#">
              <li>Outerwear</li>
            </a>
            <a href="#">
              <li>Accessories</li>
            </a>
          </ul>
        </Segment>
        <Segment size="massive">
          Price
          <ul>
            <li>$5-10</li>
            <li>$10-15</li>
            <li>$15-20</li>
            <li>$20-30</li>
            <li>$30+</li>
          </ul>
        </Segment>
        <Segment size="massive">
          Size
          <ul>
            <li>XS</li>
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
          </ul>
        </Segment>
      </Segment.Group>
    </Grid.Column>
    <Grid.Column width={13} className="body-content">
      <Grid.Row>
        <h1 size="massive">Apparel</h1>
      </Grid.Row>
      <Grid.Row columns={3}>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Card>
                <Image src="/assets/images/baby1.jpeg" />
                <Card.Content>
                  <Card.Header>BRS Basic Tee</Card.Header>
                  <Card.Description>$12</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Image src="/assets/images/baby1.jpeg" />
                <Card.Content>
                  <Card.Header>BRS Basic Tee</Card.Header>
                  <Card.Description>$12</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Image src="/assets/images/baby1.jpeg" />
                <Card.Content>
                  <Card.Header>BRS Basic Tee</Card.Header>
                  <Card.Description>$12</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Card>
                <Image src="/assets/images/baby1.jpeg" />
                <Card.Content>
                  <Card.Header>BRS Basic Tee</Card.Header>
                  <Card.Description>$12</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Image src="/assets/images/baby1.jpeg" />
                <Card.Content>
                  <Card.Header>BRS Basic Tee</Card.Header>
                  <Card.Description>$12</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Image src="/assets/images/baby1.jpeg" />
                <Card.Content>
                  <Card.Header>BRS Basic Tee</Card.Header>
                  <Card.Description>$12</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Row>
    </Grid.Column>
  </Grid>
);

export default SegmentExampleRaisedSegments;

