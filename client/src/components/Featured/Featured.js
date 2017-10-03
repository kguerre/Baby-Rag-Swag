import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleCentered = () => (
  <Grid>
    <Grid.Row centered columns={4}>
      <Grid.Column>
        <Image src='/assets/images/baby2.jpeg' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/baby2.jpeg' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/baby2.jpeg' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/baby2.jpeg' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleCentered
