import React from "react";
import { Carousel } from "react-materialize";
import "./Carousel.css";
// export const Carousel = () => (

// );

const Carouselimage = () => (
  <Carousel
    options={{ fullWidth: true }}
    images={[
      "https://lorempixel.com/800/400/food/1",
      "https://lorempixel.com/800/400/food/2",
      "https://lorempixel.com/800/400/food/3",
      "https://lorempixel.com/800/400/food/4",
      "https://lorempixel.com/800/400/food/5"
    ]}
  />
);

export default Carouselimage;
