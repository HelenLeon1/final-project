import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Waterfalls from '../Images/waterfalls.jpg';
import Temples from '../Images/temples1.jpg';
import Amsterdam from '../Images/amsterdam.jpg';


export default function ImageCarousel() {
  return (
    <div>
        <Container>
         <Carousel fade>
      <Carousel.Item>
        <Image src={Waterfalls} alt="waterfalls" fluid/>
        <Carousel.Caption>
          <h3>Iguazu Falls</h3>
          <p>Enjoy the Astounding Cascades of Argentina</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Amsterdam} alt="amsterdam" fluid/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Temples} alt="temples" fluid/>
        <Carousel.Caption>
          <h3>Temples of Bagan</h3>
          <p>
          Explore the Facinating Temples of Myanmar
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
    </div>
  )
}
