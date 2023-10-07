
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function RegistrationForm () {

    const usersAPI = 'http://localhost:3004/users';

    const [user, setUser] = useState([{fullname: " ", email: " ", password: " ", id: null}]);
    const [newUser, setNewUser] = useState({fullname: " ", email: " ", password: " ", id: null });
    const [updateUser, setUpdateUser] = useState({fullname: " ", email: " ", password: " ", id: " " });

    
    const getUser = async (event, id) => {
        event.preventDefault()
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
          })
    }


    const handleChange = (event) =>  {
        setNewUser({...newUser, [event.target.name]: event.target.value})
    }


    const handleUpdate = (event) => {
        setUpdateUser({...updateUser, [event.target.name]: event.target.value})
    }
    

    

    



    return (

    <div>
        <form>
            <h3>Create Your Account</h3>
            <label>Full Name</label>
            <input type="text" value={newUser.fullname} name="fullname" onChange={handleChange}></input><br></br>

            <label>Email</label>
            <input type="text" value={newUser.email} name="email" onChange={handleChange}></input><br></br>

            <label>Password</label>
            <input type="text" value={newUser.password} name="password" onChange={handleChange}></input><br></br>
            <button onClick={createNewUser}>Submit</button> <br></br>

            <label>Enter the id of your profile</label>
            <input type="text" name="id" onChange={handleChange}></input>
            <button onClick={(event) => getUser(event, newUser.id)}>Enter</button> <br></br>  
        </form>
        
           
        <div key={user.id}>
            <h3>Your Profile</h3>
            FullName: {user.fullname} <br></br>
            Email: {user.email} <br></br>
            Password: {user.password} <br></br>
            <button onClick={() => deleteUser(user.id)}>Delete Account</button> 
        </div> <br></br>


        <form id="updateForm">
        <h3>Update Form</h3>
            <label>Enter the id of the profile you want to update</label>
            <input type="text" value={updateUser.id} name="id" onChange={handleUpdate}></input> <br></br>
            
            <label>Full Name</label>
            <input type="text" value={updateUser.fullname} name="fullname" onChange={handleUpdate}></input><br></br>

            <label>Email</label>
            <input type="text" value={updateUser.email} name="email" onChange={handleUpdate}></input><br></br>

            <label>Password</label>
            <input type="text" value={updateUser.password} name="password" onChange={handleUpdate}></input><br></br>
            <button onClick={(event) => updateUserData(event)}>Edit</button> <br></br>

        </form>
    </div>
      
    )
}