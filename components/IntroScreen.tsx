import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import BackgroundHearts from './BackgroundHearts';

interface IntroScreenProps {
  onEnter: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter }) => {
  const [showAlternative, setShowAlternative] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-brand-pink to-brand-pale-pink flex items-center justify-center p-4 overflow-hidden">
      
      {/* Animation de fond dense (30-50 cœurs) */}
      <BackgroundHearts count={40} />

      <div className="max-w-md w-full relative z-10 fade-in text-center p-6">
        
        {!showAlternative ? (
          <div className="flex flex-col items-center">
             <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-8 animate-pulse shadow-lg ring-4 ring-white/10">
               <Heart size={48} className="text-white drop-shadow-md" fill="currentColor" />
             </div>
             
             <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
               Êtes-vous amoureux(se) Nadine ?
             </h1>
             <p className="text-xl text-white/90 mb-10 font-medium max-w-xs mx-auto leading-relaxed">
               Découvrez le cadeau parfait pour exprimer vos sentiments.
             </p>

             <div className="space-y-4 w-full max-w-sm">
               {/* Bouton OUI : Blanc avec texte rose */}
               <button 
                 onClick={onEnter}
                 className="w-full bg-white text-brand-pink font-bold text-lg py-4 px-8 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-pink-50 transition-all duration-300 flex items-center justify-center gap-3 group"
               >
                 <span>Oui, je suis amoureux(se)</span>
                 <Heart size={20} className="group-hover:animate-ping" fill="currentColor" />
               </button>
               
               {/* Bouton NON : Transparent bordé blanc */}
               <button 
                 onClick={() => setShowAlternative(true)}
                 className="w-full bg-transparent border-2 border-white/40 text-white font-medium py-3 px-6 rounded-full hover:bg-white/10 hover:border-white transition-colors mt-4"
               >
                 Non, pas pour le moment
               </button>
             </div>
          </div>
        ) : (
          <div className="bg-white/95 backdrop-blur-md p-10 rounded-3xl shadow-2xl fade-in text-center mx-auto max-w-sm">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-romantic">
               <Sparkles size={28} />
             </div>
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">
              L'amour viendra... ✨
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              "La patience est la clé du véritable bonheur. Prenez soin de vous en attendant la bonne personne. Chaque chose en son temps."
            </p>
            <button 
              onClick={() => setShowAlternative(false)}
              className="text-brand-passion font-semibold hover:underline text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              Revenir au début
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroScreen;
