import React, { useState } from 'react';
import { IMAGES } from '../constants';
import { ZoomIn, Sparkles } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleImageChange = (index: number) => {
    if (activeImage === index) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveImage(index);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background blotch */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-romantic/5 -skew-y-3 transform origin-top-left z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Intro Text */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-romantic/10 text-brand-romantic px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            <span>Qualité Premium</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Découvrez chaque détail du Nounours d'amour
          </h2>
          <p className="text-lg text-gray-600">
            Une peluche pensée pour durer, crafted avec amour. Regardez de plus près.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Main Interactive Gallery */}
          <div className="w-full lg:w-2/3">
            
            {/* Main Display Frame */}
            <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] w-full bg-gray-50 rounded-3xl overflow-hidden shadow-xl border border-gray-100 mb-4 group">
              <img 
                src={IMAGES.gallery[activeImage].src} 
                alt={IMAGES.gallery[activeImage].title} 
                className={`w-full h-full object-cover transition-all duration-300 ease-in-out ${isAnimating ? 'opacity-80 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}`}
              />
              
              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 md:p-8 flex items-end justify-between">
                <div className="text-white transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-1">{IMAGES.gallery[activeImage].title}</h3>
                  <p className="text-white/90 text-sm md:text-base font-medium">{IMAGES.gallery[activeImage].desc}</p>
                </div>
                <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={24} />
                </div>
              </div>
            </div>

            {/* Thumbnails Strip */}
            <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
              {IMAGES.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => handleImageChange(idx)}
                  className={`
                    flex-shrink-0 relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden transition-all duration-300
                    ${activeImage === idx 
                      ? 'ring-4 ring-brand-romantic ring-offset-2 scale-105 shadow-md' 
                      : 'opacity-70 hover:opacity-100 hover:scale-105'}
                  `}
                >
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                  {activeImage === idx && (
                    <div className="absolute inset-0 bg-brand-romantic/10"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Feature List */}
          <div className="w-full lg:w-1/3 space-y-8 pt-4">
            <h3 className="font-serif text-2xl font-bold text-gray-900 border-b-2 border-brand-romantic/20 pb-4 inline-block">
              L'excellence sous toutes les coutures
            </h3>
            
            <ul className="space-y-6">
              <li className="flex items-start group cursor-default">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-romantic/20 text-brand-romantic flex items-center justify-center text-sm font-bold mt-1 mr-4 group-hover:bg-brand-romantic group-hover:text-white transition-colors">1</span>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-brand-romantic transition-colors">Toucher Velours Premium</h4>
                  <p className="text-sm text-gray-600 leading-relaxed mt-1">
                    Passez votre main sur l'écran... Si vous pouviez le toucher, vous sentiriez une douceur incomparable qui apaise instantanément.
                  </p>
                </div>
              </li>
              <li className="flex items-start group cursor-default">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-romantic/20 text-brand-romantic flex items-center justify-center text-sm font-bold mt-1 mr-4 group-hover:bg-brand-romantic group-hover:text-white transition-colors">2</span>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-brand-romantic transition-colors">Rembourrage Nuage</h4>
                  <p className="text-sm text-gray-600 leading-relaxed mt-1">
                    Ni trop dur, ni trop mou. La densité parfaite pour des câlins qui réparent le cœur.
                  </p>
                </div>
              </li>
              <li className="flex items-start group cursor-default">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-romantic/20 text-brand-romantic flex items-center justify-center text-sm font-bold mt-1 mr-4 group-hover:bg-brand-romantic group-hover:text-white transition-colors">3</span>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-brand-romantic transition-colors">Design Exclusif</h4>
                  <p className="text-sm text-gray-600 leading-relaxed mt-1">
                    40cm de tendresse. Ce n'est pas un jouet de supermarché, c'est une pièce de collection émotionnelle.
                  </p>
                </div>
              </li>
            </ul>

            <div className="bg-brand-offwhite p-6 rounded-2xl border border-gray-100">
               <p className="text-center italic text-gray-500 text-sm">
                 "J'ai rarement vu une telle qualité de finition. C'est vraiment un cadeau qu'on garde toute la vie."
               </p>
               <div className="flex justify-center mt-3 gap-1">
                 {[1,2,3,4,5].map(i => <Sparkles key={i} size={12} className="text-yellow-400" />)}
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetail;