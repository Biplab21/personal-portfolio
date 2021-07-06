import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "../css/Contact.css";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import contact from "../../src/Images/Contact.png";
import Slide from "react-reveal/Slide";

const Contact = () => {
  return (
    <Container
      fluid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Col>
        <Row>
          <Col>
            <div className="contact_image">
              <img src={contact} alt="" />
            </div>
          </Col>
        </Row>

        <Row className="contact">
          <div className="contact_container">
            <span className="title top">Seeking for a discussion?</span>
          </div>
          <div className="contact_container">
            <span className="title bottom">I'm just a mail away!</span>
          </div>
          <Button href="mailTo:biplabpaul569@gmail.com">Say Hi</Button>
        </Row>

        <div className="icons_div">
          <Button
            href="https://www.linkedin.com/in/biplab-paul-32721817a/"
            target="blank"
          >
            <AiFillLinkedin className="icons" />
          </Button>
          <Button href="https://github.com/Biplab21" target="blank">
            <AiFillGithub type="button" className="icons" />
          </Button>
          <Button href="https://www.instagram.com/hey.biplab/" target="blank">
            <AiFillInstagram type="button" className="icons" />
          </Button>
        </div>
      </Col>
    </Container>
  );
};

export default Contact;
