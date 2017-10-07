import React from "react";
import { Grid, Image } from "semantic-ui-react";
import Selections from "../../components/Selections";

const GridExampleVerticallyDivided = () => (
  <Grid divided="vertically">
    <Grid.Row columns={2}>
      <Grid.Column>
        <Image src="/assets/images/baby2.jpeg" />
      </Grid.Column>
      <Grid.Column>
        <h1>BRS Basic Tee</h1>
        <p>Lorem ipsum dolor sit amet, odio tantas epicurei nam cu, 
        elit sale deterruisset ei ius. Eum purto zril qualisque an, stet 
        natum quo ut, nobis saepe impetus usu id. Ut legere possit periculis 
        per, duo ferri voluptatibus definitiones et, pri no quis etiam. 
        Cu scaevola comprehensam eos, mea eligendi lobortis an, 
        ei vis libris deleniti posidonium. Ex etiam consequat eum.</p>
        <Selections />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridExampleVerticallyDivided;
