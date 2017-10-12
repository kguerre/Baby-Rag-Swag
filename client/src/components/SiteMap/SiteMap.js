import React from "react";
import { Segment, Grid, Image } from "semantic-ui-react";
import "./SiteMap.css";

const SegmentExampleInverted = () => (
  <Segment color="grey">
    <Grid>
      <Grid.Row columns={3} className="sitemap">
        <Grid.Column>
          <ul>
            <li className="bold">Apparel</li>
            <li>Tops</li>
            <li>Bottoms</li>
            <li>Outerwear</li>
            <li>Accessories</li>
          </ul>
        </Grid.Column>
        <Grid.Column>
          <ul>
            <li className="bold">About KMC</li>
            <li className="bold">Contact Us</li>
          </ul>
        </Grid.Column>
        <Grid.Column>
          <a href="#"><Image src="assets/images/Facebook.png" className="social-media" /></a>
          <a href="#"><Image src="assets/images/Instagram.png" className="social-media" /></a>
          <a href="#"><Image src="assets/images/Twitter.png" className="social-media" /></a>
          <a href="#"><Image src="assets/images/Snapchat.png" className="social-media" /></a>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default SegmentExampleInverted;
