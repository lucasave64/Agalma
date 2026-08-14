import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SPECIALTY_SECTORS } from '../data/content';
import { SpecialtySector } from '../types';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface SectoresSectionProps {
  onSelectSector: (sector: SpecialtySector) => void;
}

export const SectoresSection: React.FC<SectoresSectionProps> = ({ onSelectSector }) => {
  const [activeTabId, setActiveTabId] = useState<string>(SPECIALTY_SECTORS[0].id);

  const activeSector = SPECIALTY_SECTORS.find((s) => s.id === activeTabId) || SPECIALTY_SECTORS[0];

  return (
    <section id="sectores" className="py-20 md:py-28 bg-[#fbf9f5] text-[#1b1c1a] relative overflow-hidden border-t border-[#e4e2de]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#b8975f]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#b8975f] mb-3 font-['Montserrat']">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ESPECIALIDADES DE ESTILO DE VIDA</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1b1c1a] tracking-tight leading-tight font-['Montserrat'] uppercase">
            Atención Especializada por Sector
          </h2>
          <p className="text-sm sm:text-base text-[#5a564e] font-medium font-['Montserrat'] mt-4 max-w-xl mx-auto">
            Tratamientos diseñados específicamente para las exigencias biomecánicas y posturales de tu día a día.
          </p>
        </motion.div>

        {/* Sector Navigation Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {SPECIALTY_SECTORS.map((sector) => {
            const isActive = sector.id === activeTabId;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveTabId(sector.id)}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider font-['Montserrat'] uppercase transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'bg-[#b8975f] text-white border-[#b8975f] shadow-[0_4px_15px_rgba(184,151,95,0.35)] scale-105'
                    : 'bg-white/80 text-[#3a352e] border-[#e4e2de] shadow-sm hover:border-[#b8975f]/60 hover:bg-white hover:text-[#1b1c1a]'
                }`}
              >
                {sector.title.split('/')[0].split(',')[0]}
              </button>
            );
          })}
        </div>

        {/* Main Section Active Video Hero Display */}
        <div className="relative mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSector.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectSector(activeSector)}
              className="group relative w-full h-[500px] sm:h-[560px] md:h-[620px] rounded-3xl overflow-hidden cursor-pointer bg-[#1b1c1a] border border-[#b8975f]/80 shadow-[0_0_30px_rgba(184,151,95,0.35)] hover:border-[#f3e5c8] hover:shadow-[0_0_45px_rgba(184,151,95,0.65)] transition-all duration-500"
            >
              {/* Background Video - Complete Section Background */}
              {activeSector.video && (
                <video
                  key={activeSector.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none scale-[1.02]"
                >
                  <source src={activeSector.video} type="video/mp4" />
                </video>
              )}

              {/* Gradient Dark Vignette for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/25 group-hover:from-black transition-opacity duration-300" />

              {/* Shiny Gold Fine Inner Frame Accent */}
              <div className="absolute inset-0 rounded-3xl border border-[#f3e5c8]/40 group-hover:border-[#f3e5c8]/90 pointer-events-none transition-colors duration-300 shadow-[inset_0_0_20px_rgba(184,151,95,0.25)]" />

              {/* Hero Typography Overlay */}
              <div className="absolute inset-0 p-6 sm:p-10 md:p-14 flex flex-col justify-end text-white z-10">
                <div className="max-w-3xl">
                  {/* Category Eyebrow Tag */}
                  <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-[#f3e5c8] drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] font-['Montserrat'] mb-3">
                    <Sparkles className="w-4 h-4 text-[#b8975f]" />
                    <span>ESPECIALIDAD DESTACADA</span>
                  </span>

                  {/* Main Title - Hero Typography Style */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white font-['Montserrat'] tracking-tight leading-tight uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] mb-3">
                    {activeSector.title}
                  </h3>

                  {/* Quote / Subtitle */}
                  <p className="text-base sm:text-lg md:text-xl text-[#f3e5c8] font-medium leading-relaxed font-['Montserrat'] italic drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] max-w-2xl mb-6">
                    {activeSector.description}
                  </p>

                  {/* Key Benefits Preview */}
                  {activeSector.benefits && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 max-w-2xl">
                      {activeSector.benefits.slice(0, 2).map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90 font-medium font-['Montserrat'] bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                          <CheckCircle2 className="w-4 h-4 text-[#b8975f] shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Button */}
                  <div className="pt-2">
                    <div className="gold-gradient gold-gradient-hover text-white text-xs sm:text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-full shadow-2xl border border-white/20 inline-flex items-center gap-3 group-hover:scale-105 transition-all">
                      <span>Ver Detalles Completos y Tratamientos</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* All Sectors Cards Grid - Seamless Cards with Background Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALTY_SECTORS.map((sector, index) => {
            const isSelected = sector.id === activeTabId;
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => {
                  setActiveTabId(sector.id);
                  onSelectSector(sector);
                }}
                className={`group relative h-[380px] sm:h-[420px] rounded-3xl overflow-hidden cursor-pointer bg-[#1b1c1a] border transition-all duration-500 hover:-translate-y-1.5 ${
                  isSelected
                    ? 'border-[#f3e5c8] shadow-[0_0_30px_rgba(184,151,95,0.5)] ring-2 ring-[#b8975f]/50'
                    : 'border-[#b8975f]/60 hover:border-[#f3e5c8] shadow-[0_0_20px_rgba(184,151,95,0.25)]'
                }`}
              >
                {/* Background Video */}
                {sector.video ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none scale-[1.02]"
                  >
                    <source src={sector.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20 group-hover:from-black/95 transition-opacity duration-300" />

                {/* Thin Shiny Gold Inner Accent Frame */}
                <div className="absolute inset-0 rounded-3xl border border-[#f3e5c8]/30 group-hover:border-[#f3e5c8]/80 pointer-events-none transition-colors duration-300 shadow-[inset_0_0_15px_rgba(184,151,95,0.2)]" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                  <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#f3e5c8] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-['Montserrat'] mb-1">
                    ESPECIALIDAD AGALMA
                  </span>

                  <h3 className="text-base sm:text-lg md:text-[20px] font-black text-white font-['Montserrat'] tracking-tight uppercase leading-snug drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] mb-2">
                    {sector.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#e4e2de]/90 font-medium leading-relaxed font-['Montserrat'] italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] line-clamp-2 mb-4">
                    {sector.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e8d2a6] group-hover:text-white transition-colors">
                    <span>Saber más</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
