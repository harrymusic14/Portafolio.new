import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-stone-400 mb-2 flex items-center justify-center gap-2">
            Diseñado y desarrollado con <Heart className="w-4 h-4 text-red-500 fill-current" /> por Harry
          </p>
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
