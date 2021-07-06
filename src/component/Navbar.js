import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const NavBar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      expand="md"
      className={navColour ? " sticky-top" : "navbar"}
      collapseOnSelect
    >
      <Navbar.Brand id="name" as={Link} to="/" className="px-2">
        Biplab Paul
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto px-2">
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => updateExpanded(false)}
              style={{ color: "#fff" }}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={() => updateExpanded(false)}
              style={{ color: "#fff" }}
            >
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/skills"
              onClick={() => updateExpanded(false)}
              style={{ color: "#fff" }}
            >
              Skills
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/projects"
              onClick={() => updateExpanded(false)}
              style={{ color: "#fff" }}
            >
              Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => updateExpanded(false)}
              style={{ color: "#fff" }}
            >
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
