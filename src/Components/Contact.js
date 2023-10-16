import React from 'react'
import Container from 'react-bootstrap/esm/Container';

export default function Contact() {
  return (
    <div>
      <Container>
        <h3 id="contact-title">Contact Us</h3>

        <p className="contact-text">If you would like to learn more about the programs that we offer and the impact they have on local 
        communities, please feel free to contact us by phone at <span className="highlighted-text">(555) 555-5555</span> or through email at <span className="highlighted-text">beyondourborders@gmail.com.</span> You can 
        also create an account on our Sign In page where you will recieve a newsletter through email every 2 weeks and we will send you a package 
        with offers and information over the mail to help you choose a plan.</p>

        <p className="contact-text">If you choose to opt out of our various social and travel programs, we can 
        also provide you with a consultant to help you plan your own trip. We offer popular destinations as well as off the beaten path locations in the more than 25+ location we specialize in across the world. The contact information
        for our independent travel consultants is <span className="highlighted-text">(123) 456-7890</span> or <span className="highlighted-text">consultants.beyondourborders@gmail.com.</span></p>
        </Container>
    </div>
  )
}
