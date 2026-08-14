import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Dr. Alejandro M.',
      role: 'Atleta Atleta & Runner (42k)',
      sector: 'Alto Rendimiento',
      rating: 5,
      comment: 'Llegué con una tendinopatía aquiliana crónica que me impedía entrenar. La combinación de osteopatía con acupuntura médica aceleró mi recuperación de forma increíble. Volví a correr sin dolor en 4 semanas.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'María Elena G.',
      role: 'Adulto Mayor (68 años)',
      sector: 'Plenitud & Movilidad',
      rating: 5,
      comment: 'Pensé que los dolores lumbares y la rigidez en las rodillas eran inevitable parte de la edad. En AGALMA me devolvieron la agilidad para jugar con mis nietos y viajar sin molestias.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Esteban B.',
      role: 'Empresario & Adulto Activo',
      sector: 'Vida Activa',
      rating: 5,
      comment: 'Lo que más valoro es la atención individual de 60 minutos sin interrupciones. Diagnosticaron la causa real de mis contracturas cervicales y me dieron ejercicios posturales clave.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    }
  ];

  return (
    <section id="testimonios" className="py-20 sm:py-24 bg-[#fbf9f5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#b8975f]/10 text-[#755a28] text-xs font-bold uppercase tracking-widest mb-3">
            <div className="flex gap-0.5 text-[#b8975f]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#b8975f]" />
              ))}
            </div>
            <span>4.9 / 5.0 en Reseñas</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1b1c1a] tracking-tight leading-tight font-['Montserrat'] mb-3">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-xs sm:text-sm text-[#4e463a] font-medium font-['Montserrat']">
            Historias reales de personas que recuperaron su movilidad y vitalidad cotidiana en AGALMA.
          </p>
        </motion.div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-6 border border-[#e4e2de] shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[#b8975f]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#b8975f]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#b8975f]/30" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#332e26] font-medium leading-relaxed italic mb-6 font-['Montserrat']">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#e4e2de]/60">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#b8975f]/30 shrink-0"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs sm:text-sm font-bold text-[#1b1c1a] font-['Montserrat']">
                      {item.name}
                    </h4>
                    <CheckCircle className="w-3.5 h-3.5 text-[#b8975f] shrink-0" />
                  </div>
                  <p className="text-[11px] text-[#755a28] font-medium font-['Montserrat']">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verified Rating Banner */}
        <div className="mt-12 text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-[#e4e2de] max-w-xl mx-auto flex items-center justify-center gap-4 text-xs font-semibold text-[#4e463a] font-['Montserrat']">
          <span className="flex items-center gap-1 text-[#b8975f]">
            <Star className="w-4 h-4 fill-[#b8975f]" />
            <strong className="text-[#1b1c1a]">4.9 / 5</strong>
          </span>
          <span className="w-1 h-1 rounded-full bg-[#b8975f]" />
          <span>Más de 350 pacientes atendidos con éxito</span>
          <span className="w-1 h-1 rounded-full bg-[#b8975f]" />
          <span className="text-[#755a28]">Paciente Verificado</span>
        </div>

      </div>
    </section>
  );
};
