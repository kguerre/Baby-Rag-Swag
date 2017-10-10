import React, { Component} from "react";
import { Grid, Image } from 'semantic-ui-react'
import API from "../../utils/API";
import "./Featured.css";

class GridExampleCentered extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
    this.renderImages = this.renderImages.bind(this);
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
  API.getProducts()
  .then(res => this.setState({ images: res.data.map((product) => product.image) }))
  .catch(err => console.log(err));
};

renderImages() {
  let featuredImages = [];
  console.log(this.state.images.length);

  for (var i = 0; i < this.state.images.length; i++) {
    featuredImages.push(
      <Grid>
        <Grid.Row centered columns={4} className="featured-row">
          <Grid.Column className="featured-column">
              <Image src={this.state.images[i]} />
          </Grid.Column>
        </Grid.Row>
      </Grid>

    )
  }

  return featuredImages;
}

render() {
  return(
  <Grid>
    <Grid.Row centered columns={4} className="featured-row">
      <Grid.Column className="featured-column">
          <Image src={this.renderImages()} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
 )
}

};
  // <Grid>
  //   <Grid.Row centered columns={4} className="featured-row">
  //     <Grid.Column className="featured-column">
  //       <Image src="/assets/images/baby2.jpeg" />
  //     </Grid.Column>
  //     <Grid.Column className="featured-column">
  //       <Image src="/assets/images/baby2.jpeg" />
  //     </Grid.Column>
  //     <Grid.Column className="featured-column">
  //       <Image src="/assets/images/baby2.jpeg" />
  //     </Grid.Column>
  //     <Grid.Column className="featured-column">
  //       <Image src="/assets/images/baby2.jpeg" />
  //     </Grid.Column>
  //   </Grid.Row>
  // </Grid>


export default GridExampleCentered
