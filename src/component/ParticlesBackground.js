import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "../config/particles-config";
import "../css/ParticlesBackground.css";

const ParticlesBackground = () => {
  return (
    <section>
      <Particles params={particlesConfig} />
    </section>
  );
};

export default ParticlesBackground;
