import React from 'react';
import {Carousel } from 'react-bootstrap';
import image1 from './../assets/images/img1.jpg';
import image3 from './../assets/images/img3.jpg';
import image4 from './../assets/images/img4.jpg';

const Carouselcontainer = () =>{
    return(
        <Carousel controls={false} fade={true} pause={false}>
  <Carousel.Item interval={2000}>
    <img
      className="slide_image"
      src={image1}
      alt="Dog 1"
    />
    <Carousel.Caption>
      <h3>Save Dogs</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="slide_image"
      src={image3}
      alt="Dog 2"
    />
    <Carousel.Caption>
      <h3>Love Dogs</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img 
      className="slide_image"
      src={image4}
      alt="Dog 3"
    />
    <Carousel.Caption>
      <h3>Protect Dogs</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default Carouselcontainer;