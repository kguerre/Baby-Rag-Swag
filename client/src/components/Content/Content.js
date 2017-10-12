import React, { Component} from "react";
import {Link} from "react-router-dom";
import API from "../../utils/API";
import { Grid, Image } from "semantic-ui-react";
import Selections from "../../components/Selections";

class GridExampleVerticallyDivided extends Component {
  state = {
    product: {}
  };
  
  componentDidMount() {
    console.log(this.props.match)
    API.getItem(this.props.match.params.id)
      .then(res => this.setState({ product: res.data }))
      .then(console.log(this.state))
      .catch(err => console.log(err));
  }
  
  render() {
    return <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image src={this.state.product.image} />
          </Grid.Column>
          <Grid.Column>
            <h1>{this.state.product.title}</h1>
            <h3>${this.state.product.price}</h3>
            <p>
              {this.state.product.description}
            </p>
            <Selections />
          </Grid.Column>
        </Grid.Row>
      </Grid>
  }
};

export default GridExampleVerticallyDivided;
