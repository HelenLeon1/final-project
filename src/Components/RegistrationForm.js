
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';



export default function RegistrationForm () {

    const usersAPI = "http://localhost:3004/users";

    const [newUser, setNewUser] = useState({fullname: "", email: "", password: ""}); //the newUser state tracks changes in the input fields

    function createNewUser(event) {
        event.preventDefault();
      
        fetch(usersAPI, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            fullname: newUser.fullname,
            email: newUser.email,
            password: newUser.password
          })
        }).then(setNewUser({fullname: "", email: "", password: "", id: null }), alert("New Account was created!"))
    }


    const handleChange = (event) =>  {
        setNewUser({...newUser, [event.target.name]: event.target.value})
    }



    
    return (

    <div>
      <Container id="createAccountContainer">
        <Form id="createAccountForm">
          <Form.Group>
            <h3>Create Your Account</h3>
            <Form.Label className="d-flex justify-content-between">Full Name</Form.Label>
            <Form.Control type="text" value={newUser.fullname} name="fullname" onChange={handleChange} /><br></br> {/*tracks changes in the input field and sets newUser full name property to the value input by the user*/}
          </Form.Group>
          <Form.Group>
            <Form.Label className="d-flex justify-content-between">Email</Form.Label>
            <Form.Control type="email" value={newUser.email} name="email" onChange={handleChange} /><br></br>
          </Form.Group>
          <Form.Group>
            <Form.Label className="d-flex justify-content-betweeen">Password</Form.Label>
            <Form.Control type="text" value={newUser.password} name="password" onChange={handleChange} /><br></br>
          </Form.Group>
            <Button variant="primary" onClick={createNewUser}>Submit</Button> <br></br>  
          </Form>
        </Container>
     </div>
    )
}