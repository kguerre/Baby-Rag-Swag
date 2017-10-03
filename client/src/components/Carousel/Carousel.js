import React from "react";
import { Slider, Slide } from "react-materialize";
// import { Carousel } from "react-materialize";
import "./Carousel.css";
// export const Carousel = () => (

// );

const Carouselimage = () => (
  // <Carousel
  //   options={{ fullWidth: true }}
  //   images={[
  //     "https://lorempixel.com/800/400/food/1",
  //     "https://lorempixel.com/800/400/food/2",
  //     "https://lorempixel.com/800/400/food/3",
  //     "https://lorempixel.com/800/400/food/4",
  //     "https://lorempixel.com/800/400/food/5"
  //   ]}
  // />
  <Slider>
    <Slide
      src="http://lorempixel.com/580/250/nature/1"
      title="This is our big Tagline!"
    >
      Here's our small slogan.
    </Slide>
    <Slide
      src="http://lorempixel.com/580/250/nature/2"
      title="Left aligned Caption"
      placement="left"
    >
      Here's our small slogan.
    </Slide>
    <Slide
      src="http://lorempixel.com/580/250/nature/3"
      title="Right aligned Caption"
      placement="right"
    >
      Here's our small slogan.
    </Slide>
  </Slider>
);

export default Carouselimage;
