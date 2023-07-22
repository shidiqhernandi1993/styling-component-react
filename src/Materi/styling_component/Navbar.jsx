import React from "react";
import {
  Container,
  Nav,
  Navbar as NavbarBootstrap,
} from "react-bootstrap";

export default function Navbar() {
  return (
    <NavbarBootstrap expand="lg" bg="dark" fixed="top">
      <Container>
        <NavbarBootstrap.Brand className="fw-bold text-white" href="#home">Shidiq Hernandi Andrian</NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#about" className="text-white">About</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}
