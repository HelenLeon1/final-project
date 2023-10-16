import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';


export default function NavBar() {

    return (
    <Nav id="navbar" justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link  as={NavLink}  to="/TravelTips">Travel Tips</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link  as={NavLink}  to="/SignIn">Sign In</Nav.Link>
        </Nav.Item>
    </Nav>
    );
}