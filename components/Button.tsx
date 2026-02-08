import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  variant?: 'primary' | 'white';
}

const Button: React.FC<ButtonProps> = ({ onClick, className = '', fullWidth = false, variant = 'primary' }) => {
  // Le comportement est maintenant entièrement contrôlé par la prop onClick passée par le parent (App.tsx)
  
  const baseStyles = "font-bold py-3 px-6 md:py-4 md:px-8 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer";
  
  const variants = {
    primary: "bg-brand-red text-white shadow-red-500/40 hover:scale-105 hover:shadow-red-500/60",
    white: "bg-white text-brand-passion shadow-xl shadow-black/10 hover:scale-105 hover:bg-gray-50"
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      <div className="flex flex-col leading-tight text-left">
        <span className="text-sm md:text-lg uppercase tracking-wide">Offrir cette peluche maintenant</span>
        <span className="text-[10px] opacity-90 font-medium normal-case">Paiement à la livraison</span>
      </div>
    </button>
  );
};

export default Button;