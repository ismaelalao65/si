import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 text-center">
      <div className="container mx-auto px-4">
        <p className="font-serif text-white text-xl font-bold mb-4">Nounours d'amour</p>
        <div className="mb-8">
          <p className="text-white font-semibold mb-3">Contact</p>
          <div className="flex justify-center gap-8 text-sm mb-6">
            <span className="flex items-center gap-2">
              <span>📧 Email:</span>
              <a href="https://mail.google.com/mail/u/0/?to=ismaelalao6@gmail.com" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                ismaelalao6@gmail.com
              </a>
            </span>
            <span className="flex items-center gap-2">
              <span>📱 WhatsApp:</span>
              <a href="https://wa.me/22948088405" className="text-green-400 hover:text-green-300">
                +22948088405
              </a>
            </span>
          </div>
        </div>
        <div className="flex justify-center gap-6 text-sm mb-8">
          <span>CGV</span>
          <span>Mentions Légales</span>
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