import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Friend Finder</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Friends</Nav.Link>
          <Nav.Link href="#pricing">Faqs</Nav.Link>
        </Nav>
      </Navbar>

    </div>
  )

}

export default NavBar;