import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const ClothesHeader = () => (
  <Segment clearing>
    <Header as='h1' floated='right'>
        BRS
    </Header>
    <Header as='h1' floated='left'>
      Clothing
    </Header>
  </Segment>
)

export default ClothesHeader;
