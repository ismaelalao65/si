import React from 'react';
import { X, Check } from 'lucide-react';

const WhyValentine: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-pink-50/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="text-brand-red font-bold uppercase tracking-wider text-sm mb-2 block">Le Dilemme de la Saint-Valentin</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi choisir le Nounours d'amour ?
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Les fleurs sont belles, mais elles durent 3 jours. Les chocolats font plaisir, mais ils disparaissent en une soirée.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed font-medium">
              Le Nounours d'amour est conçu pour rester. C'est le souvenir tangible de votre affection, présent chaque soir, même quand vous n'êtes pas là.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl max-w-md mx-auto w-full">
            <h3 className="text-center font-serif text-xl font-bold mb-6 text-gray-800">Comparatif Cadeau</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border-b border-gray-100 opacity-60 grayscale">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <X size={16} className="text-gray-500" />
                  </div>
                  <span className="font-medium">Bouquet de fleurs</span>
                </div>
                <span className="text-sm text-gray-500">Fane en 3 jours</span>
              </div>

              <div className="flex items-center justify-between p-4 border-b border-gray-100 opacity-60 grayscale">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <X size={16} className="text-gray-500" />
                  </div>
                  <span className="font-medium">Chocolats</span>
                </div>
                <span className="text-sm text-gray-500">Éphémère</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border-2 border-brand-red/20 scale-105 shadow-sm transform transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="font-bold text-brand-red">Nounours d'amour</span>
                </div>
                <span className="text-sm font-bold text-brand-red">Pour la vie</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyValentine;