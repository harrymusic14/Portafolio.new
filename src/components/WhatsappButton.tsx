import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '946000608'; // Reemplaza con tu número de teléfono
  const message = 'Hola, estoy interesado en tus servicios.'; // Mensaje predeterminado (opcional)
  const whatsappLink = `https://api.whatsapp.com/send/?phone=51946000608&text=M%C3%A1s+informaci%C3%B3n&type=phone_number&app_absent=0`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 p-4 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </a>
  );
}
