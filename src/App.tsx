import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';
import Section from './components/Section';

function App() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <Section id="sobre-mi">
          <About />
        </Section>
        <Section id="proyectos">
          <Projects />
        </Section>
        <Section id="habilidades">
          <Skills />
        </Section>
        <Section id="contacto">
          <Contact />
        </Section>
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;
