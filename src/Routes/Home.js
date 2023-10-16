
import Container from "react-bootstrap/esm/Container";
import About from "../Components/About";
import Contact from "../Components/Contact";
import ImageCarousel from "../Components/ImageCarousel";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";




export default function Home () {
    
    return (
        <div className="home">
            <h3 id="welcome-heading">Welcome to Beyond Our Borders!</h3>
            <ImageCarousel />
            {/*
            <About />
            <Contact />
    */}
            
            <Container>
                <Row>
                    <Col>
                        <About />
                    </Col>
                    <Col>
                        <Contact />
                    </Col>
                </Row>
            </Container>
        
        </div>
    )
    
}