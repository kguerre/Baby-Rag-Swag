import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Grid, Image, Button } from "semantic-ui-react";
import Selections from "../../components/Selections";

class GridExampleVerticallyDivided extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      cart: {}
    };

    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
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

  handleAddToCart = event => {
    // gather data put into schema -> send it as a update request
    // request to update
    //() => this.getCart(this.props.id)
    event.preventDefault();
    API.getCart()
      .then(res => {
        this.setState({
          description: res.data.description,
          title: res.data.title,
          price: res.data.price,
          image: res.data.image
        })
      })
      .then(alert("This item has been added to your cart."))
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
            <p>{this.state.description}</p>
            <Selections />
            <Button onClick={this.handleAddToCart}>Add to Cart</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default GridExampleVerticallyDivided;
