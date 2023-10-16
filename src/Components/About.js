import React from 'react'
import Container from 'react-bootstrap/esm/Container';


export default function About() {


  return (
    <div>
      <Container>
        <h3 id="about-title">About</h3>

        <p className="about-text"><span className="highlighted-text">Beyond Our Borders</span> is a travel and consulting agency that specializes in cultural 
        immersion programs and sustainable travel initiatives. We help local communites by fostering travel opportunities 
        that will benefit their local organizations. We also give you the opportunity to learn local customs and visit some uncommon 
        but equally gorgeous sights all over the world. Please be on the lookout as we will be adding more content to our website soon with 
        more information!</p>
        
        <p className="about-text"> We donate 10% of our proceeds to help people who are facing poverty and
        unsafe conditions and we provide them with ongoing assitance to help build and fund their small businesses. If you would like to take the road less traveled, follow us on our journey to put money 
        back in the hands of the people who need it most, while also enjoying an exciting and unique travel experience.</p>
      </Container>
    </div>
  )
}
