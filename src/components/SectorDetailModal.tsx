import React from 'react';
import { SpecialtySector } from '../types';
import { X, CheckCircle2, AlertCircle, Sparkles, Calendar } from 'lucide-react';
import { BOOKING_URL } from '../data/content';

interface SectorDetailModalProps {
  sector: SpecialtySector | null;
  onClose: () => void;
}

export const SectorDetailModal: React.FC<SectorDetailModalProps> = ({
  sector,
  onClose,
}) => {
  if (!sector) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#fbf9f5] rounded-3xl shadow-2xl border border-[#e4e2de] overflow-hidden my-8">
        
        {/* Banner Media */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          {sector.video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={sector.video} type="video/mp4" />
            </video>
          ) : (
            <img
              src={sector.image}
              alt={sector.title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-[#b8975f] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white z-10">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#f3e5c8] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] block mb-1 font-['Montserrat']">
              ESPECIALIDAD • VITALIDAD EN MOVIMIENTO
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-['Montserrat'] uppercase tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] text-white">
              {sector.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-[#4e463a] leading-relaxed font-['Montserrat']">
            {sector.longDescription}
          </p>

          {/* Common Issues & Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Benefits */}
            <div className="bg-[#FEFEFE] p-5 rounded-2xl border border-[#e4e2de] atmospheric-shadow space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] flex items-center gap-2 font-['Montserrat']">
                <Sparkles className="w-4 h-4 text-[#b8975f]" />
                <span>Beneficios Biomecánicos</span>
              </h4>
              <ul className="space-y-2 text-xs text-[#4e463a] font-['Montserrat']">
                {sector.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#b8975f] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Issues */}
            <div className="bg-[#FEFEFE] p-5 rounded-2xl border border-[#e4e2de] atmospheric-shadow space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] flex items-center gap-2 font-['Montserrat']">
                <AlertCircle className="w-4 h-4 text-[#b8975f]" />
                <span>Afecciones Frecuentes</span>
              </h4>
              <ul className="space-y-2 text-xs text-[#4e463a] font-['Montserrat']">
                {sector.commonIssues.map((issue, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b8975f] shrink-0 mt-1.5" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Recommended Protocols */}
          <div className="p-4 rounded-xl bg-[#f5f3ef] border border-[#e4e2de]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#b8975f] block mb-2">
              Tratamientos Recomendados:
            </span>
            <div className="flex flex-wrap gap-2">
              {sector.recommendedTreatments.map((treatment, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white border border-[#d1c5b5] text-xs font-semibold text-[#1b1c1a]"
                >
                  {treatment}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 gold-gradient gold-gradient-hover text-white text-xs font-bold uppercase tracking-widest py-3.5 px-6 rounded-full shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Cita para {sector.title}</span>
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
