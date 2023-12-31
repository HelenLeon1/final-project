
import RegistrationForm from "../Components/RegistrationForm";
import SignInForm from "../Components/SignInForm";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "../Components/Footer";

export default function SignInPage () {

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <RegistrationForm/>
                    </Col>
                    <Col>
                        <SignInForm/>
                    </Col>
                </Row> 
            </Container>
            <Footer />
        </div>
    )
}