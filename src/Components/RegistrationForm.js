
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';



export default function RegistrationForm () {

    const usersAPI = 'http://localhost:3004/users';

    const [user, setUser] = useState([{fullname: "", email: "", password: "", id: null}]);
    const [newUser, setNewUser] = useState({fullname: "", email: "", password: "", id: null });
    const [updateUser, setUpdateUser] = useState({fullname: "", email: "", password: "", id: "" });

    const [show, setShow] = useState(false);

    
    const getUser = async (event, id) => {
        event.preventDefault()
        console.log(id);
        const response = await fetch(`${usersAPI}/${id}`);
        const data = await response.json()
        setUser(data)
      }
    
    
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
      }) 
      
    }

    function deleteUser(id) {
        fetch(`${usersAPI}/${id}` , {
            method: 'Delete'
          })    
    }

    function updateUserData(event) {
        event.preventDefault();
        fetch(`${usersAPI}/${Number(updateUser.id)}`, {
            method: 'PUT',
            body: JSON.stringify({
                fullname: updateUser.fullname,
                email: updateUser.email,
                password: updateUser.password
            }),
            headers: {
              "Content-Type": "application/json"
            }
          }).then((event) => getUser(event, Number(updateUser.id)))
    }


    const handleChange = (event) =>  {
        setNewUser({...newUser, [event.target.name]: event.target.value})
    }


    const handleUpdate = (event) => {
        setUpdateUser({...updateUser, [event.target.name]: event.target.value})
    }
    
    const handleClose = () => setShow(false);
 
    const handleShow = () => setShow(true);

    



    return (

    <div>
      <Container id="createAccountContainer">
        <Form id="createAccountForm">
          <Form.Group>
            <h3>Create Your Account</h3>
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" value={newUser.fullname} name="fullname" onChange={handleChange} /><br></br>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={newUser.email} name="email" onChange={handleChange} /><br></br>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" value={newUser.password} name="password" onChange={handleChange} /><br></br>
          </Form.Group>
            <Button variant="primary" onClick={createNewUser}>Submit</Button> <br></br>  
          </Form>
        
        <Form id="viewAccount">
          <h4>View Your New Account</h4>
              <Form.Label>Enter the id of your profile</Form.Label>
              <Form.Control type="text" name="id" onChange={handleChange} />
              <Button onClick={(event) => getUser(event, newUser.id)}>Enter</Button> <br></br>
        </Form>

           
        <div id="profile" key={user.id}>
            <h3>Your Profile</h3>
            FullName: {user.fullname} <br></br>
            Email: {user.email} <br></br>
            Password: {user.password} <br></br>
            <Button variant="danger" onClick={() => deleteUser(user.id)}>Delete Account</Button> 
            <Button variant="primary" onClick={handleShow}>
              Update Account
            </Button>
        </div>
        </Container>

        


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Changes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form id="updateForm">
        <h3>Update Form</h3>
            <Form.Label>Enter the id of the profile you want to update</Form.Label>
            <Form.Control type="text" value={updateUser.id} name="id" onChange={handleUpdate} /> <br></br>
            
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" value={updateUser.fullname} name="fullname" onChange={handleUpdate} /><br></br>

            <Form.Label>Email</Form.Label>
            <Form.Control type="text" value={updateUser.email} name="email" onChange={handleUpdate} /><br></br>

            <Form.Label>Password</Form.Label>
            <Form.Control type="text" value={updateUser.password} name="password" onChange={handleUpdate} /><br></br>
         </Form>

           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(event) => updateUserData(event)}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>

     </div>
    )
}