import React, { useState } from 'react'
import { Navbar, Nav, Button, } from "react-bootstrap"
import { useSignIn, useSignUp } from "../context/clientcontext"

export default function Header() {
  const { setSignIn } = useSignIn()
  const { setSignUp } = useSignUp()
  const [showNav, setShowNav] = useState("")

  const showSignIn = () => {
    setSignIn(true)
    setSignUp(false)
  }
  const showSignUp = () => {
    setSignUp(true)
    setSignIn(false)
  }
  return (
    <Navbar expand="sm" className="navbar" fixed="top"  >
      <Navbar.Brand href="#">JDSHOE</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" className="nav_burger " onClick={() => {
        if (showNav === "none") {
          setShowNav("")
        }
      }} />
      <Navbar.Collapse id="navbarScroll" className="nav_lists" style={{ transform: `${showNav}` }}>
        <Nav
          bg="sucess"
          navbarScroll
        >
          <Nav.Link className="nav_list" onClick={() => {
            window.scrollTo(0, 0)
            if (showNav === "") {
              setShowNav("tranlateY(-100px)")
            } else {
              setShowNav("")
            }

          }} >Home</Nav.Link>
          <Nav.Link className="nav_list" onClick={() => {
            window.scrollTo(0, "550")
            if (showNav === "") {
              setShowNav("tranlateY(-100px)")
            } else {
              setShowNav("")
            }
          }}>Top Rating</Nav.Link>
          <Button style={{ margin: "5px 10px" }} onClick={showSignIn}>Sign In</Button>
          <Button style={{ margin: "5px 10px" }} onClick={showSignUp}>Sign Up</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
