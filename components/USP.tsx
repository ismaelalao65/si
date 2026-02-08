import React from 'react';
import { ShieldCheck, HeartHandshake, Award } from 'lucide-react';

const USP: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ce n'est pas simplement une peluche
          </h2>
          <p className="text-gray-600">
            C'est un choix que vous faites pour trois raisons précises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-brand-offwhite p-8 rounded-2xl text-center group hover:bg-red-50 transition-colors duration-300">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-brand-red group-hover:scale-110 transition-transform">
              <ShieldCheck size={32} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">Durabilité Incroyable</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Fibres haute densité et coutures renforcées. Contrairement aux cadeaux fragiles, il résiste au temps.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-brand-offwhite p-8 rounded-2xl text-center group hover:bg-pink-50 transition-colors duration-300">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-brand-pink group-hover:scale-110 transition-transform">
              <HeartHandshake size={32} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">Bien-être Immédiat</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Texture apaisante scientifiquement prouvée pour réduire l'anxiété et favoriser l'endormissement.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-brand-offwhite p-8 rounded-2xl text-center group hover:bg-red-50 transition-colors duration-300">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-brand-passion group-hover:scale-110 transition-transform">
              <Award size={32} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">Exclusivité</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Design unique et finitions à la main. Une personnalité reconnaissable qu'on ne trouve pas en magasin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USP;