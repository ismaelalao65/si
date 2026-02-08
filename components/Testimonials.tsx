import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Cédric Zinsou",
      location: "Cotonou, Bénin 🇧🇯",
      img: "https://i.ibb.co/Xkk6DPNb/m1.jpg",
      text: "C'est vraiment du beau travail ! J'ai offert ce nounours à ma chérie pour notre anniversaire. Elle n'a pas arrêté de sourire. Les coutures sont impeccables et il est très doux."
    },
    {
      name: "Fabienne Agbo",
      location: "Porto-Novo, Bénin 🇧🇯",
      img: "https://i.ibb.co/VYf2RkQN/w1.jpg",
      text: "Mon mari me l'a offert et j'ai pleuré de joie ! C'est la plus belle peluche que j'ai jamais eue. Je la recommande à toutes les filles qui aiment la tendresse."
    },
    {
      name: "Moussa Diop",
      location: "Dakar, Sénégal 🇸🇳",
      img: "https://i.ibb.co/yFshLc7z/m2.jpg",
      text: "Qualité incroyable, bien mieux que ce qu'on trouve au marché d'habitude. Livraison rapide et soignée. Ma femme est ravie, merci pour le sérieux."
    },
    {
      name: "Rodrigue K.",
      location: "Parakou, Bénin 🇧🇯",
      img: "https://i.ibb.co/bRzYFdWF/m3.jpg",
      text: "Je ne m'attendais pas à une telle douceur. Ma fiancée ne le quitte plus, c'est devenu son nouveau compagnon quand je suis en déplacement professionnel."
    },
    {
      name: "Aïcha Koné",
      location: "Abidjan, Côte d'Ivoire 🇨🇮",
      img: "https://i.ibb.co/TDzn7t8Q/w2.jpg",
      text: "Un cadeau magnifique. La texture est apaisante comme promis dans la description. Ça fait plaisir de voir des produits de cette qualité chez nous."
    },
    {
      name: "Ngozi Okafor",
      location: "Lagos, Nigeria 🇳🇬",
      img: "https://i.ibb.co/RRfPqfd/w3.jpg",
      text: "Le cadeau parfait. Mon chéri m'a surpris avec ce nounours. La qualité est très premium et on sent que ça va durer longtemps. Je recommande vivement !"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-serif text-3xl font-bold mb-4 text-gray-900">
          Ils ont choisi l'amour durable
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Découvrez pourquoi nos clients au Bénin et partout en Afrique nous font confiance pour leurs cadeaux les plus précieux.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-brand-offwhite p-8 rounded-2xl relative hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-6 right-6 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <Quote className="text-brand-rose/20 w-10 h-10 mb-4" />
              <p className="text-gray-700 italic mb-6 relative z-10 text-sm leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4 mt-auto border-t border-gray-200 pt-4">
                <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-500 font-medium">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;