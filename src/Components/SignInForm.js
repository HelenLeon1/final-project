
import { React, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

export default function SignInForm() {

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("")

    const usersAPI = "http://localhost:3004/users";

    async function authenticateUser (event) {
        event.preventDefault();
        
        const res = await fetch(usersAPI) 
        const users = await res.json()

       const filteredUserArray = users.filter(user => user.email === emailInput && user.password === passwordInput);

       let loginStatus = (filteredUserArray.length === 0 ? "User Is Invalid" : filteredUserArray.length === 1 ? "Login Successful" : "Error Occurred")

       console.log(loginStatus);

       return <div>({loginStatus})</div>;  
    }


  return (
    <div>
      <Container id="signInForm">
        <Form >
            <h3>Sign In</h3>

            <Form.Label>Email</Form.Label>
            <Form.Control type="text" value={emailInput} name="email" onChange={(e) => setEmailInput(e.target.value)} /><br></br>

            <Form.Label>Password</Form.Label>
            <Form.Control type="text" value={passwordInput} name="password" onChange={(e) => setPasswordInput(e.target.value)} /><br></br>

            <Button onClick={(event) => authenticateUser(event)}>Enter</Button> <br></br>  
        </Form>
        </Container>
    </div>
  )
}
