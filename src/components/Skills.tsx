import { Code2, Palette, Database, Smartphone, Zap, Globe } from 'lucide-react';
import { SiTypescript, SiJavascript, SiReact, SiNodedotjs, SiCss3 } from 'react-icons/si';

const skills = [
  {
    category: 'Frontend',
    icon: Code2,
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
    color: 'amber',
  },
  {
    category: 'Design',
    icon: Palette,
    items: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design', 'Animation'],
    color: 'stone',
  },
  {
    category: 'Backend',
    icon: Database,
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    color: 'amber',
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    items: ['React Native', 'PWA', 'Mobile-First', 'Responsive', 'iOS/Android'],
    color: 'stone',
  },
  {
    category: 'Performance',
    icon: Zap,
    items: ['Optimization', 'SEO', 'Web Vitals', 'Accessibility', 'Testing'],
    color: 'amber',
  },
  {
    category: 'Tools',
    icon: Globe,
    items: ['Git', 'Webpack', 'Vite', 'Docker', 'CI/CD'],
    color: 'stone',
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-4xl md:text-5xl font-bold mb-16 text-center text-stone-800">
          Habilidades & Tecnologías
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.category}
                className="skill-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`skill-icon-container bg-${skill.color}-100`}>
                  <Icon className="w-8 h-8 text-stone-700" />
                </div>

                <h3 className="text-xl font-semibold mb-4 text-stone-800">
                  {skill.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className={`skill-tag bg-${skill.color}-50 hover:bg-${skill.color}-100`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-600 text-lg mb-6">
            Siempre aprendiendo y explorando nuevas tecnologías
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { name: 'JavaScript', icon: SiJavascript },
              { name: 'TypeScript', icon: SiTypescript },
              { name: 'React', icon: SiReact },
              { name: 'Node.js', icon: SiNodedotjs },
              { name: 'CSS', icon: SiCss3 },
            ].map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="group relative flex flex-col items-center cursor-pointer"
              >
                <div className="tech-bubble-static transition-transform duration-300 transform group-hover:scale-110">
                  <Icon className="w-8 h-8 text-stone-700" />
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-stone-600 mt-2">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
