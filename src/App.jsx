import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ArtShowcase from './components/ArtShowcase';
import TwitchEmbed from './components/TwitchEmbed';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <ArtShowcase/>
      <TwitchEmbed />
      <Contact />
    </>
  );
}

export default App;