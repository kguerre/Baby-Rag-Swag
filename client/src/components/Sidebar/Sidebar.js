import React, { Component} from "react";
import API from "../../utils/API";
import { Segment, Grid, Image, Row, Card, Icon } from "semantic-ui-react";
import {Link} from "react-router-dom";

class SegmentExampleRaisedSegments extends Component {
  state = {
    products: [],
    product_id: "",
    title: "",
    image: "",
    price: "",
  };


  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    console.log(this.state.image)
  API.getProducts()
  .then(res => this.setState({ products: res.data, product_id: "", title: "", image: "", price: "" }))
  .catch(err => console.log(err))
};

render() {
  return <Grid>
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
            {this.state.products.map(product => (
              <Grid.Column>
              <Link to={"/product/" + product.product_id}>
                <Card key={product.product_id}>
                  <Image src={product.image} />
                  <Card.Content>
                    <Card.Header>{product.title}</Card.Header>
                    <Card.Description>${product.price}</Card.Description>
                  </Card.Content>
                </Card>
                </Link>
              </Grid.Column>
               ))}
            </Grid.Row>
          </Grid>
        </Grid.Row>
      </Grid.Column>
    </Grid>;
 }
};


export default SegmentExampleRaisedSegments;
