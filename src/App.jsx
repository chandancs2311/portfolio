import GalaxyBackground from "./components/background/GalaxyBackground";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

import "./styles/index.css";
import "./styles/neon.css";
import "./styles/galaxy.css";
import "./styles/animations.css";

function App() {
  return (
    <>
      {/* Animated Galaxy Background */}
      <GalaxyBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */} 
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
