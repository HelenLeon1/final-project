import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';


export default function NavBar() {

    return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link  as={NavLink}  to="/registrationform">Registration Form</Nav.Link>
        </Nav.Item>
    </Nav>
    );
}