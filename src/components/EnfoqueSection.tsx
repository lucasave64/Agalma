import React from 'react';
import { motion } from 'motion/react';
import { SERVICE_PILLARS } from '../data/content';
import { ServicePillar } from '../types';
import { Shield, Activity, Link as LinkIcon, ChevronRight } from 'lucide-react';

interface EnfoqueSectionProps {
  onSelectService: (service: ServicePillar) => void;
}

export const EnfoqueSection: React.FC<EnfoqueSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield':
        return <Shield className="w-5 h-5 text-[#b8975f]" />;
      case 'activity':
        return <Activity className="w-5 h-5 text-[#b8975f]" />;
      case 'link':
      default:
        return <LinkIcon className="w-5 h-5 text-[#b8975f]" />;
    }
  };

  return (
    <section id="servicios" className="py-20 md:py-28 bg-[#f5f3ef]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text & 3 Pillars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#b8975f] block mb-3 font-['Montserrat']">
              NUESTRO ENFOQUE
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1b1c1a] tracking-tight leading-tight mb-6 font-['Montserrat']">
              Medicina Integrativa y Movimiento Consciente
            </h2>

            <p className="text-sm sm:text-base text-[#4e463a] font-normal leading-relaxed mb-10 max-w-2xl font-['Montserrat']">
              En <strong className="font-extrabold text-[#1b1c1a]">AGALMA</strong>, fusionamos la precisión de la Kinesiología moderna con la sabiduría ancestral de la Medicina Tradicional China. Nuestro objetivo no es solo tratar el síntoma, sino restaurar el flujo vital de tu cuerpo.
            </p>

            {/* 3 Pillar Feature Cards */}
            <div className="space-y-6">
              {SERVICE_PILLARS.map((pillar, idx) => (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => onSelectService(pillar)}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-[#FEFEFE] border border-[#e4e2de]/80 atmospheric-shadow cursor-pointer transition-all duration-300 hover:border-[#b8975f]/50 hover:shadow-md"
                >
                  {/* Icon Badge */}
                  <div className="w-11 h-11 rounded-full bg-[#fbf9f5] border border-[#d1c5b5]/50 flex items-center justify-center shrink-0 group-hover:bg-[#b8975f]/10 group-hover:border-[#b8975f] transition-colors">
                    {getIcon(pillar.icon)}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base sm:text-lg font-extrabold text-[#1b1c1a] font-['Montserrat'] group-hover:text-[#b8975f] transition-colors">
                        {pillar.title}
                      </h3>
                      <ChevronRight className="w-4 h-4 text-[#7f7668] group-hover:text-[#b8975f] transition-colors" />
                    </div>
                    <p className="text-xs sm:text-sm text-[#4e463a] mt-1 leading-relaxed font-['Montserrat']">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Clinic Treatment Photography */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden atmospheric-shadow border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
                alt="Tratamiento de Kinesiología y Osteopatía en Clínica Agalma"
                className="w-full h-[420px] sm:h-[520px] object-cover hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/40 text-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#b8975f] block">
                  Instalaciones de Primer Nivel
                </span>
                <span className="text-xs font-medium text-[#1b1c1a] block mt-0.5">
                  Cuenca, Ecuador &bull; Consultas Privadas
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

