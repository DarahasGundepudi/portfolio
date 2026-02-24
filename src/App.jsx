import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-wrapper">
      {/* Background effects */}
      <div className="noise-overlay" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />

      {/* Footer */}
      <footer className="footer">
        <p>Designed &amp; Built by Srikrishna G &middot; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
