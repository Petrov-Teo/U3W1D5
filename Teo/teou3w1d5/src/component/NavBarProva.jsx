import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";

class NavbarProva extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Navbar className="navbar navbarBG border-body" data-bs-theme="dark">
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="100px"
                height="55px"
                className="d-inline-block align-top img-fluid"
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
            <Nav className="text-end">
              <Nav.Link href="#pricing">
                <IoSearch className="colorIcon" />
              </Nav.Link>
              <Nav.Link href="#features">KIDS</Nav.Link>
              <Nav.Link href="#pricing">
                <FaRegBell className="colorIcon " />
              </Nav.Link>
              <Nav.Link href="#pricing">
                <RxAvatar className="colorIcon ms-2" />
              </Nav.Link>
            </Nav>
          </Navbar>
        </Row>
      </Container>
    );
  }
}

export default NavbarProva;
