import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin } from 'lucide-react';

export const RealGallery: React.FC = () => {
  const items = [
    {
      title: 'Atención 1 a 1 de Alta Precisión',
      category: 'Evaluación Biomecánica',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Sesiones de Osteopatía y MTC',
      category: 'Tratamiento Integrativo',
      image: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Espacio Sereno y Equipamiento Moderno',
      category: 'Nuestras Instalaciones',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Rehabilitación y Movimiento Activo',
      category: 'Recuperación Funcional',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#fbf9f5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#b8975f]/15 text-[#755a28] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Viví la Experiencia AGALMA</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1b1c1a] tracking-tight leading-tight font-['Montserrat'] mb-3">
            Instalaciones y Tratamiento Real
          </h2>
          <p className="text-xs sm:text-sm text-[#4e463a] font-medium font-['Montserrat']">
            Un entorno concebido para la calma, la concentración terapéutica y el confort absoluto.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-sm border border-[#e4e2de]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#e8d2a6] block mb-1">
                  {item.category}
                </span>
                <h3 className="text-xs sm:text-sm font-bold leading-snug font-['Montserrat']">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Location badge */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs font-semibold text-[#755a28] font-['Montserrat']">
          <MapPin className="w-4 h-4 text-[#b8975f]" />
          <span>Consultorio en Cuenca • Estacionamiento y fácil acceso</span>
        </div>

      </div>
    </section>
  );
};
