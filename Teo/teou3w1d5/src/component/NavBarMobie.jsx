import { Button, Container, Nav, Navbar, Row } from "react-bootstrap";
import React, { Component } from "react";
import { FaRegBell } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import logo from "../assets/logo.png";

class NavbarMobile extends Component {
  render() {
    return (
      <Container className="d-md-none ">
        <Row>
          <Navbar className="navbar navbarBG border-body" data-bs-theme="dark">
            <Navbar.Brand href="#home" xs={12}>
              <img src={logo} width="100px" height="55px" className="align-top" alt="React Bootstrap logo" />
            </Navbar.Brand>
            <Button
              class="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </Button>
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
export default NavbarMobile;
