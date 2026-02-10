import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 text-center">
      <div className="container mx-auto px-4">
        <p className="font-serif text-white text-xl font-bold mb-4">Nounours d'amour</p>
        
        <div className="mb-10">
          <p className="text-white font-semibold mb-6">Contact</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ismaelalao6@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 w-full max-w-xs md:w-auto border border-gray-800 hover:border-blue-500/30 group text-left"
            >
              <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform shrink-0">
                <Mail size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider group-hover:text-gray-400 transition-colors">Email</span>
                <span className="text-gray-300 group-hover:text-white font-medium text-sm break-all">ismaelalao6@gmail.com</span>
              </div>
            </a>

            <a 
              href="https://wa.me/22948088405" 
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 w-full max-w-xs md:w-auto border border-gray-800 hover:border-green-500/30 group text-left"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform shrink-0">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider group-hover:text-gray-400 transition-colors">WhatsApp</span>
                <span className="text-gray-300 group-hover:text-white font-medium text-sm">+229 48 08 84 05</span>
              </div>
            </a>

          </div>
        </div>

        <div className="flex justify-center gap-6 text-sm mb-8">
          <span className="cursor-pointer hover:text-white transition-colors">CGV</span>
          <span className="cursor-pointer hover:text-white transition-colors">Mentions Légales</span>
        </div>
        
        <div className="text-xs opacity-50 border-t border-gray-800 pt-8">
          <p>© 2026 Nounours d'amour. Tous droits réservés.</p>
          <p className="mt-2 text-yellow-500 font-mono">SITE DE DÉMONSTRATION - PROTOTYPE - DEV BY ISMAEL</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
