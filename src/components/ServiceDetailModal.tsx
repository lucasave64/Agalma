import React from 'react';
import { ServicePillar } from '../types';
import { X, CheckCircle2, Shield, Activity, Link as LinkIcon, Calendar } from 'lucide-react';
import { BOOKING_URL } from '../data/content';

interface ServiceDetailModalProps {
  service: ServicePillar | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
}) => {
  if (!service) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield':
        return <Shield className="w-6 h-6 text-[#b8975f]" />;
      case 'activity':
        return <Activity className="w-6 h-6 text-[#b8975f]" />;
      case 'link':
      default:
        return <LinkIcon className="w-6 h-6 text-[#b8975f]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#fbf9f5] rounded-3xl shadow-2xl border border-[#e4e2de] overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-8 pt-8 pb-6 bg-[#FEFEFE] border-b border-[#e4e2de] flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#fbf9f5] border border-[#b8975f]/50 flex items-center justify-center shrink-0">
              {getIcon(service.icon)}
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#b8975f]">
                SERVICIO INTEGRATIVO &bull; {service.sessionDuration}
              </span>
              <h2 className="text-2xl font-black text-[#1b1c1a] font-['Montserrat']">
                {service.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#fbf9f5] border border-[#d1c5b5]/50 flex items-center justify-center text-[#1b1c1a] hover:bg-[#b8975f] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">
          <p className="text-sm sm:text-base text-[#4e463a] leading-relaxed font-['Montserrat']">
            {service.longDescription}
          </p>

          {/* Techniques */}
          <div className="bg-[#FEFEFE] p-5 rounded-2xl border border-[#e4e2de] atmospheric-shadow space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] font-['Montserrat']">
              Técnicas Especializadas Aplicadas:
            </h4>
            <ul className="space-y-2 text-xs text-[#4e463a] font-['Montserrat']">
              {service.techniques.map((t, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b8975f] shrink-0 mt-1.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-[#FEFEFE] p-5 rounded-2xl border border-[#e4e2de] atmospheric-shadow space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b1c1a] font-['Montserrat']">
              Resultados y Beneficios Clínicos:
            </h4>
            <ul className="space-y-2 text-xs text-[#4e463a] font-['Montserrat']">
              {service.benefits.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b8975f] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 gold-gradient gold-gradient-hover text-white text-xs font-bold uppercase tracking-widest py-3.5 px-6 rounded-full shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Sesión de {service.title}</span>
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
