import React from "react";
import "./header.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const Header = () => {
  return (
    <div>
      <Navbar className="responsive fixed-top">
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ color: "red", textDecoration: "none" }}>
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              className="me-auto"
              style={{ color: "red", textDecoration: "none" }}
              href="#home">
              Home
            </Nav.Link>
            <Nav.Link
              className="me-auto"
              style={{ color: "red", textDecoration: "none" }}
              href="#features">
              Features
            </Nav.Link>
            <Nav.Link
              className="me-auto"
              style={{ color: "red", textDecoration: "none" }}
              href="#pricing">
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
