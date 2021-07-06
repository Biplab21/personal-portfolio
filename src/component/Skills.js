import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  DiCss3,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiMongodb,
} from "react-icons/di";
import { SiFirebase, SiPostman } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaNode } from "react-icons/fa";
import "../css/Skills.css";

const Skills = () => {
  return (
    <Container
      fluid
      style={{
        background: "#120F19",
        color: "#C770F0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Row className="skills_heading" style={{ position: "relative" }}>
        <h1 style={{ color: "white" }}>
          Professional{" "}
          <strong style={{ color: "#C770F0" }}> &nbsp; Skillset </strong>
        </h1>
      </Row>

      <Row
        className="icon_box"
        style={{ justifyContent: "center", paddingBottom: "50px" }}
      >
        <Col className="tech_icons" xs={4} md={2}>
          <AiOutlineHtml5 />
        </Col>
        <Col className="tech_icons " xs={4} md={2}>
          <DiCss3 />
        </Col>
        <Col className="tech_icons" xs={4} md={2}>
          <DiJavascript1 />
        </Col>
        <Col className="tech_icons" xs={4} md={2}>
          <DiReact />
        </Col>
        <Col className="tech_icons" xs={4} md={2}>
          <FaNode />
        </Col>
        <Col className="tech_icons" xs={4} md={2}>
          <DiMongodb />
        </Col>
        <Col className="tech_icons" xs={4} md={2}>
          <SiFirebase />
        </Col>
        <Col className="tech_icons" xs={4} md={2}>
          <AiFillGithub />
        </Col>
        <Col className="tech_icons" xs={4} md={2}>
          <SiPostman />
        </Col>
        <Col className="tech_icons" xs={4} md={2}>
          <BsFillBootstrapFill />
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
