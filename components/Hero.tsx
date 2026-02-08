import React from 'react';
import { Timer, Star } from 'lucide-react';
import Button from './Button';
import BackgroundHearts from './BackgroundHearts';
import { IMAGES, PRODUCT, USER_AVATARS } from '../constants';

interface HeroProps {
  onBuy: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBuy }) => {
  // Sélection des 4 premiers avatars pour l'affichage Hero
  const heroAvatars = USER_AVATARS.slice(0, 4);

  return (
    // Background ajusté : Rouge Passion (#DC143C) à ~45% d'opacité pour un rendu doux et premium
    <section className="relative w-full min-h-[90vh] bg-gradient-to-b from-brand-passion/40 to-brand-passion/50 flex items-center justify-center overflow-hidden pb-12 pt-8 md:pt-20">
      
      {/* Animation cœurs flottants (NE PAS TOUCHER : 60-80% opacité conservée via le composant) */}
      <BackgroundHearts count={35} direction="down" />

      {/* Abstract Background Elements - Opacité ajustée pour le fond clair */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2 z-0"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-rose rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay z-0"></div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 flex flex-col items-start space-y-6 fade-in">
          
          {/* Badge : Fond blanc translucide, texte rouge profond */}
          <div className="inline-flex items-center gap-2 bg-white/60 text-[#991B1B] px-4 py-1.5 rounded-full border border-white/50 backdrop-blur-md shadow-sm ring-1 ring-[#991B1B]/10">
            <Timer className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">Édition limitée Saint-Valentin – Stock faible</span>
          </div>

          {/* Titre : Rouge très sombre (Red-950) pour le contraste sur fond pastel */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#450a0a] leading-tight drop-shadow-sm">
            Un bouquet fane, <br />
            {/* Accent en rouge vif (#DC143C) pour "un câlin reste" */}
            <span className="text-brand-passion italic">un câlin reste.</span>
          </h1>
          
          {/* Paragraphe : Rouge bordeaux (Red-900) avec opacité */}
          <p className="text-lg md:text-xl text-[#7f1d1d]/90 max-w-lg leading-relaxed font-medium">
            Offrez un amour qui dure. {PRODUCT.name} est la peluche la plus douce du monde, conçue pour toute une vie de tendresse.
          </p>

          <div className="w-full md:w-auto">
            {/* Button : NE PAS TOUCHER (Reste blanc/rouge) */}
            <Button fullWidth={false} variant="white" className="w-full md:w-auto text-brand-passion" onClick={onBuy} />
            
            <p className="text-sm text-[#7f1d1d] mt-3 text-center md:text-left flex items-center justify-center md:justify-start gap-2 opacity-90 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse box-shadow-lg shadow-green-500/50"></span>
              Livraison rapide en 24H
            </p>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-[#991B1B]/10 w-full max-w-md">
             <div className="flex -space-x-3">
               {heroAvatars.map((avatar, i) => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                   <img src={avatar} alt="User" className="w-full h-full object-cover" />
                 </div>
               ))}
             </div>
             <div className="text-sm text-[#450a0a]">
               <div className="flex text-yellow-500 drop-shadow-sm">
                 {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
               </div>
               <span className="font-bold">4.9/5</span> <span className="text-[#7f1d1d] opacity-80">par +500 clients</span>
             </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="order-1 md:order-2 relative fade-in flex justify-center">
          <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl shadow-brand-passion/20 transform hover:scale-[1.02] transition-transform duration-500 bg-white" style={{ minHeight: '400px' }}>
             <img 
               src={IMAGES.hero} 
               alt="Nounours d'amour" 
               className="w-full h-auto object-cover block"
               width="500"
               height="600"
             />
             <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-xl border border-pink-100">
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Prix Spécial</p>
                <p className="text-2xl font-bold text-brand-passion">{PRODUCT.price}</p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;