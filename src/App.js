import "./App.css";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import ParticlesBackground from "./component/ParticlesBackground";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <ParticlesBackground />

        <Switch>
          <Route path="/" exact component={HeroSection} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
