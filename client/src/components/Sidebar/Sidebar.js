import React, { Component} from "react";
import API from "../../utils/API";
import { Segment, Grid, Image, Row, Card, Icon } from "semantic-ui-react";
import {Link} from "react-router-dom";

class SegmentExampleRaisedSegments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      title: "",
      price: "",
      product_id: "",
    };

    this.renderImages = this.renderImages.bind(this);
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
  API.getProducts()
  .then(res => this.setState({ product_id: res.data.map((product)=> product.product_id), title: res.data.map((product)=> product.title), price: res.data.map((product)=> product.price), images: res.data.map((product)=> product.image)}))
  .catch(err => console.log(err));
};

renderImages() {
  let clothingImages= [];

    for (var i = 0; i < 6; i++) {
    clothingImages.push(

            <Link to={"/type/" + this.state.product_id[i]}>
              <Card>
                <Image src={this.state.images[i]} />
                <Card.Content>
                  <Card.Header> {this.state.title[i]} </Card.Header>
                  <Card.Description> {this.state.price[i]} </Card.Description>
                </Card.Content>
              </Card>
            </Link>

    )
  console.log(this.state.images[i])
  console.log(this.state.images.length)

}

    return clothingImages;
}

render() {
  return (

    <Grid>
      <Grid.Column width={3}>
        <Segment.Group raised>
          <Segment size="massive">
            Category
            <ul>
              <a href="/Clothes">
                <li>Tops</li>
              </a>
              <a href="/Clothes">
                <li>Bottoms</li>
              </a>
              <a href="/Clothes">
                <li>Outerwear</li>
              </a>
              <a href="/Clothes">
                <li>Accessories</li>
              </a>
            </ul>
          </Segment>
          <Segment size="massive">
            Price
            <ul>
              <li>$5-10</li>
              <li>$10-15</li>
              <li>$15-20</li>
              <li>$20-30</li>
              <li>$30+</li>
            </ul>
          </Segment>
          <Segment size="massive">
            Size
            <ul>
              <li>XS</li>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
            </ul>
          </Segment>
        </Segment.Group>
      </Grid.Column>

  <Grid.Column width={13} className="body-content">
    <Grid.Row>
      <h1 size="massive">Apparel</h1>
    </Grid.Row>
    <Grid.Row columns={3}>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>

            {this.renderImages()}

        </Grid.Column>
        </Grid.Row>
      </Grid>
    </Grid.Row>
  </Grid.Column>
</Grid>


  )
 }
};



  //
  //   <Grid.Column width={13} className="body-content">
  //     <Grid.Row>
  //       <h1 size="massive">Apparel</h1>
  //     </Grid.Row>
  //     <Grid.Row columns={3}>
  //       <Grid>
  //         <Grid.Row columns={3}>
  //           <Grid.Column>
  //             <Card>
  //               <Image src="/assets/images/baby1.jpeg" />
  //               <Card.Content>
  //                 <Card.Header>BRS Basic Tee</Card.Header>
  //                 <Card.Description>$12</Card.Description>
  //               </Card.Content>
  //             </Card>
  //           </Grid.Column>
  //           <Grid.Column>
  //             <Card>
  //               <Image src="/assets/images/baby1.jpeg" />
  //               <Card.Content>
  //                 <Card.Header>BRS Basic Tee</Card.Header>
  //                 <Card.Description>$12</Card.Description>
  //               </Card.Content>
  //             </Card>
  //           </Grid.Column>
  //           <Grid.Column>
  //             <Card>
  //               <Image src="/assets/images/baby1.jpeg" />
  //               <Card.Content>
  //                 <Card.Header>BRS Basic Tee</Card.Header>
  //                 <Card.Description>$12</Card.Description>
  //               </Card.Content>
  //             </Card>
  //           </Grid.Column>
  //         </Grid.Row>
  //         <Grid.Row columns={3}>
  //           <Grid.Column>
  //             <Card>
  //               <Image src="/assets/images/baby1.jpeg" />
  //               <Card.Content>
  //                 <Card.Header>BRS Basic Tee</Card.Header>
  //                 <Card.Description>$12</Card.Description>
  //               </Card.Content>
  //             </Card>
  //           </Grid.Column>
  //           <Grid.Column>
  //             <Card>
  //               <Image src="/assets/images/baby1.jpeg" />
  //               <Card.Content>
  //                 <Card.Header>BRS Basic Tee</Card.Header>
  //                 <Card.Description>$12</Card.Description>
  //               </Card.Content>
  //             </Card>
  //           </Grid.Column>
  //           <Grid.Column>
  //             <Card>
  //               <Image src="/assets/images/baby1.jpeg" />
  //               <Card.Content>
  //                 <Card.Header>BRS Basic Tee</Card.Header>
  //                 <Card.Description>$12</Card.Description>
  //               </Card.Content>
  //             </Card>
  //           </Grid.Column>
  //         </Grid.Row>
  //       </Grid>
  //     </Grid.Row>
  //   </Grid.Column>
  // </Grid>


export default SegmentExampleRaisedSegments;
