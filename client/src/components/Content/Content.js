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
    API.getItem(this.props.productId)
      .then(res => {
        console.log(res.data);
        this.setState({
          description: res.data.description,
          title: res.data.title,
          price: res.data.price,
          image: res.data.image
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image src={this.state.image} />
          </Grid.Column>
          <Grid.Column>
            <h1>{this.state.title}</h1>
            <h3>${this.state.price}</h3>
            <p>{this.state.description}</p>
            <Selections />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
};

export default GridExampleVerticallyDivided;
