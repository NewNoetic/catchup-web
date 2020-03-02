import React, { Component } from "react";
import { Container, Navbar, Nav/*, NavItem*/ } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";
import "./Navbar.css";
import AppIcon from "./AppIcon";
import Config from "./config.json";

class AppNavbar extends Component {
  render() {
    let nav = (
      <div>
        <Nav>
          {/* <LinkContainer to="/about">
            <NavItem disabled eventKey={1}>About</NavItem>
          </LinkContainer>
          <LinkContainer to="/beta">
            <NavItem disabled eventKey={2}>Beta</NavItem>
          </LinkContainer>
          <LinkContainer to="/contact">
            <NavItem disabled eventKey={3}>Contact</NavItem>
          </LinkContainer> */}
        </Nav>
      </div>
    );

    return (
      <Container>
        <Navbar>
        <Navbar.Brand style={{
          paddingLeft: 0,
        }}>
          <AppIcon style={{
            height: "32px",
            width: "auto",
            paddingRight: "1rem",
            paddingBottom: "1rem"
          }}
            className={"pull-left"}/>
          <Link to="/">{Config.name}</Link>
        </Navbar.Brand>
        {nav}
      </Navbar>
      </Container>
    );
  }
}

export default AppNavbar;
