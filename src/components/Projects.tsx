import { ExternalLink, ArrowRight, Github } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: 'Crece+Perú',
    description: 'Página Web Profesional de desarrollo profesional',
    image: '/crece+peru.png',
    tags: ['React', 'Node.js', 'Stripe'],
    github: 'https://github.com/harrymusic14/Crece-Per-.git',
    demo: 'https://creceperuplus.netlify.app/',
    asociado: '#', 
  },
  {
    id: 2,
    title: 'Rick y Morty Fanpage',
    description:
      'Página web desarrollada con Vite para buscar a distintos personajes de la serie',
    image: '/captura2.png',
    tags: ['React', 'Node.js', 'Tailwind'],
    github: 'https://github.com/harrymusic14/rickandmorty.git',
    demo: 'https://harrymusic14.github.io/rickandmorty/',
    asociado: '#',
  },
  {
    id: 3,
    title: 'Pokedex',
    description:
      'Página web desarrollada con Vite para buscar a distintos personajes de la serie pokemón',
    image: '/pokemon.webp',
    tags: ['React', 'TypeScript', 'Storybook'],
    github: 'https://github.com/harrymusic14/Portafolio.new.git',
    demo: 'https://pokedexnew.netlify.app/',
    asociado: '#',
  },
  {
    id: 4,
    title: 'Weather-App',
    description:
      'Dashboard meteorológico con visualizaciones de datos interactivas',
    image:
      'https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['React', 'API', 'Charts'],
    github: 'https://github.com/harrymusic14/Weather-App.git',
    demo: 'https://harrymusic14.github.io/Weather-App/',
    asociado: '#',
  },
  {
    id: 5,
    title: 'Galleta de la Fortuna',
    description:
      '“Página interactiva que genera frases.',
    image:
      '/galleta-fortuna.png',
    tags: ['Next.js', 'Analytics', 'D3.js'],
    github: 'https://github.com/harrymusic14/FORTUNE-COOKIE.git',
    demo: 'https://fortuncookie.netlify.app/',
    asociado: '#',
  },
  {
    id: 6,
    title: 'Users-CRUD',
    description:
      'Aplicación para seguimiento de ejercicios y objetivos de fitness',
    image:
      '/Userd-CRUD.png',
    tags: ['React Native', 'Mobile', 'Health'],
    github: 'https://github.com/harrymusic14/Users-CRUD.git',
    demo: 'https://user-crud12.netlify.app/',
    asociado: '#',
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () =>
      projectRefs.current.forEach((ref) => ref && observer.unobserve(ref));
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (imageContainerRef.current) {
      const { clientX, clientY } = e;
      const x = clientX + 20;
      const y = clientY - imageContainerRef.current.offsetHeight / 2;
      imageContainerRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  return (
    <section
      id="proyectos"
      className="min-h-screen py-20 bg-background relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-text">
          Proyectos Destacados
        </h2>

        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="project-item group block cursor-pointer"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="flex justify-between items-center py-8 border-b border-accent transition-all duration-300 group-hover:border-primary">
                <div className="flex items-center gap-4 transition-transform duration-300 group-hover:-translate-x-2">
                  <ArrowRight className="w-6 h-6 text-accent transition-colors duration-300 group-hover:text-primary" />
                  <div>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl font-semibold text-text hover:text-primary transition-colors duration-300"
                    >
                      {project.title}
                    </a>
                    <p className="text-text/60 text-sm mt-1">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Botones: GitHub, Proyecto y Asociado */}
                <div className="flex items-center gap-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-text/60 hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span className="hidden sm:inline">Código</span>
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-text/60 hover:text-primary transition-colors"
                    >
                      <span className="hidden sm:inline">Proyecto</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {project.asociado && project.asociado !== '#' && (
                    <a
                      href={project.asociado}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-text/60 hover:text-primary transition-colors"
                    >
                      <span className="hidden sm:inline">Asociado</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Imagen flotante */}
      <div
        ref={imageContainerRef}
        className="pointer-events-none absolute top-0 left-0"
        style={{
          opacity: activeProject !== null ? 1 : 0,
          transform: `scale(${activeProject !== null ? 1 : 0.8})`,
          zIndex: 50,
        }}
      >
        {activeProject !== null && (
          <div className="relative">
            <img
              src={projects.find((p) => p.id === activeProject)?.image}
              alt={projects.find((p) => p.id === activeProject)?.title}
              className="w-80 h-auto rounded-lg shadow-2xl object-cover"
            />
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              {projects
                .find((p) => p.id === activeProject)
                ?.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-black/50 text-white rounded-full backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
