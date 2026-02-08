import React from 'react';
import { Moon, Heart, Smile, Sparkles } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Moon size={24} className="text-indigo-500" />,
      title: "Apaisement & Confort",
      desc: "Idéal pour se relaxer après une longue journée."
    },
    {
      icon: <Heart size={24} className="text-brand-red" />,
      title: "Présence Affective",
      desc: "Un rappel constant de votre amour, même à distance."
    },
    {
      icon: <Sparkles size={24} className="text-yellow-500" />,
      title: "Souvenir Durable",
      desc: "Un objet chargé de sens qui traverse les années."
    },
    {
      icon: <Smile size={24} className="text-green-500" />,
      title: "Anti-Stress",
      desc: "Serrer une peluche libère de l'ocytocine, l'hormone du bonheur."
    }
  ];

  return (
    <section className="py-16 bg-brand-offwhite">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-serif text-3xl font-bold mb-12 text-gray-900">
          Bien plus qu'un cadeau
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;