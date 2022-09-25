import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function About() {
  return (
    <div>
        <h1>About</h1>
        <Alert variant='danger'>This is an alert</Alert>
        <Button variant='primary'>Click me</Button>

        <Form.Group>
            <Form.Label>Email address:</Form.Label>
            <Form.Control type='email' placeholder='jogndoe@gmail.com'></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control type='password' placeholder='********'></Form.Control>
        </Form.Group>
        <Button variant='success'>Login</Button>
    </div>
  )
}

export default About