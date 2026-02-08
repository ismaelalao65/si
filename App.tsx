import React, { useState } from 'react';
import Hero from './components/Hero';
import USP from './components/USP';
import WhyValentine from './components/WhyValentine';
import ProductDetail from './components/ProductDetail';
import Benefits from './components/Benefits';
import PriceSection from './components/PriceSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import Button from './components/Button';
import IntroScreen from './components/IntroScreen';
import CheckoutModal from './components/CheckoutModal';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const openCheckout = () => setIsCheckoutOpen(true);
  const closeCheckout = () => setIsCheckoutOpen(false);

  if (!hasEntered) {
    return <IntroScreen onEnter={() => setHasEntered(true)} />;
  }

  return (
    // Application du fond "Rose romantique" en nuance très douce pour le site entier
    <div className="font-sans antialiased text-gray-800 bg-gradient-to-br from-brand-offwhite via-[#FFF0F5] to-white selection:bg-brand-romantic selection:text-white fade-in">
      <main>
        <Hero onBuy={openCheckout} />
        <USP />
        <WhyValentine />
        <ProductDetail />
        <Benefits />
        <PriceSection onBuy={openCheckout} />
        <Testimonials />
        <div className="py-12 flex justify-center pb-24 md:pb-12 bg-white/50 backdrop-blur-sm">
           {/* Final Repeater CTA for Desktop/Bottom */}
           <div className="w-full max-w-md px-4 md:px-0 flex flex-col items-center">
             <h2 className="text-center font-bold text-2xl mb-6 text-gray-900">Ne manquez pas l'occasion</h2>
             <Button fullWidth={true} onClick={openCheckout} />
           </div>
        </div>
      </main>
      <Footer />
      <StickyCTA onBuy={openCheckout} />
      
      {/* Modal de commande */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={closeCheckout} />
    </div>
  );
}

export default App;