import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";

class NavbarT extends React.Component {
  render() {
    return (
      <Container>
        <Navbar className="navbar navbarBG border-body" data-bs-theme="dark">
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
            <Col className="text-end">
              <Nav.Link href="#pricing">
                <IoSearch className="colorIcon" />
              </Nav.Link>
            </Col>
          </Nav>
        </Navbar>
      </Container>
    );
  }
}

export default NavbarT;
