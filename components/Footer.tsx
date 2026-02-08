import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 text-center">
      <div className="container mx-auto px-4">
        <p className="font-serif text-white text-xl font-bold mb-4">Nounours d'amour</p>
        <div className="flex justify-center gap-6 text-sm mb-8">
          <span>Contact</span>
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