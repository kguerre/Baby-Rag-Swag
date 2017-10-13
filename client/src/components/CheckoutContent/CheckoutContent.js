import React from "react";
import { Grid, Image, Item, Button, Header } from "semantic-ui-react";
import "./CheckoutContent.css";


const GridVerticallyDivided = () => (
  <Grid divided="vertically">
    <Grid.Row columns={3}>
      <Grid.Column />
      <Grid.Column>
        <Item.Group relaxed>
          <Item>
            <Item.Image size="small" src="/assets/images/bugstee.jpg" />

            <Item.Content verticalAlign="middle">
              <Item.Header>BRS Buggy Tee</Item.Header>
              <Item.Description>Quantity: 1</Item.Description>
              <Item.Description>Price: $24</Item.Description>
              <Item.Extra>
                <Button floated="right">Remove</Button>
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size="small" src="/assets/images/penguinonesie.jpg" />

            <Item.Content verticalAlign="middle">
              <Item.Header>BRS Penguin Onesie</Item.Header>
              <Item.Description>Quantity: 1</Item.Description>
              <Item.Description>Price: $30</Item.Description>
              <Item.Extra>
                <Button floated="right">Remove</Button>
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size="small" src="/assets/images/bluepants.jpg" />

            <Item.Content verticalAlign="middle">
              <Item.Header>Basic BRS Baby Blues</Item.Header>
              <Item.Description>Quantity: 1</Item.Description>
              <Item.Description>Price: $30</Item.Description>
              <Item.Extra>
                <Button floated="right">Remove</Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <Header size="medium">Your Total: </Header>
        <Header size="medium" floated="right">
          $84.00
        </Header>
        <Button fluid className="purchase">
          Purchase
        </Button>
      </Grid.Column>
      <Grid.Column />
    </Grid.Row>
  </Grid>
);

export default GridVerticallyDivided;
