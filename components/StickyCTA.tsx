import React, { useState, useEffect } from 'react';
import Button from './Button';

interface StickyCTAProps {
  onBuy: () => void;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ onBuy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 500px)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 md:hidden animate-slide-up">
      <Button fullWidth={true} onClick={onBuy} />
    </div>
  );
};

export default StickyCTA;