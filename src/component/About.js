import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import img2 from "../Images/code.png";
import "../css/About.css";
import pdf from "../assets/BiplabPaul.pdf";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            style={{
              display: "flex",
              margin: "auto",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Fade left>
              <Image className="about_image" src={img2} rounded />
            </Fade>
          </Col>

          <Col
            className="about_col"
            style={{
              margin: "auto",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p className="about_para">
              Hi there! I am{" "}
              <span style={{ color: "#c770f0" }}>Biplab Paul</span> . A
              passionate programmer, born and brought up in Kolkata, India. I am
              a full stack developer with React.js, Redux, Express.js, Node.js
              and MongoDB as my tech stack. I love learning about new
              technologies, what problems are they solving and how can I use
              them to build better and scalable products.
            </p>

            <Button
              href={pdf}
              target="blank"
              variant="outline-primary"
              style={{ width: "8rem", color: "white" }}
            >
              Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
