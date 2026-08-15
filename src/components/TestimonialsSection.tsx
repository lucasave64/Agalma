import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, CheckCircle, ChevronLeft, ChevronRight, Sparkles, UserCheck } from 'lucide-react';

interface ReviewItem {
  id: string;
  name: string;
  role: string;
  sector: string;
  rating: number;
  resultBadge: string;
  comment: string;
  avatar: string;
  imageBg: string;
}

export const TestimonialsSection: React.FC = () => {
  const reviews: ReviewItem[] = [
    {
      id: 'rev-1',
      name: 'Dr. Alejandro Morales',
      role: 'Atleta Maratonista (42K)',
      sector: 'Alto Rendimiento & Deporte',
      rating: 5,
      resultBadge: 'Sin dolor en 4 semanas',
      comment: 'Llegué con una tendinopatía aquiliana crónica que me impedía entrenar. La combinación de osteopatía con acupuntura médica aceleró mi recuperación de forma increíble. Volví a competir en mi mejor nivel.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      imageBg: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'rev-2',
      name: 'María Elena Guzmán',
      role: 'Adulto Mayor Activo (68 años)',
      sector: 'Plenitud & Movilidad',
      rating: 5,
      resultBadge: 'Recuperación de movilidad',
      comment: 'Pensé que los dolores lumbares y la rigidez en las rodillas eran una parte inevitable del paso del tiempo. En AGALMA me devolvieron la agilidad para jugar con mis nietos y salir a caminar sin molestias.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
      imageBg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'rev-3',
      name: 'Esteban Benalcázar',
      role: 'Empresario & Diseñador',
      sector: 'Vida Activa & Postura',
      rating: 5,
      resultBadge: 'Postura y descanso óptimos',
      comment: 'Lo que más valoro es la atención individual de 60 minutos sin interrupciones. Diagnosticaron la causa de mis contracturas cervicales y cefaleas, brindándome ejercicios posturales que transformaron mi día.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      imageBg: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'rev-4',
      name: 'Dra. Camila Serrano',
      role: 'Médica Cirujana',
      sector: 'Columna & Ergonomía',
      rating: 5,
      resultBadge: 'Alivio lumbar integral',
      comment: 'Por mi trabajo paso horas de pie en quirófano. Su enfoque de terapia manual osteopática de precisión descomprimió mi columna y corrigió mi eje pélvico. Es el estándar de fisioterapia que todo profesional busca.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      imageBg: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'rev-5',
      name: 'Mateo Valdivieso',
      role: 'Crossfit & Halterofilia',
      sector: 'Rehabilitación Funcional',
      rating: 5,
      resultBadge: 'Retorno seguro al 100%',
      comment: 'Sufrí un desgarro en el manguito rotador y temía no volver a levantar peso. La readaptación neuromuscular y la aparatología de vanguardia me permitieron reincorporarme a mis rutinas con total confianza.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
      imageBg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = reviews.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Optional auto-slide with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  return (
    <section id="testimonios" className="py-20 sm:py-28 bg-[#fbf9f5] relative overflow-hidden">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-96 h-96 bg-[#b8975f]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#c5a66d]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#b8975f]/15 border border-[#b8975f]/30 text-[#755a28] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <div className="flex gap-0.5 text-[#b8975f]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#b8975f]" />
              ))}
            </div>
            <span>4.9 / 5.0 en Reseñas Clínicas</span>
            <Sparkles className="w-3.5 h-3.5 text-[#b8975f]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1b1c1a] tracking-tight leading-tight font-['Montserrat'] mb-4">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-xs sm:text-base text-[#4e463a] font-medium font-['Montserrat'] max-w-xl mx-auto">
            Haz clic en cualquier tarjeta para traerla al frente y conocer las historias reales de transformación y recuperación funcional en AGALMA.
          </p>
        </motion.div>

        {/* 3D Animated Cascading Cards Deck */}
        <div
          className="relative w-full max-w-4xl mx-auto h-[480px] sm:h-[450px] md:h-[420px] flex items-center justify-center select-none"
          style={{ perspective: 1200 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {reviews.map((item, index) => {
            // Calculate relative offset from activeIndex [-2, -1, 0, 1, 2]
            let offset = index - activeIndex;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const isCurrent = offset === 0;
            const absOffset = Math.abs(offset);

            // Hide cards that are too far away for performance and visual clarity
            if (absOffset > 2) {
              return null;
            }

            // 3D positioning calculation mimicking the video's diagonal perspective fan
            const xOffset = offset * 110; // in px
            const zOffset = -absOffset * 80; // depth
            const yOffset = absOffset * 10;
            const rotateY = offset * -18; // Angled fan rotation
            const rotateZ = offset * 1.5;
            const scale = 1 - absOffset * 0.08;
            const opacity = 1 - absOffset * 0.22;
            const zIndex = 30 - absOffset * 5;

            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                initial={false}
                animate={{
                  x: xOffset,
                  y: yOffset,
                  z: zOffset,
                  rotateY: rotateY,
                  rotateZ: rotateZ,
                  scale: scale,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 24,
                  mass: 0.8
                }}
                className={`absolute w-[290px] sm:w-[360px] md:w-[410px] rounded-3xl p-6 sm:p-7 cursor-pointer transition-colors duration-300 ${
                  isCurrent
                    ? 'bg-[#1b1c1a] text-white shadow-[0_25px_60px_-15px_rgba(184,151,95,0.35),0_15px_30px_-10px_rgba(0,0,0,0.5)] border-2 border-[#b8975f]'
                    : 'bg-white text-[#1b1c1a] shadow-[0_15px_35px_-5px_rgba(0,0,0,0.12)] border border-[#e4e2de] hover:border-[#b8975f]/60'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center center',
                }}
              >
                {/* Gold Top Accent Line on Front Card */}
                {isCurrent && (
                  <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#e8d2a6] to-transparent" />
                )}

                <div className="flex flex-col justify-between h-full min-h-[300px] sm:min-h-[290px]">
                  
                  {/* Card Top: Sector Tag & Stars */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                          isCurrent
                            ? 'bg-[#b8975f]/20 text-[#e8d2a6] border border-[#b8975f]/40'
                            : 'bg-[#f4efe6] text-[#755a28] border border-[#e4e2de]'
                        }`}
                      >
                        {item.sector}
                      </span>

                      <div className="flex gap-0.5 text-[#b8975f]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#b8975f]" />
                        ))}
                      </div>
                    </div>

                    {/* Result Badge */}
                    <div className="mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg ${
                          isCurrent
                            ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}
                      >
                        <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{item.resultBadge}</span>
                      </span>
                    </div>

                    {/* Testimonial Quote */}
                    <div className="relative mb-6">
                      <Quote
                        className={`w-7 h-7 absolute -top-2 -left-1 opacity-20 ${
                          isCurrent ? 'text-[#e8d2a6]' : 'text-[#b8975f]'
                        }`}
                      />
                      <p
                        className={`text-xs sm:text-sm font-medium leading-relaxed italic relative z-10 pl-4 font-['Montserrat'] line-clamp-4 ${
                          isCurrent ? 'text-[#f2eee7]' : 'text-[#332e26]'
                        }`}
                      >
                        "{item.comment}"
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom: Patient Avatar & Info */}
                  <div
                    className={`flex items-center justify-between pt-4 border-t ${
                      isCurrent ? 'border-white/15' : 'border-[#e4e2de]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className={`w-11 h-11 rounded-full object-cover border-2 shadow-sm ${
                            isCurrent ? 'border-[#b8975f]' : 'border-[#d1c5b5]'
                          }`}
                        />
                        <div className="absolute -bottom-1 -right-1 bg-[#b8975f] text-white rounded-full p-0.5 shadow-sm">
                          <CheckCircle className="w-3 h-3" />
                        </div>
                      </div>

                      <div>
                        <h4
                          className={`text-xs sm:text-sm font-bold font-['Montserrat'] ${
                            isCurrent ? 'text-white' : 'text-[#1b1c1a]'
                          }`}
                        >
                          {item.name}
                        </h4>
                        <p
                          className={`text-[11px] font-medium font-['Montserrat'] ${
                            isCurrent ? 'text-[#e8d2a6]' : 'text-[#755a28]'
                          }`}
                        >
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {isCurrent && (
                      <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-[#e8d2a6] bg-white/10 px-2.5 py-1 rounded-full">
                        <UserCheck className="w-3 h-3 text-[#b8975f]" />
                        <span>Verificado</span>
                      </span>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Controls & Pagination Dots */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-5">
          
          {/* Arrows & Counter */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              aria-label="Testimonio anterior"
              className="w-11 h-11 rounded-full bg-white hover:bg-[#1b1c1a] text-[#1b1c1a] hover:text-white border border-[#d1c5b5] hover:border-[#1b1c1a] flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Dots navigation */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-[#e4e2de] shadow-inner">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Ver testimonio ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex
                      ? 'w-7 bg-[#b8975f]'
                      : 'w-2.5 bg-[#d1c5b5] hover:bg-[#b8975f]/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Siguiente testimonio"
              className="w-11 h-11 rounded-full bg-white hover:bg-[#1b1c1a] text-[#1b1c1a] hover:text-white border border-[#d1c5b5] hover:border-[#1b1c1a] flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
            >
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Social Proof Footer Pill */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 border border-[#e4e2de] max-w-xl mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-semibold text-[#4e463a] font-['Montserrat'] shadow-sm">
            <span className="flex items-center gap-1.5 text-[#b8975f]">
              <Star className="w-4 h-4 fill-[#b8975f]" />
              <strong className="text-[#1b1c1a] font-black text-sm">4.9 / 5</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-[#b8975f]" />
            <span>+350 pacientes atendidos con éxito</span>
            <span className="w-1 h-1 rounded-full bg-[#b8975f]" />
            <span className="text-[#755a28] font-bold">100% Casos Reales</span>
          </div>

        </div>

      </div>
    </section>
  );
};
