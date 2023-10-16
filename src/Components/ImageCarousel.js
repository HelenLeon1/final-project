import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Waterfalls from '../Images/waterfalls.jpg';
import Temples from '../Images/temples1.jpg';
import Positano from '../Images/positano.jpg'


export default function ImageCarousel() {
  return (
    <div>
    <Container>
      <Carousel className="carousel" fade>
      <Carousel.Item className="carousel-item">
        <Image src={Waterfalls} alt="waterfalls" fluid/>
        <Carousel.Caption className="carousel-caption">
          <h3 className="carousel-heading">Iguazú Falls</h3>
          <p>Enjoy the Astounding Cascades of Argentina</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <Image src={Positano} alt="amsterdam" fluid/>
        <Carousel.Caption className="carousel-caption">
          <h3 className="carousel-heading">Amalfi Coast</h3>
          <p>Marvel at the picturesque beaches and sights of Positano</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <Image src={Temples} alt="temples" fluid/>
        <Carousel.Caption className="carousel-caption">
          <h3 className="carousel-heading">Temples of Bagan</h3>
          <p>Explore the Facinating Temples of Myanmar</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
    </div>
  )
}
