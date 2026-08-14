import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import logoImage from './IMG/Logo Agalma upscaled.png';

interface HeroProps {
  onExploreSectors: () => void;
  onOpenPhilosophy: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSectors, onOpenPhilosophy }) => {
  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-28 sm:pt-36 pb-16 overflow-hidden bg-[#1b1c1a]">
      {/* Background Video - Fullscreen backdrop, 100% unobstructed */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source
          src="https://res.cloudinary.com/dq9lqahdf/video/upload/v1785511540/Seniors_para_subir_y5tcmc.mp4"
          type="video/mp4"
        />
      </video>

      {/* Very light vignette for text contrast while keeping video completely clear */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#fbf9f5] pointer-events-none" />

      {/* Atmospheric gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#b8975f]/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Content - Placed directly over video with no background cards or blocking elements */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 my-auto">
        
        {/* Monumental Logo Branding */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8"
        >
          <img
            src={logoImage}
            alt="AGALMA Vitalidad en Movimiento"
            className="h-28 sm:h-40 md:h-52 max-w-sm sm:max-w-xl md:max-w-2xl mx-auto -translate-x-2 sm:-translate-x-4 object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] mb-3"
          />
          <span className="block italic font-semibold text-[#f3e5c8] text-base sm:text-2xl md:text-3xl tracking-[0.14em] font-['Montserrat'] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            VITALIDAD EN MOVIMIENTO
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base md:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed mb-10 font-['Montserrat'] drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
        >
          Kinesiología, Osteopatía y Medicina Tradicional China. Un enfoque integrativo para el bienestar de alto rendimiento y la longevidad.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8"
        >
          <button
            onClick={onExploreSectors}
            className="w-full sm:w-auto gold-gradient gold-gradient-hover text-white text-xs font-semibold uppercase tracking-widest px-8 py-3.5 rounded-full shadow-xl cursor-pointer"
          >
            Explorar Sectores
          </button>
          
          <button
            onClick={onOpenPhilosophy}
            className="w-full sm:w-auto border border-white/80 bg-black/30 hover:bg-black/50 text-white text-xs font-semibold uppercase tracking-widest px-8 py-3.5 rounded-full transition-all cursor-pointer shadow-xl backdrop-blur-sm"
          >
            Nuestra Filosofía
          </button>
        </motion.div>

        {/* Scroll Indicator Chevron */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex justify-center pt-2"
        >
          <button
            onClick={onExploreSectors}
            aria-label="Desplazarse a Especialidades"
            className="p-2 text-white/90 hover:text-[#e8d2a6] transition-colors animate-bounce cursor-pointer drop-shadow-md"
          >
            <ChevronDown className="w-7 h-7 stroke-[2]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

