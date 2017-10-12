import _ from "lodash";
import {Link} from "react-router-dom";
import React from "react";
import { Button, Header, Icon, Image, Modal, Item, Grid, Row } from "semantic-ui-react";

const ButtonExampleAnimated = () => (
 <Link to={"/checkout/"}>   
  <Button animated="vertical">
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name="shop" />
      </Button.Content>
    </Button>
  </Link>  
);

export default ButtonExampleAnimated;
