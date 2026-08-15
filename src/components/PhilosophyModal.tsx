import React from 'react';
import { X, Sparkles, ShieldCheck } from 'lucide-react';
import { PHILOSOPHY_CONTENT, BOOKING_URL } from '../data/content';

interface PhilosophyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhilosophyModal: React.FC<PhilosophyModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#fbf9f5] rounded-3xl shadow-2xl border border-[#e4e2de] overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-8 pt-8 pb-6 bg-[#FEFEFE] border-b border-[#e4e2de] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#b8975f]">
              NUESTRA FILOSOFÍA &bull; AGALMA VITALIDAD
            </span>
            <h2 className="text-2xl font-black text-[#1b1c1a] font-['Montserrat'] mt-0.5">
              Bienestar de Alto Rendimiento
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#fbf9f5] border border-[#d1c5b5]/50 flex items-center justify-center text-[#1b1c1a] hover:bg-[#b8975f] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-8 space-y-6">
          
          {/* Quote Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FEFEFE] to-[#f5f3ef] border border-[#b8975f]/40 atmospheric-shadow relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 text-[#b8975f]/10 pointer-events-none">
              <Sparkles className="w-32 h-32" />
            </div>
            <p className="text-sm sm:text-base italic text-[#1b1c1a] font-medium leading-relaxed font-['Montserrat'] relative z-10">
              "{PHILOSOPHY_CONTENT.quote}"
            </p>
          </div>

          {/* 3 Pillars */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] font-['Montserrat']">
              Los Tres Pilares de Nuestra Metodología:
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {PHILOSOPHY_CONTENT.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-[#e4e2de] flex items-start gap-4 atmospheric-shadow"
                >
                  <div className="w-8 h-8 rounded-full bg-[#b8975f]/10 border border-[#b8975f] text-[#b8975f] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1b1c1a] font-['Montserrat']">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#4e463a] mt-1 leading-relaxed font-['Montserrat']">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full sm:w-auto flex-1 gold-gradient gold-gradient-hover text-white text-xs font-bold uppercase tracking-widest py-3.5 px-6 rounded-full shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Experimenta la Experiencia Agalma</span>
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#d1c5b5] text-xs font-bold uppercase tracking-wider text-[#1b1c1a] hover:bg-white cursor-pointer"
            >
              Cerrar
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
