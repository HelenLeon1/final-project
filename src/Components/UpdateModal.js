
import {React, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function UpdateModal({user, setUser}) {

    const usersAPI = "http://localhost:3004/users";

    const [show, setShow] = useState(false);

    function updateUserData(event) {
        event.preventDefault();
        fetch(`${usersAPI}/${Number(user.id)}`, {
            method: 'PUT',
            body: JSON.stringify({
                fullname: user.fullname,
                email: user.email,
                password: user.password
            }),
            headers: {
              "Content-Type": "application/json"
            }
          }).then(alert("Update Successful"))
    }
    
    const handleUpdate = (event) => {
        setUser({...user, [event.target.name]: event.target.value}) //sets the users full name, email, and password to the value input by the user
    }
    
    const handleClose = () => setShow(false);
 
    const handleShow = () => setShow(true);



  return (
    <div>    

    <Button id="update-button" variant="primary" onClick={handleShow}>Update Profile</Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Personal Information </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form id="updateForm">
        <h3>Enter Changes</h3>
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" value={user.fullname} name="fullname" onChange={handleUpdate} /><br></br>

            <Form.Label>Email</Form.Label>
            <Form.Control type="text" value={user.email} name="email" onChange={handleUpdate} /><br></br>

            <Form.Label>Password</Form.Label>
            <Form.Control type="text" value={user.password} name="password" onChange={handleUpdate} /><br></br>
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



