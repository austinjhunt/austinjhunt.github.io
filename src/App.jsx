import './assets/index.css';
import { useReveal } from './hooks/useReveal';
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import TechMarquee from './sections/TechMarquee';
import About from './sections/About';
import Work from './sections/Work';
import Experience from './sections/Experience';
import Stack from './sections/Stack';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  useReveal();
  return (
    <div className="min-h-screen bg-bg text-text antialiased">
      <Nav />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Work />
        <Experience />
        <Stack />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
