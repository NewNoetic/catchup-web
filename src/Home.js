import React, { Component } from "react";
import { Container, Row, Col, Button/*, Card */} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";
// import Mailchimp from "./Mailchimp";
import DemoVideo from "./DemoVideo";
import AppIcon from "./AppIcon";
import Config from "./config.json";

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={6}>
            <div className="header">
              <AppIcon
                style={{ height: "128px", width: "auto", paddingTop: "3rem" }}
              />
              <br />
              <br />
              <h1>{Config.tagline}</h1>
              <br />
              <h3 style={{ lineHeight: "3.5rem" }}>{Config.description}</h3>
              <br />
              <br />
              <LinkContainer to={"/"}>
                <Button>Get {Config.name}</Button>
              </LinkContainer>
            </div>
          </Col>
          <br />
          <br />
          <Col md={6}>
            <DemoVideo />
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        {/* <br />
        <Row>
          <Col md={6}>
            <Mailchimp />
          </Col>{" "}
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Text>
                  <h2>
                    <em>It's like FaceTime, but in augmented reality.</em>
                  </h2>
                </Card.Text>
              </Card.Body>
              <Card.Footer>— Arra user</Card.Footer>
            </Card>
          </Col>
        </Row> */}
      </Container>
    );
  }
}

export default Home;
