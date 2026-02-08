import React, { useMemo } from 'react';
import { Heart } from 'lucide-react';

interface BackgroundHeartsProps {
  count?: number;
  className?: string;
  direction?: 'up' | 'down';
}

const BackgroundHearts: React.FC<BackgroundHeartsProps> = ({ count = 20, className = '', direction = 'up' }) => {
  const hearts = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      // Alternance Rose Romantique (#FF69B4) et Rouge Passion (#DC143C)
      color: i % 2 === 0 ? '#FF69B4' : '#DC143C', 
      left: Math.random() * 100, // Position horizontale aléatoire 0-100%
      animationDuration: 6 + Math.random() * 6, // 6s à 12s
      animationDelay: Math.random() * 5, // 0s à 5s
      size: 15 + Math.random() * 30, // 15px à 45px
      opacity: 0.5 + Math.random() * 0.3 // 50% à 80%
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`absolute top-0 ${direction === 'down' ? 'animate-float-down' : 'animate-float'}`}
          style={{
            left: `${heart.left}%`,
            color: heart.color,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            // @ts-ignore custom CSS property
            '--heart-opacity': heart.opacity,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.animationDelay}s`,
          }}
        >
          <Heart size="100%" fill="currentColor" />
        </div>
      ))}
    </div>
  );
};

export default BackgroundHearts;