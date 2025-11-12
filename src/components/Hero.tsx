import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function Hero() {
  const [init, setInit] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Desarrollador Frontend & Diseñador de Experiencias';

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    if (!init) {
      return;
    }

    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [init]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: 'transparent',
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#a8a29e',
              },
              links: {
                color: '#a8a29e',
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 50,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 -z-10"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/30 to-background -z-10" />

      <div className="floating-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="fade-in">
          <div className="profile-image-container mb-8">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="/foto-portada.jpg"
                    alt="Profile"
                    className="profile-image"
                  />
                </div>
                <div className="flip-card-back">
                  <img
                    src="/perfil2.png"
                    alt="Profile 2"
                    className="profile-image"
                  />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-text">
            <span className="wave-text">Harry Rodriguez</span>
          </h1>

          <div className="typing-container h-16 mb-8">
            <p className="text-xl md:text-2xl text-text/80 font-light">
              {displayedText}
              <span className="typing-cursor">|</span>
            </p>
          </div>

          <p className="text-lg text-text/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Creando experiencias digitales elegantes que conectan marcas con personas
          </p>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => scrollToSection('proyectos')}
              className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 cursor-hover transform hover:scale-105"
            >
              Ver Proyectos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 cursor-hover transform hover:scale-105"
            >
              Contactar
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('sobre-mi')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-hover"
      >
        <ChevronDown className="w-8 h-8 text-accent" />
      </button>
    </section>
  );
}
