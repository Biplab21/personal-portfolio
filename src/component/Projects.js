import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import LA from "../Images/LA.jpg";
import Proshop from "../Images/Proshop.jpg";
import Netflix from "../Images/Netflix.jpg";
import "../css/Projects.css";
import { Badge } from "reactstrap";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <>
      <Container
        className="project_container"
        fluid
        style={{
          background: "#120F19",
          display: "flex",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <Row>
          <Row className="projects_heading" style={{ position: "relative" }}>
            <h1
              className="protect_title"
              style={{
                color: "white",
                fontFamily: ` 'Open Sans', sans-serif`,
              }}
            >
              My <strong style={{ color: "#C770F0" }}> &nbsp; Projects </strong>
            </h1>
          </Row>

          <Col>
            <Fade>
              <Card>
                <Card.Img variant="top" src={LA} />
                <Card.Body>
                  <Card.Title>Lodge Avoya</Card.Title>
                  <Card.Text>
                    A portfolio website for a lodge which is situated in
                    Purulia.
                    <div className="badge_container">
                      <Badge color="primary">HTML</Badge>
                      <Badge color="secondary">CSS</Badge>
                      <Badge color="success">Javascript</Badge>
                    </div>
                  </Card.Text>
                  <div className="button_container">
                    <Button
                      variant="primary"
                      href="https://www.lodgeavoya.com/"
                      target="blank"
                    >
                      See Live
                    </Button>
                    <Button
                      variant="primary"
                      href="https://github.com/Biplab21/abhayalodge.github.io"
                      target="blank"
                    >
                      Source Code
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
          <Col>
            <Fade>
              <Card>
                <Card.Img variant="top" src={Proshop} />
                <Card.Body>
                  <Card.Title>Proshop Ecommerce Website</Card.Title>
                  <Card.Text>
                    A ecommerce website with paypal payment gateway.
                    <div className="badge_container">
                      <Badge color="primary">React.js</Badge>
                      <Badge color="secondary">MongoDB</Badge>
                      <Badge color="success">Node.js</Badge>
                      <Badge color="warning">Express.js</Badge>
                    </div>
                  </Card.Text>
                  <div className="button_container">
                    <Button
                      variant="primary"
                      href="https://proshop21.herokuapp.com/"
                      target="blank"
                    >
                      See Live
                    </Button>
                    <Button
                      variant="primary"
                      href="https://github.com/Biplab21/proshop"
                      target="blank"
                    >
                      Source Code
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
          <Col>
            <Fade>
              <Card>
                <Card.Img variant="top" src={Netflix} />
                <Card.Body>
                  <Card.Title>Netflix Clone</Card.Title>
                  <Card.Text>
                    Click on a poster and you can watch the trailer of that
                    series or movie.
                    <div className="badge_container">
                      <Badge color="success">React.js</Badge>
                    </div>
                  </Card.Text>
                  <div className="button_container">
                    <Button
                      variant="primary"
                      href="https://netflix-clone-7196a.web.app/"
                      target="blank"
                    >
                      See Live
                    </Button>
                    <Button
                      variant="primary"
                      href="https://github.com/Biplab21/netflix-clone"
                      target="blank"
                    >
                      Source Code
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
