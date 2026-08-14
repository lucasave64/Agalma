import React from 'react';
import logoImage from './IMG/Logo Agalma upscaled.png';

interface AgalmaLogoProps {
  className?: string;
  iconOnly?: boolean;
}

export const AgalmaLogo: React.FC<AgalmaLogoProps> = ({ className = '', iconOnly = false }) => {
  return (
    <div className={`inline-flex items-center gap-3 ml-6 sm:ml-12 ${className}`}>
      <img
        src={logoImage}
        alt="AGALMA Vitalidad en Movimiento"
        className={`${iconOnly ? 'h-[59px]' : 'h-[66px] sm:h-[80px]'} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]`}
      />
    </div>
  );
};

