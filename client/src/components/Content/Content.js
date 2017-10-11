import React, { Component} from "react";
import {Link} from "react-router-dom";
import API from "../../utils/API";
import { Grid, Image } from "semantic-ui-react";
import Selections from "../../components/Selections";

class GridExampleVerticallyDivided extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      title: "",
      price: "",
      description: ""
    };

    
}

  componentDidMount() {

  }

  getItem = () => {
    API.getItem()
    .then(res => {
      this.setState({ description: res.data.product.description,
                                  title: res.data.product.title,
                                  price: res.data.product.price,
                                  images: res.data.product.image})
                                  console.log("hi",res);
                                })
    .catch(err => console.log(err));
  }

  getImage() {

let image = [];
  image.push(
    <Grid divided="vertically">
      <Grid.Row columns={2}>
        <Grid.Column>
          <Image src={this.state.images} />
        </Grid.Column>
        <Grid.Column>
          <h1>{this.state.title}</h1>
          <p>{this.state.description}</p>
          <Selections />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
    return image;

  }

render() {
  return(
    <Grid divided="vertically">
    <Grid.Row columns={2}>
    {this.getImage()};
    </Grid.Row>
  </Grid>
)
}

};

export default GridExampleVerticallyDivided;
