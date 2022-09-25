import React,  {useState } from 'react'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function Signup() {
  const [firstName,setFirstName] = useState('John');
  const [lastName,setLastName] = useState('Doe');
  const [submittedData,setSubmittedData] = useState([]);
  const [error,setError] = useState('');
//   handle first name change
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  //   handle last name change
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

//   handle submit
function handleSubmit(event) {
    event.preventDefault();
    if(firstName && lastName) {
        const userData = {firstName: firstName, lastName: lastName}
        const usersArray = [...submittedData, userData];
        setSubmittedData(usersArray);
        setFirstName("");
        setLastName("")
    }
    else {
        setError("Both first and last name are required");
    }
}
    // display registered users
    const listAllUsers = submittedData.map((user,index) => {
        return(
            <div key={index}>
                {user.firstName} { user.lastName}
            </div>
        )
    })
  return (
    <div>
        { error }
        <form onSubmit={handleSubmit}>
            <h4 >Sign Up</h4>
            <input type="text" placeholder='Enter First Name' onChange={handleFirstNameChange}/>
            <input type="text" placeholder='Enter Last Name' onChange={handleLastNameChange}/>
            <Button type='submit'>Sign up</Button>

        </form>
        { listAllUsers }
    </div>
  )
}

export default Signup