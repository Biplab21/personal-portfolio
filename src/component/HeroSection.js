import React, { useState, useEffect } from "react";
import Typist from "react-typist";
import { Container } from "react-bootstrap";
import "../css/HeroSection.css";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const HeroSection = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <div>
      <Container id="container" fluid style={{ height: "91vh" }}>
        <div>
          <h1>
            Hi, I am &nbsp;
            <strong> Biplab Paul</strong>
          </h1>
          {count ? (
            <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
              <h2>
                <span> Web Developer</span>
              </h2>
              <Typist.Backspace count={20} delay={800} />
              <h2>
                <span> Learner</span>
              </h2>
              <Typist.Backspace count={20} delay={800} />
              <h2>
                <span> MERN Stack Developer</span>
              </h2>
              <Typist.Delay ms={500} />
            </Typist>
          ) : (
            ""
          )}
        </div>
      </Container>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default HeroSection;
