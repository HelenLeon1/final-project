
import { React, useState } from 'react'
import UpdateModal from './UpdateModal';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';


export default function SignInForm() {

    const usersAPI = "http://localhost:3004/users";

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("")
 
    const [authenticatedUserId, setAuthenticatedUserId] = useState("");

    const [user, setUser] = useState([{fullname: "", email: "", password: "", id: null}]); 
    

    async function authenticateUser(event) {
      event.preventDefault();
        
        const res = await fetch(usersAPI) 
        const users = await res.json()

      //filters the user input that matches with the corresponding user from the fetched data in the usersAPI, stores it in filteredUserArray 
       const filteredUserArray = users.filter(user => user.email === emailInput && user.password === passwordInput);

       if(filteredUserArray.length === 1) {
        const filteredUser = filteredUserArray[0];
        alert("Login Successful!");
        setAuthenticatedUserId(filteredUser.id); //sets the AuthenticatedUserId state to the id of the filtered user
        setEmailInput("") 
        setPasswordInput("")
       } else {
        alert("Login Attempt Failed. Invalid Login Credentials")
        setAuthenticatedUserId("")
        setEmailInput("")
        setPasswordInput("")
       }
    }


    const getUser = async (event, id) => {
      event.preventDefault()
      const response = await fetch(`${usersAPI}/${id}`);
      const data = await response.json()
      setUser(data)
    }


    function deleteUser(id) {
      fetch(`${usersAPI}/${id}` , {
          method: 'Delete'
        }).then(setUser({fullname: "", email: "", password: "", id: null }))
  }


    
  return (
    <div>
      <Container id="signIn-form-container">
        <Form>
            <h3>Log In</h3>

            <Form.Label className="d-flex justify-content-between">Email</Form.Label>
            <Form.Control id="email-input" type="text" value={emailInput} name="email" onChange={(e) => setEmailInput(e.target.value)}/><br></br>

            <Form.Label className="d-flex justify-content-between">Password</Form.Label>
            <Form.Control type="text" value={passwordInput} name="password" onChange={(e) => setPasswordInput(e.target.value)}/><br></br>

            <Button id="signIn-button" onClick={(event) => authenticateUser(event)}>Enter</Button> <br></br>  {/*calls the authenticateUserfunction to validate the user input when the user clicks the button*/}

            <Button id="profile-button" disabled={authenticatedUserId === ""} onClick={(event) => getUser(event, authenticatedUserId)}>View Profile</Button>   
        </Form>
      </Container>


      <Container id="profile">
        {authenticatedUserId === user.id ? //conditionally renders the profile after validation
        <div key={user.id}>
          <h2>Your Profile</h2>
          <ListGroup>
           <ListGroup.Item variant="primary">Full Name: {user.fullname}</ListGroup.Item>
            <ListGroup.Item variant="primary">Email: {user.email}</ListGroup.Item>
            <ListGroup.Item variant="primary">Password: {user.password}</ListGroup.Item>
          </ListGroup>
          <Button id="delete-button" variant="danger" onClick={() => deleteUser(user.id)}>Delete Account</Button>
          <UpdateModal user={user} setUser={setUser}/>
         
        </div>
        : console.log("User is not logged in. Unable to view profile at this time")}
      </Container> 
    </div>
  )
}

