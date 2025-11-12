import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

type SocialLink = {
  icon: React.ComponentType<any>;
  label: string;
  url: string;
  color?: string;
  target?: string;
  rel?: string;
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xqalbvpz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const socialLinks: SocialLink[] = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/harrymusic14', color: 'hover:text-stone-900', target: '_blank', rel: 'noopener noreferrer' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/harry-rodr%C3%ADguez-huarcaya-8926282a1/', color: 'hover:text-blue-600', target: '_blank', rel: 'noopener noreferrer' },
    {
      icon: Mail,
      label: 'Email',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=harrymusicx14@gmail.com&su=Contacto%20desde%20tu%20portafolio&body=Hola%20Harry,%20quiero%20hablar%20contigo%20sobre%20un%20proyecto.',
      color: 'hover:text-red-500',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ];

  return (
    <section id="contacto" className="min-h-screen py-20 bg-gradient-to-br from-amber-50/30 via-stone-50 to-neutral-100">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-4xl md:text-5xl font-bold mb-16 text-center text-stone-800">
          Trabajemos Juntos
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="fade-in-left space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-stone-800">
                Conversemos sobre tu proyecto
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Estoy disponible para proyectos freelance, colaboraciones o simplemente para
                charlar sobre desarrollo web y diseño. ¡No dudes en contactarme!
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-stone-800">Encuéntrame en:</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      aria-label={social.label}
                      target={social.target}
                      rel={social.rel}
                      className={`social-icon ${social.color ?? ''}`}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm border border-stone-200">
              <p className="text-stone-600 italic">
                "La mejor forma de predecir el futuro es creándolo"
              </p>
              <p className="text-stone-500 text-sm mt-2">- Peter Drucker</p>
            </div>
          </div>

          <div className="fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input cursor-hover"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input cursor-hover"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="contact-input cursor-hover resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-all duration-300 cursor-hover transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-center font-medium">✅ ¡Mensaje enviado con éxito!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-center font-medium">❌ Hubo un error al enviar el mensaje.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}