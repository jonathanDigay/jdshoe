import React from 'react'
import { Form, Button, Container } from "react-bootstrap"
import { useSignIn } from "../context/clientcontext"

export default function SignIn() {
  const { signIn, setSignIn } = useSignIn()

  const exit = () => {
    setSignIn(false)
  }
  return (
    <>
      {
        signIn ?
          <Container className="signin" >
            <i className="fas fa-times" onClick={exit}></i>
            <h1>Sign In</h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
  </Button>
            </Form>
            <p >or</p>
            <div className="social_auth" >
              <i className="fab fa-facebook" ></i>
              <i className="fab fa-google" ></i>
            </div>
          </Container >

          : ""
      }
    </>
  )
}
