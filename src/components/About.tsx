import { Download, Heart, Code, Palette } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre-mi" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-16 text-center text-stone-800">
            Sobre Mí
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <div className="about-image-container">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Working"
                  className="about-image"
                />
              </div>
            </div>

            <div className="fade-in-right space-y-6">
              <p className="text-lg text-stone-600 leading-relaxed">
                Hola! Soy un apasionado desarrollador frontend con más de 5 años de experiencia
                creando experiencias web excepcionales. Me especializo en transformar ideas creativas
                en productos digitales funcionales y elegantes.
              </p>

              <p className="text-lg text-stone-600 leading-relaxed">
                Mi enfoque combina código limpio, diseño intuitivo y atención meticulosa a los
                detalles. Creo en la importancia de construir productos que no solo se vean bien,
                sino que también ofrezcan experiencias memorables para los usuarios.
              </p>

              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="text-center p-4 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors cursor-hover">
                  <Code className="w-8 h-8 mx-auto mb-2 text-stone-700" />
                  <p className="text-sm font-medium text-stone-600">Clean Code</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors cursor-hover">
                  <Palette className="w-8 h-8 mx-auto mb-2 text-stone-700" />
                  <p className="text-sm font-medium text-stone-600">UI/UX Design</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors cursor-hover">
                  <Heart className="w-8 h-8 mx-auto mb-2 text-stone-700" />
                  <p className="text-sm font-medium text-stone-600">Passion</p>
                </div>
              </div>
              <a
                href="/Curriculum.pdf"
                download="Harry_Rodriguez_CV.pdf"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-all duration-300 transform hover:scale-105"
>
                <Download className="w-5 h-5" />
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
