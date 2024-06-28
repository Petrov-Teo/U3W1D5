import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";

class NavbarT extends React.Component {
  render() {
    return (
      <Navbar className="navbar navbarBG border-body" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="100px"
              height="55px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#features">TV Shows</Nav.Link>
            <Nav.Link href="#pricing">Movies</Nav.Link>
            <Nav.Link href="#pricing">Recently Added</Nav.Link>
            <Nav.Link href="#pricing">My List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarT;
