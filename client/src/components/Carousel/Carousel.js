import React, { Component} from "react";
import { Grid, Image, Reveal } from "semantic-ui-react";
import API from "../../utils/API";
import "./Carousel.css";

class GridExampleVerticallyDivided extends Component {
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
  let carouselImages = [];
  console.log(this.state.images.length);

  for (var i = 0; i < 3; i++) {
    carouselImages.push(
    <div columns={3}>
    <Grid.Row columns={3} >
      <Grid.Column className="carousel-column" key={i} >
        <Image src={this.state.images[i]} />
      </Grid.Column>
    </Grid.Row>
    </div>

    )
  }

  return carouselImages;
}

render() {
  console.log(this.renderImages());
  return (
    <div columns={3}>
      <Grid divided="vertically">
          <Grid.Row columns={3} >
            <Grid.Column className="carousel-column">
            {this.renderImages()}
            </Grid.Column>
          </Grid.Row>
      </Grid>
    </div>
  );
}

        // <Grid.Column className="carousel-column">
        //   <Reveal animated="small fade">
        //     <Reveal.Content visible>
        //       <Image src = {this.state.images}
        //       <Image src="/assets/images/baby1.jpeg" className="carousel" />
        //     </Reveal.Content>
        //     <Reveal.Content hidden>
        //       <Image src="/assets/images/baby2.jpeg" className="carousel" />
        //     </Reveal.Content>
        //   </Reveal>
        // </Grid.Column>
  //       <Grid.Column className="carousel-column">
  //         <Reveal animated="small fade">
  //           <Reveal.Content visible>
  //             <Image src="/assets/images/baby1.jpeg" className="carousel" />
  //           </Reveal.Content>
  //           <Reveal.Content hidden>
  //             <Image src="/assets/images/baby2.jpeg" className="carousel" />
  //           </Reveal.Content>
  //         </Reveal>
  //       </Grid.Column>
  //       <Grid.Column className="carousel-column">
  //         <Reveal animated="small fade">
  //           <Reveal.Content visible>
  //             <Image src="/assets/images/baby1.jpeg" className="carousel" />
  //           </Reveal.Content>
  //           <Reveal.Content hidden>
  //             <Image src="/assets/images/baby2.jpeg" className="carousel" />
  //           </Reveal.Content>
  //         </Reveal>
  //       </Grid.Column>
  //     </Grid.Row>
  //   </Grid>
  // </div>
};

export default GridExampleVerticallyDivided;
