import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import AppIcon from "./AppIcon";
import Config from "./config.json";

class AppNavbar extends Component {
  render() {
    let nav = (
      <Nav>
        <Navbar.Brand
          href="/"
        >
          <AppIcon
            height="30"
            width="auto"
            className="d-inline-block mr-1"
          />
          {' '}
          { Config.name }
        </Navbar.Brand>
        <Nav.Link href="/about" target="_blank" rel="noopener noreferrer">
          About
        </Nav.Link>
        <Nav.Link href="https://apps.apple.com/us/app/ketchup-stay-in-touch/id1501100076" target="_blank" rel="noopener noreferrer">
          App Store
        </Nav.Link>
        <Nav.Link href="/contact">
          Contact
        </Nav.Link>
      </Nav>
    );

    return (
      <Container>
        <Navbar expand="lg" className="pt-5 pl-0 ml-0">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {nav}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default AppNavbar;
