import _ from "lodash";
import React from "react";
import { Button, Header, Icon, Image, Modal, Item, Grid, Row } from "semantic-ui-react";

const ModalExampleScrollingContent = () => (
  <Modal
    trigger={
      <Button animated="vertical">
        <Button.Content hidden>Cart</Button.Content>
        <Button.Content visible>
          <Icon name="shop" />
        </Button.Content>
      </Button>
    }
  >
    <Modal.Header>Shopping Cart</Modal.Header>
    <Modal.Content image scrolling>
      <Grid>
        <Grid.Row>
          <Item.Group relaxed>
            <Item>
              <Item.Image size="small" src="/assets/images/baby1.jpeg" />

              <Item.Content verticalAlign="middle">
                <Item.Header>BRS Basic Tee</Item.Header>
                <Item.Description>Quantity: 1</Item.Description>
                <Item.Description>Price: $10</Item.Description>
                <Item.Extra>
                  <Button floated="right">Remove</Button>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Row>
        <Grid.Row>
          <Item.Group relaxed>
            <Item>
              <Item.Image size="small" src="/assets/images/baby1.jpeg" />

              <Item.Content verticalAlign="middle">
                <Item.Header>BRS Basic Tee</Item.Header>
                <Item.Description>Quantity: 1</Item.Description>
                <Item.Description>Price: $10</Item.Description>
                <Item.Extra>
                  <Button floated="right">Remove</Button>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Row>
        <Grid.Row>
          <Item.Group relaxed>
            <Item>
              <Item.Image size="small" src="/assets/images/baby1.jpeg" />

              <Item.Content verticalAlign="middle">
                <Item.Header>BRS Basic Tee</Item.Header>
                <Item.Description>Quantity: 1</Item.Description>
                <Item.Description>Price: $10</Item.Description>
                <Item.Extra>
                  <Button floated="right">Remove</Button>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Row>
      </Grid>
    </Modal.Content>
    <Modal.Actions>
      <Button primary>
        Proceed to Checkout <Icon name="right chevron" />
      </Button>
    </Modal.Actions>
  </Modal>
);

export default ModalExampleScrollingContent;
