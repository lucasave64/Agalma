import React from 'react';
import { motion } from 'motion/react';
import { Layers, Stethoscope, Building2, TrendingUp } from 'lucide-react';

export const BrandDifferentials: React.FC = () => {
  const differentials = [
    {
      icon: Layers,
      title: 'Trilogía Terapéutica Integrada',
      description: 'Combinamos Kinesiología Deportiva, Osteopatía Estructural y Medicina Tradicional China en un solo tratamiento sinérgico.'
    },
    {
      icon: Stethoscope,
      title: 'Evaluación Biomecánica de Precisión',
      description: 'Analizamos cadenas musculares, postura y balance biomecánico para detectar la causa oculta del dolor.'
    },
    {
      icon: Building2,
      title: 'Instalaciones y Confort Premium',
      description: 'Un espacio diseñado para la serenidad, equipado con aparatología moderna de rehabilitación y salas individuales.'
    },
    {
      icon: TrendingUp,
      title: 'Seguimiento y Longevidad Activa',
      description: 'Te acompañamos con un plan de mantenimiento postural y físico para asegurar resultados duraderos en el tiempo.'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#1b1c1a] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#b8975f]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#b8975f]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#e8d2a6] block mb-3">
            Diferenciales AGALMA
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight font-['Montserrat']">
            Por qué somos la opción de elección para tu salud
          </h2>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#b8975f]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#b8975f]/20 text-[#e8d2a6] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-base font-bold text-white font-['Montserrat'] mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#e4e2de]/80 font-normal leading-relaxed font-['Montserrat']">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
