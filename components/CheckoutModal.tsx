import React, { useState, useEffect } from 'react';
import { X, Lock, Phone, MapPin, User, CheckCircle, MessageCircle } from 'lucide-react';
import { PRODUCT } from '../constants';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    address: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const getWhatsAppUrl = () => {
    // Numéro du vendeur
    const sellerPhone = "2290148088405"; 
    
    // Création du message WhatsApp
    const message = `Bonjour, je souhaite commander le *${PRODUCT.name}* à ${PRODUCT.price}.%0A%0A👤 Nom : ${formData.name}%0A📱 Tél : ${formData.phone}%0A📍 Ville : ${formData.city}%0A🏠 Adresse : ${formData.address}%0A%0AMerci de confirmer la livraison.`;
    
    return `https://wa.me/${sellerPhone}?text=${message}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Redirection WhatsApp
    window.open(getWhatsAppUrl(), '_blank');
    
    // Afficher le message de confirmation
    setShowSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop Blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-float">
        
        {!showSuccess ? (
          <>
            {/* Header */}
            <div className="bg-brand-passion p-6 text-center relative">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-serif font-bold text-white mb-1">Finaliser ma commande</h2>
              <p className="text-pink-100 text-sm">Plus qu'une étape pour recevoir de l'amour.</p>
            </div>

            {/* Product Summary */}
            <div className="bg-pink-50 p-4 flex items-center justify-between border-b border-pink-100">
              <div className="flex items-center gap-3">
                 <div className="w-12 h-12 bg-white rounded-lg overflow-hidden border border-pink-200">
                    <img src="https://i.ibb.co/3yr4LzDt/photo-2026-02-06-08-43-08.jpg" alt="Miniature" className="w-full h-full object-cover" />
                 </div>
                 <div>
                   <p className="font-bold text-gray-800 text-sm">{PRODUCT.name}</p>
                   <p className="text-xs text-gray-500">Quantité: 1</p>
                 </div>
              </div>
              <span className="font-bold text-brand-passion">{PRODUCT.price}</span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-3.5 text-gray-400 w-5 h-5 z-10" />
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Votre Nom complet"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-brand-passion focus:ring-2 focus:ring-pink-100 outline-none transition-all text-gray-800"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-3.5 text-gray-400 w-5 h-5 z-10" />
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="Numéro de téléphone"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-brand-passion focus:ring-2 focus:ring-pink-100 outline-none transition-all text-gray-800"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex gap-4">
                  <div className="relative w-1/2">
                    <MapPin className="absolute left-4 top-3.5 text-gray-400 w-5 h-5 z-10" />
                    <input 
                      type="text" 
                      name="city"
                      required
                      placeholder="Ville"
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-brand-passion focus:ring-2 focus:ring-pink-100 outline-none transition-all text-gray-800"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative w-1/2">
                    <input 
                      type="text" 
                      name="address"
                      required
                      placeholder="Quartier / Adresse"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-brand-passion focus:ring-2 focus:ring-pink-100 outline-none transition-all text-gray-800"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-sm text-gray-600 flex items-start gap-3 mt-4">
                <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>Paiement à la livraison. Vous ne payez que lorsque vous recevez le nounours.</p>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-passion text-white font-bold py-4 rounded-xl shadow-lg shadow-red-500/30 hover:bg-red-700 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 mt-2"
              >
                <span>Confirmer la commande</span>
                <Lock size={18} />
              </button>
              
              <p className="text-center text-xs text-gray-400 mt-2">
                En cliquant, vous serez redirigé vers WhatsApp pour valider.
              </p>
            </form>
          </>
        ) : (
          <div className="p-8 flex flex-col items-center text-center animate-fade-in">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-500 shadow-sm animate-bounce">
              <MessageCircle size={40} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Dernière étape !</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Votre application WhatsApp s'est ouverte. 
              <br />
              <span className="font-bold text-brand-passion">Envoyez le message pré-rempli</span> pour valider votre commande avec notre équipe.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-500 mb-8 border border-gray-100 w-full">
              <p className="mb-2">WhatsApp ne s'est pas ouvert ?</p>
              <button 
                onClick={() => window.open(getWhatsAppUrl(), '_blank')}
                className="text-brand-passion font-bold underline hover:text-red-700 transition-colors"
              >
                Cliquez ici pour réessayer
              </button>
            </div>

            <button 
              onClick={onClose}
              className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-black transition-colors"
            >
              C'est bon, j'ai envoyé
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
