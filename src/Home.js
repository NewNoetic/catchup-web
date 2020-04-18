import React, { Component } from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import DemoVideo from "./DemoVideo";
import AppIcon from "./AppIcon";
import Config from "./config.json";

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} md={6} className="my-5">
              <AppIcon
                height="80"
                width="auto"
              />
              <h1 className="mt-5">{Config.tagline}</h1>
              <h5 className="mt-4" style={{ lineHeight: "2rem" }}>{Config.description}</h5>
              <Button className="mt-5" variant="primary" size="lg" href="https://testflight.apple.com/join/5HZLtHAd" target="_blank" rel="noopener noreferrer">Get {Config.name}</Button>
          </Col>
          <Col sm={12} md={5} className="mb-5 ml-md-5">
            <DemoVideo />
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <Mailchimp />
          </Col>
          <Col>
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
