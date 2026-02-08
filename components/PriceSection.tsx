import React from 'react';
import Button from './Button';
import { Truck, ShieldCheck, Gift } from 'lucide-react';
import { PRODUCT } from '../constants';

interface PriceSectionProps {
  onBuy: () => void;
}

const PriceSection: React.FC<PriceSectionProps> = ({ onBuy }) => {
  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="bg-white max-w-4xl mx-auto rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="md:w-1/2 bg-brand-rose p-10 text-white flex flex-col justify-center items-center text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">Offre Saint-Valentin</h3>
            <p className="text-pink-100 mb-6 uppercase tracking-widest text-sm font-semibold">Stock Limité</p>
            <div className="text-6xl font-bold mb-2">{PRODUCT.price}</div>
            <p className="text-sm opacity-90">Prix unique • Tout inclus</p>
          </div>

          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-700">
                <Gift className="text-brand-rose w-5 h-5" />
                <span>Peluche <strong>Nounours d'amour</strong> (40cm)</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <Truck className="text-brand-rose w-5 h-5" />
                <span>Livraison Express <strong>24H max</strong></span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <ShieldCheck className="text-brand-rose w-5 h-5" />
                <span>Garantie Qualité & Satisfaction</span>
              </li>
            </ul>

            <Button fullWidth={true} onClick={onBuy} />
            
            <p className="text-xs text-center text-gray-400 mt-4">
              Paiement à la livraison disponible • Satisfait ou remboursé
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PriceSection;